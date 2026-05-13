import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa] text-zinc-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-bold text-white">
              EA
            </div>

            <div>
              <h1 className="text-sm font-bold">
                EduAttend
              </h1>

              <p className="text-xs text-zinc-500">
                Academic HR Platform
              </p>
            </div>
          </div>

          {/* MENU */}
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="rounded-2xl border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
            >
              Dashboard
            </Link>

            <button className="rounded-2xl bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
          {/* LEFT */}
          <div>
            <div className="mb-5 inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-700">
              Modern Academic Attendance System
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight text-zinc-900 lg:text-6xl">
              Smart attendance platform for modern campuses
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-500">
              Manage students, attendance tracking,
              schedules, and academic analytics with a
              beautiful modern dashboard experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="rounded-2xl bg-zinc-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Open Dashboard
              </Link>

              <button className="rounded-2xl border border-zinc-200 bg-white px-7 py-4 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100">
                View Features
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[40px] border border-white/30 bg-white/70 p-6 shadow-2xl backdrop-blur-xl">
              {/* TOP */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Attendance Analytics
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    Real-time academic monitoring
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-600">
                  +12.4%
                </div>
              </div>

              {/* GRAPH */}
              <div className="flex h-64 items-end gap-3">
                {[35, 55, 40, 80, 65, 90, 75].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-[20px] bg-gradient-to-t from-violet-600 to-fuchsia-500"
                      style={{
                        height: `${height}%`,
                      }}
                    />
                  )
                )}
              </div>

              {/* STATS */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-xs text-zinc-500">
                    Students
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    1,284
                  </h3>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-xs text-zinc-500">
                    Present
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    94%
                  </h3>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-xs text-zinc-500">
                    Active
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    42
                  </h3>
                </div>
              </div>
            </div>

            {/* BLUR */}
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-violet-300/30 blur-3xl" />
          </div>
        </div>
      </section>
    </main>
  )
}