import MainLayout from '@/components/layout/MainLayout'

const courses = [
  {
    code: 'CS101',
    title: 'Advanced Programming',
    lecturer: 'Dr. Sarah Johnson',
    students: 42,
    schedule: 'Mon & Wed • 08:00 AM',
    status: 'Active',
  },

  {
    code: 'CS205',
    title: 'Database Systems',
    lecturer: 'Michael Chen',
    students: 36,
    schedule: 'Tue & Thu • 10:00 AM',
    status: 'Active',
  },

  {
    code: 'CS310',
    title: 'Computer Networks',
    lecturer: 'Emily Carter',
    students: 28,
    schedule: 'Friday • 01:00 PM',
    status: 'Upcoming',
  },
]

export default function CoursesPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
              Courses
            </h1>

            <p className="mt-1 text-sm text-zinc-500">
              Manage academic courses and schedules
            </p>
          </div>

          <button className="h-12 rounded-2xl bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-800">
            Create Course
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">
              Total Courses
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-zinc-900">
              24
            </h2>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">
              Active Classes
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-violet-600">
              18
            </h2>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">
              Total Students
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-emerald-600">
              1,284
            </h2>
          </div>
        </div>

        {/* COURSE TABLE */}
        <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm">
          {/* TOP */}
          <div className="flex items-center justify-between border-b border-zinc-100 p-6">
            <div>
              <h2 className="text-xl font-bold text-zinc-900">
                Active Courses
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Academic semester management
              </p>
            </div>

            <button className="rounded-2xl border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
              Export
            </button>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50/50">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Course
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Lecturer
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Students
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Schedule
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {courses.map((course, index) => (
                  <tr
                    key={index}
                    className="border-b border-zinc-100 transition hover:bg-zinc-50/70"
                  >
                    {/* COURSE */}
                    <td className="px-6 py-5">
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">
                          {course.title}
                        </p>

                        <p className="mt-1 text-xs text-zinc-500">
                          {course.code}
                        </p>
                      </div>
                    </td>

                    {/* LECTURER */}
                    <td className="px-6 py-5 text-sm text-zinc-700">
                      {course.lecturer}
                    </td>

                    {/* STUDENTS */}
                    <td className="px-6 py-5">
                      <div className="inline-flex rounded-xl bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
                        {course.students} Students
                      </div>
                    </td>

                    {/* SCHEDULE */}
                    <td className="px-6 py-5 text-sm text-zinc-500">
                      {course.schedule}
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <div
                        className={`inline-flex rounded-xl px-3 py-1 text-xs font-medium ${
                          course.status === 'Active'
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'bg-yellow-50 text-yellow-600'
                        }`}
                      >
                        {course.status}
                      </div>
                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-5 text-right">
                      <button className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">
                        View
                      </button>
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