import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zamara-Zwela - Everyday Wellbeing",
  description: "Join the exclusive closed testing for the Zamara-Zwela mobile app. Experience the future of wellness tracking and community.",
  icons: {
    icon: "/logo_dark.png",
    shortcut: "/logo_dark.png",
    apple: "/logo_dark.png",
  },
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
