import MainLayout from '@/components/layout/MainLayout'

const schedules = [
  {
    course: 'Advanced Programming',
    lecturer: 'Dr. Sarah Johnson',
    room: 'Lab A-201',
    time: '08:00 - 10:00',
    day: 'Monday',
  },

  {
    course: 'Database Systems',
    lecturer: 'Michael Chen',
    room: 'Room B-102',
    time: '10:00 - 12:00',
    day: 'Tuesday',
  },

  {
    course: 'Computer Networks',
    lecturer: 'Emily Carter',
    room: 'Room C-301',
    time: '01:00 - 03:00',
    day: 'Wednesday',
  },

  {
    course: 'Artificial Intelligence',
    lecturer: 'David Kim',
    room: 'Lab AI-01',
    time: '03:00 - 05:00',
    day: 'Thursday',
  },
]

export default function SchedulePage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
              Class Schedule
            </h1>

            <p className="mt-1 text-sm text-zinc-500">
              Academic class and lecture schedules
            </p>
          </div>

          <button className="h-12 rounded-2xl bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-800">
            Create Schedule
          </button>
        </div>

        {/* WEEKLY CARDS */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              {/* TOP */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                    {schedule.day}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900">
                    {schedule.course}
                  </h2>

                  <p className="mt-2 text-sm text-zinc-500">
                    {schedule.lecturer}
                  </p>
                </div>

                <div className="rounded-2xl bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
                  Active
                </div>
              </div>

              {/* INFO */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-xs text-zinc-500">
                    Room
                  </p>

                  <p className="mt-2 text-sm font-semibold text-zinc-900">
                    {schedule.room}
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-xs text-zinc-500">
                    Time
                  </p>

                  <p className="mt-2 text-sm font-semibold text-zinc-900">
                    {schedule.time}
                  </p>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-zinc-500">
                  Weekly academic session
                </p>

                <button className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}