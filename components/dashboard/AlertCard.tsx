export default function AlertCard() {
  return (
    <div className="rounded-[32px] border border-zinc-200 bg-white p-7 shadow-sm">
      <div className="mb-7">
        <h2 className="text-[22px] font-bold text-zinc-900">
          Recent Alerts
        </h2>

        <p className="mt-1 text-[13px] text-zinc-500">
          Latest notifications
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
          <p className="text-[14px] font-semibold text-red-600">
            Multiple absences detected
          </p>

          <p className="mt-2 text-[12px] text-red-500">
            4 students absent consecutively
          </p>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
          <p className="text-[14px] font-semibold text-amber-600">
            Late attendance spike
          </p>

          <p className="mt-2 text-[12px] text-amber-500">
            Increased by 12% today
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="text-[14px] font-semibold text-emerald-600">
            Perfect attendance class
          </p>

          <p className="mt-2 text-[12px] text-emerald-500">
            CS-402 achieved 100%
          </p>
        </div>
      </div>
    </div>
  )
}