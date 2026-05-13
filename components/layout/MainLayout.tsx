import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export default function MainLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <main className="min-h-screen lg:ml-[260px]">
        <Header />

        <div className="p-4 md:p-6 xl:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}