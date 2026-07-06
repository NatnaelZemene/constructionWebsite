/**
 * StatCard — big gold number over an uppercase label, for the dark stats band.
 */
export function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <p className="font-heading text-4xl font-black text-primary md:text-5xl">{value}</p>
      <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-white/60">{label}</p>
    </div>
  )
}
