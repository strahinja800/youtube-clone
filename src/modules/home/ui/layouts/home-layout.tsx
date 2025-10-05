import { SidebarProvider } from '@/components/ui/sidebar'
import { HomeNavbar } from '@/modules/home/ui/components/home-navbar/index'
import { HomeSidebar } from '../components/home-sidebar'

interface HomeLayoutProps {
  children: React.ReactNode
}

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <SidebarProvider>
      <div className='h-full'>
        <HomeNavbar />
        <div className='flex min-h-screen pt-[4rem]'>
          <HomeSidebar />
          <main className='flex-1 overflow-y-auto'>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
