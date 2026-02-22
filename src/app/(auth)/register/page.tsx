import { RegisterForm } from "@/components/auth/RegisterForm"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#e63946] mt-2">Pomodoro Idle</h1>
          <p className="text-[#9090a8] text-sm mt-1">Crie sua conta e salve seu progresso</p>
        </div>

        {/* Card */}
        <div className="game-card p-6">
          <h3 className="text-lg font-semibold text-[#f0f0f5] mb-6">Criar conta</h3>
          <RegisterForm />
          <p className="text-center text-[#9090a8] text-sm mt-4">
            Já tem conta?{" "}
            <Link href="/login" className="text-[#e63946] hover:underline">
              Entrar
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
