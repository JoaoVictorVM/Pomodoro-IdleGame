import type { Metadata } from "next";
import { SessionProvider } from "@/components/providers/SessionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pomodoro Idle Game",
  description: "Seja produtivo enquanto seu herói luta!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#2E3440] text-[#ECEFF4] antialiased">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
