import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";
import ThemeProvider from "@/context/theme";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CodeOverflow",
  description: "A modern space for developers to ask questions, share insights, and build better software together.",
};

const RootLayout = async ({ children }: { children: Readonly<React.ReactNode> }) => {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body className={`
          ${inter.className}
          ${spaceGrotesk.variable}
          antialiased
        `}>
          <ThemeProvider defaultTheme="system" enableSystem disableTransitionOnChange attribute="class">
            {children}
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
