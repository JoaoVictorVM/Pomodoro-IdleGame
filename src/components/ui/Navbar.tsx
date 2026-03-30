"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export function Navbar() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  return (
    <nav className="w-full border-b border-[#2a2a3a] bg-[#1a1a24]">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">🍅</span>
          <span className="text-[#f0f0f5] font-bold text-sm hidden sm:block">
            Pomodoro Idle
          </span>
        </Link>

        {/* Auth */}
        <div className="flex items-center gap-3">
          {isLoading ? (
            <span className="text-[#5a5a72] text-sm">...</span>
          ) : session?.user ? (
            <>
              <span className="text-[#9090a8] text-sm hidden sm:block">
                {session.user.name || session.user.email}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-sm text-[#9090a8] hover:text-[#f0f0f5] border border-[#2a2a3a] hover:border-[#9090a8] rounded-lg px-3 py-1.5 transition-colors"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-[#9090a8] hover:text-[#f0f0f5] transition-colors"
              >
                Entrar
              </Link>
              <Link
                href="/register"
                className="text-sm bg-[#e63946] hover:bg-[#c1121f] text-white rounded-lg px-3 py-1.5 transition-colors"
              >
                Registrar
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
