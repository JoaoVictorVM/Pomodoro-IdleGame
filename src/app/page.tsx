export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#e63946] mb-2">
          Pomodoro Idle Game
        </h1>
      </div>

      <div className="game-card p-6 max-w-sm w-full text-center">
        <p className="text-[#9090a8] text-sm">
          ✅ Next.js + TypeScript configurado
        </p>
        <p className="text-[#9090a8] text-sm mt-1">
          ✅ Tailwind CSS configurado
        </p>
        <p className="text-[#9090a8] text-sm mt-1">
          ✅ Estrutura de pastas criada
        </p>
        <p className="text-[#9090a8] text-sm mt-1">
          ✅ Tipagens e utilitários prontos
        </p>
      </div>
    </main>
  );
}
