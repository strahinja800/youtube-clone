import NextAuth, { type DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
  }

  interface Session {
    user: user & DefaultSession['user']
  }
}
