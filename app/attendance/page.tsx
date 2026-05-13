import MainLayout from '@/components/layout/MainLayout'
import { db } from '@/db'
import { attendance } from '@/db/schema'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'

export default async function AttendancePage() {
    const attendanceData = await db
        .select({
            id: attendance.id,

            userId: attendance.userId,

            course: attendance.course,

            status: attendance.status,

            checkIn: attendance.checkIn,

            checkOut: attendance.checkOut,

            date: attendance.date,

            fullName: users.fullName,

            email: users.email,
        })
        .from(attendance)
        .leftJoin(
            users,
            eq(attendance.userId, users.id)
        )

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
              Attendance
            </h1>

            <p className="mt-1 text-sm text-zinc-500">
              Monitor student attendance in real-time
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="h-12 rounded-2xl border border-zinc-200 bg-white px-5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
              Export
            </button>

            <button className="h-12 rounded-2xl bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-800">
              Scan Attendance
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[30px] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">
              Total Records
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-zinc-900">
              {attendanceData.length}
            </h2>
          </div>

          <div className="rounded-[30px] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">
              Present Today
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-emerald-600">
              {
                attendanceData.filter(
                  (item) => item.status === 'Present'
                ).length
              }
            </h2>
          </div>

          <div className="rounded-[30px] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">
              Late Students
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-yellow-500">
              {
                attendanceData.filter(
                  (item) => item.status === 'Late'
                ).length
              }
            </h2>
          </div>

          <div className="rounded-[30px] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">
              Absent
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-red-500">
              {
                attendanceData.filter(
                  (item) => item.status === 'Absent'
                ).length
              }
            </h2>
          </div>
        </div>

        {/* LIVE SESSION */}
        <div className="rounded-[32px] border border-zinc-200 bg-gradient-to-br from-violet-600 to-fuchsia-500 p-8 text-white shadow-xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-2xl bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-xl">
                Live Session
              </div>

              <h2 className="text-4xl font-black tracking-tight">
                Advanced Programming
              </h2>

              <p className="mt-3 text-white/80">
                Ongoing attendance tracking session
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/15 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/70">
                  Attendance Rate
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  94%
                </h3>
              </div>

              <div className="rounded-2xl bg-white/15 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/70">
                  Records
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  {attendanceData.length}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm">
          {/* TOP */}
          <div className="flex items-center justify-between border-b border-zinc-100 p-6">
            <div>
              <h2 className="text-xl font-bold text-zinc-900">
                Today Attendance
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Student attendance tracking records
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
              Live Updates
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
                    Check In
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Date
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {attendanceData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-zinc-100 transition hover:bg-zinc-50/70"
                  >
                    {/* STUDENT */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />

                        <div>
                          <p className="text-sm font-semibold text-zinc-900">
                           {item.fullName}
                          </p>

                          <p className="mt-1 text-xs text-zinc-500">
                        {item.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* COURSE */}
                    <td className="px-6 py-5 text-sm text-zinc-700">
                      {item.course}
                    </td>

                    {/* CHECKIN */}
                    <td className="px-6 py-5 text-sm text-zinc-500">
                      {item.checkIn || '-'}
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <div
                        className={`inline-flex rounded-xl px-3 py-1 text-xs font-medium ${
                          item.status === 'Present'
                            ? 'bg-emerald-50 text-emerald-600'
                            : item.status === 'Late'
                            ? 'bg-yellow-50 text-yellow-600'
                            : 'bg-red-50 text-red-600'
                        }`}
                      >
                        {item.status}
                      </div>
                    </td>

                    {/* DATE */}
                    <td className="px-6 py-5 text-sm text-zinc-500">
                      {item.date}
                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-5 text-right">
                      <button className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">
                        Details
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