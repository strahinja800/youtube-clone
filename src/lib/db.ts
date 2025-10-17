import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

declare global {
  var prisma: ReturnType<typeof PrismaClient.prototype.$extends> | undefined
}

const client =
  globalThis.prisma || new PrismaClient().$extends(withAccelerate())

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = client
}

export const db = client
