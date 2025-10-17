import { Shield, TrendingUp, Award, CheckCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section className="relative h-[210px] md:h-[250px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.jpg" alt="Casino Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/70 to-background/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center space-y-3 md:space-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance">
            <span className="text-[#FF0000]">Top Casinos</span> <span className="text-[#006600]">Online</span>{" "}
            <span className="text-[#FFD700]">em Portugal</span>
          </h1>

          {/* Update Date */}
          <p className="text-xs md:text-sm text-muted-foreground">
            Atualizado em <span className="text-foreground font-medium">{formattedDate}</span>
          </p>

          {/* Short Description */}
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ranking profissional dos melhores casinos online licenciados pelo SRIJ. Análises independentes,
            transparentes e atualizadas diariamente para sua segurança.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 pt-2">
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10">
                <Image src="/srij.svg" alt="SRIJ Logo" width={32} height={32} />
              </div>
              <div className="text-left">
                <div className="text-[9px] md:text-sm font-semibold text-foreground">100% Licenciados</div>
                <div className="text-[8px] md:text-xs text-muted-foreground">Certificado SRIJ</div>
              </div>
            </div>


            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10">
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-[9px] md:text-sm font-semibold text-foreground">Análise Diária</div>
                <div className="text-[8px] md:text-xs text-muted-foreground">Sempre Atualizado</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-[9px] md:text-sm font-semibold text-foreground">Independente</div>
                <div className="text-[8px] md:text-xs text-muted-foreground">Sem Viés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
