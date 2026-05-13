type Props = {
  title: string
  value: string
  growth: string
}

export default function StatsCard({
  title,
  value,
  growth,
}: Props) {
  return (
    <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[13px] font-medium text-zinc-500">
            {title}
          </p>

          <h2 className="mt-4 text-[40px] font-bold tracking-tight text-zinc-900">
            {value}
          </h2>
        </div>

        <div className="rounded-xl bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-600">
          {growth}
        </div>
      </div>
    </div>
  )
}