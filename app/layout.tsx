import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Mono } from "next/font/google";
import "./globals.css";

const dmmono = DM_Mono({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Yeezy Clone",
  description: "Fake yeezy website. This is just for learning purposes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmmono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
