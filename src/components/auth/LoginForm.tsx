"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError("Email ou senha incorretos")
        return
      }

      router.push("/")
      router.refresh()
    } catch {
      setError("Erro ao fazer login. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      {error && (
        <div className="bg-[#e63946]/10 border border-[#e63946]/30 rounded-lg px-4 py-3 text-[#ff6b6b] text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <label className="text-[#9090a8] text-sm">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          required
          className="bg-[#0f0f13] border border-[#2a2a3a] rounded-lg px-4 py-2.5 text-[#f0f0f5] text-sm placeholder-[#5a5a72] focus:outline-none focus:border-[#e63946] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[#9090a8] text-sm">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          className="bg-[#0f0f13] border border-[#2a2a3a] rounded-lg px-4 py-2.5 text-[#f0f0f5] text-sm placeholder-[#5a5a72] focus:outline-none focus:border-[#e63946] transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#e63946] hover:bg-[#c1121f] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg px-4 py-2.5 text-sm transition-colors mt-2"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>

    </form>
  )
}
