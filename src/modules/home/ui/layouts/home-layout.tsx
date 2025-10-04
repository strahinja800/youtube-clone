import { SidebarProvider } from '@/components/ui/sidebar'
import { HomeNavbar } from '@/modules/home/ui/components/home-navbar/index'

interface HomeLayoutProps {
  children: React.ReactNode
}

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <SidebarProvider>
      <div className='h-full'>
      <HomeNavbar />
      <div>{children}</div>
      </div>
    </SidebarProvider>
  )
}
