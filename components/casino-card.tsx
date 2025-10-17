"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Casino } from "@/lib/casinos"
import Link from "next/link"

interface CasinoCardProps {
  casino: Casino
  index: number
}

const badges = ["MELHOR ESCOLHA", "RECOMENDADO", "POPULAR", "CONFIÁVEL", "TESTADO"]

export function CasinoCard({ casino, index }: CasinoCardProps) {
  const renderStars = (rating: number) => {
    // Convert rating from 10-point scale to 5-point scale
    const starRating = rating / 2

    return (
      <div className="flex items-center justify-center gap-0.5">
        {[...Array(5)].map((_, i) => {
          const fillPercentage = Math.min(Math.max((starRating - i) * 100, 0), 100)

          return (
            <div key={i} className="relative h-4 w-4">
              {/* Empty star outline (always visible) */}
              <Star
                className="absolute inset-0 h-4 w-4 text-yellow-400 stroke-yellow-400 fill-transparent"
                strokeWidth={2}
              />
              {/* Filled star with clip-path based on rating */}
              {fillPercentage > 0 && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
                >
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 stroke-yellow-400" strokeWidth={2} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <div className="relative">
      <Link
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer hover:scale-[1.02] transition-transform duration-200"
      >
        <div
          className={`hidden lg:block relative rounded-lg overflow-hidden ${
            casino.rank === 1
              ? "border-2 border-yellow-500 shadow-lg shadow-yellow-500/20"
              : "border border-yellow-500/20"
          }`}
          style={{
            background: `
              linear-gradient(135deg, rgba(15, 20, 15, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%),
              repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(212, 175, 55, 0.01) 15px, rgba(212, 175, 55, 0.01) 30px)
            `,
          }}
        >
          <div
            className={`${casino.rank === 1 ? "bg-yellow-500" : "bg-green-600"} text-black font-bold text-center py-2 px-4`}
          >
            {badges[index]}
          </div>

          <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
            <div className="absolute top-8 right-8 text-5xl font-serif text-yellow-500">€</div>
            <div className="absolute bottom-12 left-8 text-4xl font-serif text-yellow-500">€</div>
          </div>

          <div className="relative z-10 p-6 mt-2">
            {/* Casino Info */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
              {/* Casino Logo and Name - Left on desktop */}
              <div className="flex flex-col items-center lg:items-start space-y-2 lg:flex-shrink-0">
                <div className="w-36 h-24 flex items-center justify-center">
                  <img
                    src={casino.logo || "/placeholder.svg"}
                    alt={`${casino.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Bonus - Center on desktop */}
              <div className="lg:flex-1 lg:text-center ml-4">
                <p className="text-yellow-400 text-sm font-medium mb-2">OFERTA DE BOAS-VINDAS</p>
                <p className="text-3xl font-bold text-white">{casino.bonus}</p>
              </div>

              <div className="flex flex-col items-center space-y-1 lg:flex-shrink-0">
                <span className="text-yellow-400 font-bold text-2xl">{casino.rating}</span>
                {renderStars(casino.rating)}
                <p className="text-sm text-gray-400">{formatVotes(casino.reviews)} avaliações</p>
              </div>

              {/* Action Buttons - Right on desktop */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:flex-shrink-0 lg:w-48">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">OBTER BÓNUS</Button>
                <p className="text-xs text-gray-400 text-center">18+ • Jogo Seguro</p>
              </div>
            </div>
          </div>

          <div className="bg-black/60 border-t border-yellow-500/20 px-6 py-3">
            <p className="text-xs text-gray-400 text-center">
              Aplicam-se termos e condições. Jogue com responsabilidade. O jogo pode causar dependência.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div
          className={`lg:hidden relative rounded-lg overflow-hidden mb-2 mx-2 ${
            casino.rank === 1
              ? "border-2 border-yellow-500 shadow-lg shadow-yellow-500/20"
              : "border border-yellow-500/20"
          }`}
          style={{
            background: `
              linear-gradient(135deg, rgba(15, 20, 15, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%),
              repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(212, 175, 55, 0.01) 15px, rgba(212, 175, 55, 0.01) 30px)
            `,
          }}
        >
          <div
            className={`${casino.rank === 1 ? "bg-yellow-500" : "bg-green-600"} text-black font-bold text-center py-2 px-4`}
          >
            #{casino.rank} {badges[index]}
          </div>

          {/* Main Content */}
          <div className="p-2 relative">
            {/* Content Grid - Logo and Bonus */}
            <div className="grid grid-cols-2 gap-2 items-center justify-center relative z-10">
              {/* Logo Column */}
              <div className="flex justify-center">
                <div className="bg-black border-2 border-yellow-500/30 p-2 shadow-lg relative">
                  <img
                    src={casino.logo || "/placeholder.svg"}
                    alt={`${casino.name} logo`}
                    className="h-14 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Bonus Column */}
              <div className="text-center">
                <div className="text-xs text-red-400 uppercase font-bold mb-1">BÓNUS BOAS-VINDAS</div>
                <div className="text-xs font-bold text-yellow-400 leading-tight">{casino.bonus}</div>
              </div>
            </div>

            {/* Rating Row - 3 columns */}
            <div className="grid grid-cols-3 items-center justify-center gap-1 mt-1 pt-1 border-t-2 border-yellow-500/20 relative z-10">
              {/* Score */}
              <div className="text-center">
                <div className="text-xl font-bold leading-none mb-1 mt-1.5 text-yellow-400">{casino.rating}</div>
                <div className="text-[8px] text-gray-400 font-bold">SCORE</div>
              </div>

              {/* Stars and Votes */}
              <div className="text-center">
                <div className="flex justify-center gap-0.5 mt-2 mb-1">{renderStars(casino.rating)}</div>
                <div className="text-[10px] text-gray-400 font-bold">({formatVotes(casino.reviews)})</div>
              </div>

              {/* Button */}
              <div className="flex justify-center">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black border-2 border-yellow-500 px-4 py-4 text-xs w-full font-bold shadow-lg">
                  OBTER BÓNUS
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Disclaimer */}
          <div className="bg-black/60 border-t border-yellow-500/20 px-2 py-2">
            <p className="text-[10px] text-gray-400 text-center">18+ | Jogo seguro | Aplicam-se T&C</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
