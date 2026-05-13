'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const menus = [
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    label: 'Attendance',
    href: '/attendance',
  },
  {
    label: 'History',
    href: '/history',
  },
  {
    label: 'Users',
    href: '/users',
  },
  {
    label: 'Courses',
    href: '/courses',
  },
  {
    label: 'Schedule',
    href: '/schedule',
  },
  {
    label: 'Analytics',
    href: '/analytics',
  },
  {
    label: 'QR Attendance',
    href: '/qr-attendance',
  },
  {
    label: 'Settings',
    href: '/settings',
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  const [open, setOpen] = useState(false)

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div className="fixed left-0 top-0 z-[60] flex h-[72px] w-full items-center justify-between border-b border-zinc-200 bg-white px-4 lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-sm font-bold text-white">
            EA
          </div>

          <div>
            <h1 className="text-sm font-semibold text-zinc-900">
              EduAttend
            </h1>

            <p className="text-xs text-zinc-500">
              Academic HRIS
            </p>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-[80] flex h-screen w-[260px] flex-col border-r border-zinc-200 bg-white transition-transform duration-300 ${
          open
            ? 'translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* LOGO */}
        <div className="border-b border-zinc-100 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-sm font-bold text-white">
              EA
            </div>

            <div>
              <h1 className="text-[15px] font-semibold text-zinc-900">
                EduAttend
              </h1>

              <p className="text-xs text-zinc-500">
                Academic HRIS
              </p>
            </div>
          </div>
        </div>

        {/* MENU */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-1">
            {menus.map((menu) => {
              const active = pathname === menu.href

              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className={`flex h-11 items-center rounded-xl px-4 text-[14px] font-medium transition-all ${
                    active
                      ? 'bg-violet-50 text-violet-700'
                      : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  {menu.label}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* FOOTER */}
        <div className="border-t border-zinc-100 p-4">
          <button className="h-11 w-full rounded-xl bg-zinc-900 text-sm font-medium text-white transition hover:bg-zinc-800">
            Log Attendance
          </button>
        </div>
      </aside>
    </>
  )
}