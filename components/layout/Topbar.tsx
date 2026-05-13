import {
  Bell,
  Search,
  Settings,
} from 'lucide-react'

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-[#eef3ff] px-8">
      <div className="relative">
        <Search
          className="absolute left-4 top-3 text-slate-400"
          size={18}
        />

        <input
          placeholder="Search students, classes, or records..."
          className="w-[420px] rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
        />
      </div>

      <div className="flex items-center gap-5">
        <button>
          <Bell
            className="text-slate-600"
            size={20}
          />
        </button>

        <button>
          <Settings
            className="text-slate-600"
            size={20}
          />
        </button>

        <div className="h-10 w-[1px] bg-slate-300" />

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-bold">
              Dean Winchester
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>

          <div className="h-11 w-11 rounded-full bg-blue-600" />
        </div>
      </div>
    </header>
  )
}