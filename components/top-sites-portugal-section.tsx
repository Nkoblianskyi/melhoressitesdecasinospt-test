import { MapPin, Trophy, Sparkles, TrendingUp } from "lucide-react"

export function TopSitesPortugalSection() {
  return (
    <section className="py-16 bg-black/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-red-900/20 to-black/50 rounded-lg p-8 md:p-12 border border-red-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-red-500">Top Casinos</span> <span className="text-green-500">em Portugal</span>
          </h2>
          <p className="text-gray-300 text-center text-lg mb-12 max-w-3xl mx-auto">
            Os melhores sites de casino online licenciados e regulamentados para jogadores portugueses.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/40 p-6 rounded-lg border border-yellow-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Mercado Regulamentado</h3>
                  <p className="text-gray-300">
                    Desde 2015, Portugal possui um mercado de jogos online totalmente regulamentado pelo SRIJ (Serviço
                    de Regulação e Inspeção de Jogos), garantindo segurança e proteção aos jogadores.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-lg border border-green-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Casinos Licenciados</h3>
                  <p className="text-gray-300">
                    Todos os casinos no nosso ranking possuem licença válida emitida pelo SRIJ, cumprindo rigorosos
                    requisitos de segurança, transparência e jogo responsável.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-lg border border-red-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Bónus Exclusivos</h3>
                  <p className="text-gray-300">
                    Os melhores casinos oferecem bónus de boas-vindas generosos, promoções regulares e programas VIP
                    especialmente desenhados para o mercado português.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-lg border border-yellow-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Métodos de Pagamento</h3>
                  <p className="text-gray-300">
                    Suporte para métodos populares em Portugal como MB Way, Multibanco, cartões de crédito e carteiras
                    digitais, com transações rápidas e seguras.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/20 via-red-900/20 to-yellow-900/20 p-6 rounded-lg border border-yellow-500/30">
            <h3 className="text-xl font-bold text-center mb-4">
              <span className="text-green-500">Por que</span> <span className="text-yellow-400">Escolher</span>{" "}
              <span className="text-red-500">Casinos Portugueses?</span>
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Os casinos online licenciados em Portugal oferecem proteção legal completa, suporte em português, métodos
              de pagamento locais e conformidade com as leis de jogo responsável. Ao escolher um casino do nosso
              ranking, garante uma experiência segura, justa e adaptada às suas necessidades como jogador português.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
