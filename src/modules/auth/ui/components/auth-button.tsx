'use client'

import { Button } from '@/components/ui/button'
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { signIn, signOut, useSession } from 'next-auth/react'
import { UserCircleIcon } from 'lucide-react'
import UserNav from '@/modules/home/ui/components/home-navbar/user-nav'

export function AuthButton() {
  const { data: session } = useSession()



  if (session) {
    return (
      <UserNav/>
    )
  }

  return (
    <>
      {/* Add menu items for Studio and User profile */}
      <Button
        variant={'outline'}
        onClick={() => signIn()}
        className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none'
      >
        <UserCircleIcon />
        Sign In
      </Button>
    </>
  )
}
