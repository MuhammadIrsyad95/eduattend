import MainLayout from '@/components/layout/MainLayout'

const histories = [
  {
    student: 'John Doe',
    course: 'Advanced Programming',
    type: 'Check In',
    status: 'Present',
    time: '08:12 AM',
    date: '13 May 2026',
  },

  {
    student: 'Sarah Johnson',
    course: 'Database Systems',
    type: 'Late Check In',
    status: 'Late',
    time: '08:31 AM',
    date: '13 May 2026',
  },

  {
    student: 'Michael Chen',
    course: 'Computer Networks',
    type: 'Absent',
    status: 'Absent',
    time: '-',
    date: '13 May 2026',
  },

  {
    student: 'Emily Carter',
    course: 'Artificial Intelligence',
    type: 'Check Out',
    status: 'Completed',
    time: '03:45 PM',
    date: '12 May 2026',
  },
]

export default function HistoryPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
              Attendance History
            </h1>

            <p className="mt-1 text-sm text-zinc-500">
              Academic attendance activity logs
            </p>
          </div>

          <button className="h-12 rounded-2xl border border-zinc-200 bg-white px-5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
            Export Logs
          </button>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex h-11 items-center rounded-2xl border border-zinc-200 bg-white px-4">
            <input
              placeholder="Search student..."
              className="bg-transparent text-sm outline-none placeholder:text-zinc-400"
            />
          </div>

          <select className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-700 outline-none">
            <option>All Status</option>
            <option>Present</option>
            <option>Late</option>
            <option>Absent</option>
          </select>

          <select className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-700 outline-none">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm">
          {/* TOP */}
          <div className="flex items-center justify-between border-b border-zinc-100 p-6">
            <div>
              <h2 className="text-xl font-bold text-zinc-900">
                Activity Logs
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Real-time attendance tracking history
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
              128 Logs
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50/50">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Student
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Course
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Activity
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Time
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {histories.map((history, index) => (
                  <tr
                    key={index}
                    className="border-b border-zinc-100 transition hover:bg-zinc-50/70"
                  >
                    {/* STUDENT */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />

                        <div>
                          <p className="text-sm font-semibold text-zinc-900">
                            {history.student}
                          </p>

                          <p className="mt-1 text-xs text-zinc-500">
                            Academic User
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* COURSE */}
                    <td className="px-6 py-5 text-sm text-zinc-700">
                      {history.course}
                    </td>

                    {/* ACTIVITY */}
                    <td className="px-6 py-5">
                      <div className="inline-flex rounded-xl bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                        {history.type}
                      </div>
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <div
                        className={`inline-flex rounded-xl px-3 py-1 text-xs font-medium ${
                          history.status === 'Present' ||
                          history.status === 'Completed'
                            ? 'bg-emerald-50 text-emerald-600'
                            : history.status === 'Late'
                            ? 'bg-yellow-50 text-yellow-600'
                            : 'bg-red-50 text-red-600'
                        }`}
                      >
                        {history.status}
                      </div>
                    </td>

                    {/* TIME */}
                    <td className="px-6 py-5 text-sm text-zinc-500">
                      {history.time}
                    </td>

                    {/* DATE */}
                    <td className="px-6 py-5 text-sm text-zinc-500">
                      {history.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}