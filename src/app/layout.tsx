import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/common/Navigation";

export const metadata: Metadata = {
  title: "Ced Garcia | Portfolio",
  description: "Software Developer",
};

const chakraPetchBold = localfont({
  src: [{ path: "./assets/fonts/ChakraPetch-Bold.woff2" }],
  variable: "--ChakraPetch-Bold",
});
const chakraPetchSemiBold = localfont({
  src: [{ path: "./assets/fonts/ChakraPetch-SemiBold.woff2" }],
  variable: "--ChakraPetch-SemiBold",
});
const chakraPetchMedium = localfont({
  src: [{ path: "./assets/fonts/ChakraPetch-Medium.woff2" }],
  variable: "--ChakraPetch-Medium",
});
const chakraPetchRegular = localfont({
  src: [{ path: "./assets/fonts/ChakraPetch-Regular.woff2" }],
  variable: "--ChakraPetch-Regular",
});
const chakraPetchLight = localfont({
  src: [{ path: "./assets/fonts/ChakraPetch-Light.woff2" }],
  variable: "--ChakraPetch-Light",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chakraPetchBold.variable} ${chakraPetchSemiBold.variable} ${chakraPetchMedium.variable} ${chakraPetchRegular.variable} ${chakraPetchLight.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
