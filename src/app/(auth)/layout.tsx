interface LayoutProps {
  children: React.ReactNode
}

export default function SigninLayout({ children }: LayoutProps) {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      {children}
    </div>
  )
}
