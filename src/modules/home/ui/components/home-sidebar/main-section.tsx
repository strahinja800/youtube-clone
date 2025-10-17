'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
// import { useAuth, useClerk } from '@clerk/nextjs'
import { FlameIcon, HomeIcon, PlaySquareIcon } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

const items = [
  { title: 'Home', url: '/', icon: HomeIcon },
  {
    title: 'Subscriptions',
    url: '/feed/subscriptions',
    icon: PlaySquareIcon,
    auth: true,
  },
  { title: 'Trending', url: '/feed/trending', icon: FlameIcon },
]

export function MainSection() {
  // const clerk = useClerk()
  // const { userId } = useAuth()

  const { data: session, status } = useSession()

  /* function handleCLick() {
    if (!userId && item.auth)
  } */

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false} // TODO: Change to look at current pathname
                onClick={e => {
                  if (!session && item.auth) {
                    e.preventDefault()
                    return signIn('google')
                  }
                }} // TODO: Make function do something
              >
                <Link
                  href={item.url}
                  className='felx items-center gap-4'
                >
                  <item.icon />
                  <span className='text-sm'>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
