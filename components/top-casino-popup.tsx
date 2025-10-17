"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { getTopCasino } from "@/lib/casinos"

export function TopCasinoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank")
  }

  const starRating = topCasino.rating / 2

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const fillPercentage = Math.min(Math.max((starRating - index) * 100, 0), 100)
      return (
        <div key={index} className="relative inline-block">
          <Star className="h-5 w-5 text-yellow-400" />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border-yellow-500/30 max-w-md p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 px-6 py-3 text-center">
          <h3 className="text-xl font-bold text-black">Oferta Especial Exclusiva</h3>
        </div>

        <div className="relative">
          <div
            className="cursor-pointer hover:scale-[1.01] transition-transform duration-200"
            onClick={handleModalClick}
          >
            <div className="bg-black/40 p-6 border-b border-yellow-500/20">
              <div className="flex justify-center mb-4">
                <img
                  src={topCasino.logo || "/placeholder.svg"}
                  alt={`${topCasino.name} logo`}
                  className="h-16 w-auto object-contain"
                />
              </div>

              <div className="flex justify-center items-center space-x-1">
                {renderStars()}
                <span className="text-lg font-bold text-yellow-400 ml-2">{topCasino.rating}/10</span>
              </div>
            </div>

            <div className="bg-black/40 p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-1 text-center">Bónus:</p>
                <p className="text-3xl text-yellow-400 font-semibold text-center">{topCasino.bonus}</p>
              </div>

              <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg py-6 shadow-lg shadow-yellow-500/50">
                OBTER BÓNUS AGORA
              </Button>

              <p className="text-xs text-gray-400 mt-4 text-center">Oferta limitada. Termos e condições aplicam-se.</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
