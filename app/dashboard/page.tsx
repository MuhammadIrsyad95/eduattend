import MainLayout from '@/components/layout/MainLayout'
import StatsCard from '@/components/dashboard/StatsCard'
import AttendanceChart from '@/components/dashboard/AttendanceChart'
import AlertCard from '@/components/dashboard/AlertCard'

const stats = [
  {
    title: 'Total Students',
    value: '1,284',
    growth: '+12%',
  },
  {
    title: 'Present Today',
    value: '1,142',
    growth: '+4%',
  },
  {
    title: 'Late Arrivals',
    value: '64',
    growth: '-2%',
  },
  {
    title: 'Absent',
    value: '18',
    growth: '-8%',
  },
]

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* HERO */}
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-violet-600 via-indigo-500 to-fuchsia-500 p-8 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <p className="text-sm text-white/80">
                EduAttend Analytics
              </p>

              <h1 className="mt-4 text-[42px] font-bold leading-tight">
                Academic Attendance Dashboard
              </h1>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/80">
                Monitor student attendance and classroom
                performance in one centralized platform.
              </p>

              <div className="mt-7 flex gap-4">
                <button className="h-12 rounded-2xl bg-white px-6 text-sm font-semibold text-zinc-900">
                  View Analytics
                </button>

                <button className="h-12 rounded-2xl border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white">
                  Export Report
                </button>
              </div>
            </div>

            <div className="hidden xl:flex">
              <div className="flex h-52 w-52 items-center justify-center rounded-full border-[14px] border-white/20 border-t-white">
                <div className="text-center">
                  <h2 className="text-6xl font-bold">
                    94%
                  </h2>

                  <p className="mt-3 text-sm text-white/70">
                    Overall Attendance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <StatsCard
              key={item.title}
              title={item.title}
              value={item.value}
              growth={item.growth}
            />
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <AttendanceChart />
          </div>

          <AlertCard />
        </div>
      </div>
    </MainLayout>
  )
}