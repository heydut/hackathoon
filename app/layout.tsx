import PrelineScript from "@/components/PrelineScript";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hackathoon",
  description:
    "We are a team of developers who love to code. So why not code for a good cause? Join our hackathons and let's make it happen!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrelineScript />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
