import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/common/Navigation";

export const metadata: Metadata = {
  title: "Ced Garcia | Portfolio",
  description: "Software Developer",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
