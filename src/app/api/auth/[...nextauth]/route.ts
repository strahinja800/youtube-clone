import NextAuth from 'next-auth'
import type { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/lib/db' // Naša Prisma instanca
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Ovde možeš dodati druge provajdere (GitHub, Discord, itd.)
  ],
  session: {
    strategy: 'jwt',
  },
  // pages: {
  //   signIn: '/sign-in', // Opciono: ako želiš custom stranicu za logovanje
  // },
  callbacks: {
    async session({ token, session }) {
      if (token && session.user) {
        session.user.id = token.sub
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
