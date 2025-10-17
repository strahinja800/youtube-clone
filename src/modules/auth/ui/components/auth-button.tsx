'use client'

import { Button } from '@/components/ui/button'
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { signIn, signOut, useSession } from 'next-auth/react'
import { UserCircleIcon } from 'lucide-react'

export function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    )
  }

  return (
    // <>
    //   <SignedIn>
    //     <UserButton />
    //     {/* Add menu items for Studio and User profile */}
    //   </SignedIn>
    //   <SignedOut>
    //     <SignInButton mode='modal'>
    //       <Button
    //         variant={'outline'}
    //         className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none'
    //       >
    //         <UserCircleIcon />
    //         Sign In
    //       </Button>
    //     </SignInButton>
    //   </SignedOut>
    // </>
    <>
      Not sined in <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  )
}
