const chartData = [45, 80, 56, 95, 70, 50, 88]

export default function AttendanceChart() {
  return (
    <div className="rounded-[32px] border border-zinc-200 bg-white p-7 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-[22px] font-bold text-zinc-900">
            Weekly Attendance Trend
          </h2>

          <p className="mt-1 text-[13px] text-zinc-500">
            Student attendance performance
          </p>
        </div>

        <button className="rounded-2xl bg-zinc-100 px-4 py-2 text-[13px] font-medium text-zinc-600">
          Last 7 Days
        </button>
      </div>

      {/* CHART */}
      <div className="flex h-[320px] items-end gap-5">
        {chartData.map((item, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col items-center gap-4"
          >
            <div className="relative flex h-full w-full items-end rounded-[20px] bg-zinc-100">
              <div
                className="w-full rounded-[20px] bg-gradient-to-t from-violet-600 to-indigo-500"
                style={{
                  height: `${item}%`,
                }}
              />
            </div>

            <p className="text-[12px] font-medium text-zinc-500">
              {
                ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][
                  index
                ]
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}