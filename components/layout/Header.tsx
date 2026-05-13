export default function Header() {
  return (
    <header className="sticky top-[72px] z-40 hidden h-[76px] items-center justify-between border-b border-zinc-200/80 bg-white/80 px-4 backdrop-blur-xl md:px-6 lg:top-0 lg:flex lg:px-8">
      {/* LEFT */}
      <div className="flex items-center gap-5">
        <div className="flex h-11 w-[220px] xl:w-[340px] items-center rounded-2xl border border-zinc-200 bg-zinc-50/80 px-4 shadow-sm">
          <input
            placeholder="Search students, attendance..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:bg-zinc-50">
          🔔
        </button>

        <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-3 py-2 shadow-sm">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />

          <div className="hidden xl:block">
            <p className="text-sm font-semibold text-zinc-900">
              Muhammad Irsyad
            </p>

            <p className="text-xs text-zinc-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}