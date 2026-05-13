import MainLayout from '@/components/layout/MainLayout'
import { db } from '@/db'
import { courses } from '@/db/schema'

export default async function CoursesPage() {
  const coursesData = await db
    .select()
    .from(courses)

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">
              Total Courses
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-zinc-900">
              {coursesData.length}
            </h2>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">
              Active Classes
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-violet-600">
              {coursesData.length}
            </h2>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">
              Total Credits
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-emerald-600">
              {coursesData.reduce(
                (acc, item) =>
                  acc + Number(item.credits),
                0
              )}
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
                    Room
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Credits
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
                {coursesData.map((course) => (
                  <tr
                    key={course.id}
                    className="border-b border-zinc-100 transition hover:bg-zinc-50/70"
                  >
                    {/* COURSE */}
                    <td className="px-6 py-5">
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">
                          {course.courseName}
                        </p>

                        <p className="mt-1 text-xs text-zinc-500">
                          {course.id}
                        </p>
                      </div>
                    </td>

                    {/* LECTURER */}
                    <td className="px-6 py-5 text-sm text-zinc-700">
                      {course.lecturer}
                    </td>

                    {/* ROOM */}
                    <td className="px-6 py-5">
                      <div className="inline-flex rounded-xl bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
                        {course.room}
                      </div>
                    </td>

                    {/* CREDITS */}
                    <td className="px-6 py-5 text-sm text-zinc-500">
                      {course.credits} Credits
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <div className="inline-flex rounded-xl bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                        Active
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