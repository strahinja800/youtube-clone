'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import { signOut, useSession } from 'next-auth/react'

export default function userNav() {
  const { data: session, status } = useSession()

  if (!session) return null

  // user data
  const { user } = session
  console.log(user?.image)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/* Users avatar */}
          <Button
            variant={'ghost'}
            className='relative h-8 w-8 rounded-full'
          >
            <Avatar className='h-9 w-9'>
              {/* Google acc photo */}
              <AvatarImage
                src={user?.image ?? ''}
                alt={user?.name ?? 'User'}
              />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        {/* Dropdown content */}
        <DropdownMenuContent
          className='w-56'
          align='end'
          forceMount
        >
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm font-medium leading-none'>{user?.name}</p>
              <p className='text-xs leading-none text-muted-foreground'>
                {user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Menage Account</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: '/' })}
              className='cursor-pointer'
            >
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
