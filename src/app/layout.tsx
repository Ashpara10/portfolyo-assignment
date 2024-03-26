import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ContextProvider from "@/lib/context";

const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["100", "300", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ThePortfolyo",
  description: "Assignment for ThePortfolyo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter?.className} overflow-x-hidden`}>
        <ContextProvider>
          <Header />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
