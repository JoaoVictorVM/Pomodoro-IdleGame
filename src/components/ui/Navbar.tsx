"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Timer, LogOut, LogIn, UserPlus } from "lucide-react";

export function Navbar() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  return (
    <nav className="w-full border-b border-[#3B4252] bg-[#2E3440]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-2xl px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-default">
            <div className="w-7 h-7 bg-[#BF616A] rounded-lg flex items-center justify-center">
              <Timer size={14} className="text-[#ECEFF4]" />
            </div>
            <span className="text-[#ECEFF4] font-semibold text-sm">
              Pomodoro Idle Game
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {isLoading ? (
              <span className="text-[#4C566A] text-sm">...</span>
            ) : session?.user ? (
              <>
                <span className="text-[#4C566A] text-sm hidden sm:block">
                  {session.user.name || session.user.email}
                </span>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex items-center gap-1.5 text-sm text-[#4C566A] hover:text-[#ECEFF4] border border-[#3B4252] hover:border-[#434C5E] rounded-lg px-3 py-1.5 transition-colors"
                >
                  <LogOut size={13} />
                  <span>Sair</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 text-sm text-[#ECEFF4] hover:text-[#81A1C1] transition-colors"
                >
                  <LogIn size={13} />
                  <span>Entrar</span>
                </Link>
                <Link
                  href="/register"
                  className="flex items-center gap-1.5 text-sm bg-[#5E81AC] hover:bg-[#81A1C1] text-[#ECEFF4] rounded-lg px-3 py-1.5 transition-colors"
                >
                  <UserPlus size={13} />
                  <span>Registrar</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
