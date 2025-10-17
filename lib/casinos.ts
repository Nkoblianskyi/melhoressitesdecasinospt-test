export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  reviews: number
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "Lebull",
    logo: "/lebull.svg",
    rating: 9.8,
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    reviews: 3521,
    url: "https://www.lebull.pt/",
  },


  {
    rank: 2,
    name: "Luckia",
    logo: "/luckia.svg",
    rating: 9.6,
    bonus: "Aposta Grátis de Atualmente",
    reviews: 2734,
    url: "https://www.luckia.pt/",
  },
  {
    rank: 3,
    name: "Betclic",
    logo: "/betclic.svg",
    rating: 9.4,
    bonus: "100% Até 20€",
    reviews: 3298,
    url: "https://www.betclic.pt/",
  },
  {
    rank: 4,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    rating: 9.1,
    bonus: "Aposta Grátis de 2€ Atualmente",
    reviews: 3847,
    isTopChoice: true,
    url: "https://www.casinoportugal.pt/",
  },
  {
    rank: 5,
    name: "Solverde",
    logo: "/solverde.svg",
    rating: 9.0,
    bonus: "300% até 30€ em Aposta Grátis",
    reviews: 2956,
    url: "https://www.solverde.pt/",
  },

]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
