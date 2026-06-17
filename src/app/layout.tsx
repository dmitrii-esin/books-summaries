import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cognitive Architecture Dashboard | Unified Intelligence",
  description: "An agent-first, high-performance dashboard operationalizing scientific frameworks (Sapolsky, Taleb, Kahneman, Newport, Oakley) into visual architecture.",
  keywords: ["Cognitive Architecture", "Deep Work", "Dual Systems", "Antifragility", "Determinism"],
  openGraph: {
    title: "Cognitive Architecture Dashboard",
    description: "Operationalize scientific frameworks into actionable visual architecture.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex text-gray-200 bg-[#0a0a0a]">
        <Sidebar />
        <main className="flex-1 flex flex-col h-screen overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
