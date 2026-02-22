import { createAuthClient } from "better-auth/react";

function getBaseURL(): string {
    if (typeof window !== "undefined") return window.location.origin;
    return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
}

export const authClient = createAuthClient({
    baseURL: getBaseURL(),
});

export const { useSession, signIn, signOut } = authClient;
