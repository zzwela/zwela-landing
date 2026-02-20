import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// These would be set in your .env file
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const GOOGLE_ADMIN_EMAIL = process.env.GOOGLE_ADMIN_EMAIL; // Admin user to impersonate
const GOOGLE_GROUP_ID = process.env.GOOGLE_GROUP_ID; // e.g. 'testers@yourdomain.com'

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_ADMIN_EMAIL || !GOOGLE_GROUP_ID) {
            console.warn('Google Group configuration missing. Mocking success for demo.');
            // For development/demo purposes
            return NextResponse.json({ success: true, message: 'User added to group (mocked)' });
        }

        const auth = new google.auth.JWT({
            email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: GOOGLE_PRIVATE_KEY,
            scopes: ['https://www.googleapis.com/auth/admin.directory.group.member'],
            subject: GOOGLE_ADMIN_EMAIL
        });

        const admin = google.admin({ version: 'directory_v1', auth });

        await admin.members.insert({
            groupKey: GOOGLE_GROUP_ID,
            requestBody: {
                email: email,
                role: 'MEMBER',
            },
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Error adding user to Google Group:', error);

        // If user already exists in group, return success anyway
        if (error.code === 409) {
            return NextResponse.json({ success: true, message: 'User already in group' });
        }

        return NextResponse.json({ error: 'Failed to add user to group', details: error.message }, { status: 500 });
    }
}
