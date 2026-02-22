import { LoginForm } from "@/components/auth/LoginForm"
import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#e63946] mt-2">Pomodoro Idle</h1>
          <p className="text-[#9090a8] text-sm mt-1">Entre para salvar seu progresso</p>
        </div>

        {/* Card */}
        <div className="game-card p-6">
          <h3 className="text-lg font-semibold text-[#f0f0f5] mb-6">Entrar</h3>
          <LoginForm />
          <p className="text-center text-[#9090a8] text-sm mt-4">
            Não tem conta?{" "}
            <Link href="/register" className="text-[#e63946] hover:underline">
              Registrar
            </Link>
          </p>
        </div>

        {/* Jogar sem login */}
        <div className="text-center mt-4">
          <Link
            href="/"
            className="text-[#5a5a72] text-sm hover:text-[#9090a8] transition-colors"
          >
            Continuar sem conta →
          </Link>
        </div>

      </div>
    </main>
  )
}
