import admin from 'firebase-admin';

let initialized = false;

function parseServiceAccount(): admin.ServiceAccount | null {
  const svcJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  let privateKey = process.env.FIREBASE_PRIVATE_KEY;
  if (privateKey?.includes('\\n')) {
    privateKey = privateKey.replace(/\\n/g, '\n');
  }

  if (svcJson) {
    return JSON.parse(svcJson) as admin.ServiceAccount;
  }
  if (projectId && clientEmail && privateKey) {
    return { projectId, clientEmail, privateKey };
  }
  return null;
}

/** True when a service-account JSON or discrete env vars are present (same pattern as zwela-auth). */
export function isLandingFirestoreConfigured(): boolean {
  return parseServiceAccount() !== null;
}

function initFirebaseAdmin(): typeof admin {
  if (initialized) return admin;
  if (admin.apps.length) {
    initialized = true;
    return admin;
  }

  const creds = parseServiceAccount();
  if (!creds) {
    throw new Error('Firebase Admin is not configured');
  }

  admin.initializeApp({
    credential: admin.credential.cert(creds),
  });
  initialized = true;
  return admin;
}

export type IosLandingIntent = 'both' | 'beta' | 'launch';

/**
 * Upserts one document per email under
 * `FIRESTORE_LANDING_IOS_SIGNUPS_COLLECTION` (default `landing_ios_signups`).
 */
export async function saveIosLandingSignup(payload: {
  email: string;
  intent: IosLandingIntent;
  waitlist: boolean;
  beta: boolean;
}): Promise<void> {
  initFirebaseAdmin();
  const db = admin.firestore();
  const collectionName =
    process.env.FIRESTORE_LANDING_IOS_SIGNUPS_COLLECTION ?? 'landing_ios_signups';
  const emailKey = payload.email.toLowerCase().trim();
  const ref = db.collection(collectionName).doc(emailKey);
  const now = admin.firestore.FieldValue.serverTimestamp();

  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const base = {
      email: emailKey,
      intent: payload.intent,
      waitlist: payload.waitlist,
      beta: payload.beta,
      source: 'zwela-landing',
      updatedAt: now,
    };
    if (snap.exists) {
      tx.set(ref, base, { merge: true });
    } else {
      tx.set(ref, { ...base, createdAt: now });
    }
  });
}
