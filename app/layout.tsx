import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import NavigationWithVariant from "@/components/NavigationWithVariant";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    url: site.meta.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <NavigationWithVariant />
        {children}
      </body>
    </html>
  );
}
