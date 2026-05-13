export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-[72px] items-center justify-between border-b border-zinc-200 bg-white px-8">
      {/* SEARCH */}
      <div className="flex h-11 w-[320px] items-center rounded-xl border border-zinc-200 bg-zinc-50 px-4">
        <input
          placeholder="Search..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        <button className="text-sm text-zinc-500 hover:text-zinc-900">
          Notifications
        </button>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-violet-600" />

          <div>
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