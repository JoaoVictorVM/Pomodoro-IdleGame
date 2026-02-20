import 'dotenv/config'
import { PrismaClient } from "../src/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import bcrypt from "bcryptjs"

const adapter = new PrismaPg({ connectionString: process.env.PRISMA_DATABASE_URL! })
const prisma = new PrismaClient({ adapter } as any)

async function main() {
  console.log("🌱 Iniciando seed...")
  const passwordHash = await bcrypt.hash("senha123", 12)
  const user = await prisma.user.upsert({
    where: { email: "teste@exemplo.com" },
    update: {},
    create: {
      name: "Jogador Teste",
      email: "teste@exemplo.com",
      passwordHash,
      stats: {
        create: { coins: 50, damage: 5, luck: 1, speed: 1, dmgLevel: 0, luckLevel: 0, speedLevel: 0, currentWave: 1 },
      },
    },
    include: { stats: true },
  })
  console.log(`✅ Usuário criado: ${user.email} | Coins: ${user.stats?.coins}`)
}

main()
  .catch((e) => { console.error("❌ Erro:", e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })