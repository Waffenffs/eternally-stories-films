import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eternally Stories Films",
  authors: [{
    "name": "Waffen Sultan",
    "url": "https://github.com/Waffenffs"
  }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
