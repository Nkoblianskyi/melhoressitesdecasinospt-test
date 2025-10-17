import { CasinoCard } from "./casino-card"
import { casinos } from "@/lib/casinos"

export function RankingsSection() {
  return (
    <section id="rankings" className="py-0">
      <div className="max-w-6xl mx-auto px-4">

          

          <div className="space-y-6">
            {casinos.map((casino, index) => (
              <CasinoCard key={casino.rank} casino={casino} index={index} />
            ))}
          </div>

      </div>
    </section>
  )
}
