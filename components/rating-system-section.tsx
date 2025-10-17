import { Star, CheckCircle, TrendingUp, Search } from "lucide-react"

export function RatingSystemSection() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-black/50 to-green-900/20 rounded-lg p-8 md:p-12 border border-green-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-green-500">Sistema de</span> <span className="text-yellow-400">Classificação</span>
          </h2>
          <p className="text-gray-300 text-center text-lg mb-12 max-w-3xl mx-auto">
            Metodologia rigorosa e transparente para avaliar cada casino online em Portugal.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-black/40 p-6 rounded-lg border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Licenciamento</h3>
              <p className="text-gray-400 text-sm">Verificação de licenças SRIJ e conformidade regulamentar.</p>
            </div>

            <div className="bg-black/40 p-6 rounded-lg border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Segurança</h3>
              <p className="text-gray-400 text-sm">Análise de encriptação SSL, proteção de dados e privacidade.</p>
            </div>

            <div className="bg-black/40 p-6 rounded-lg border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Bónus & RTP</h3>
              <p className="text-gray-400 text-sm">Avaliação de ofertas, termos e taxas de retorno ao jogador.</p>
            </div>

            <div className="bg-black/40 p-6 rounded-lg border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Experiência</h3>
              <p className="text-gray-400 text-sm">Testes de usabilidade, suporte ao cliente e velocidade.</p>
            </div>
          </div>

          <div className="bg-black/60 p-6 rounded-lg border border-yellow-500/10">
            <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Como Classificamos</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-xs font-bold">1</span>
                </div>
                <p className="text-sm">
                  <strong className="text-white">Testes Práticos:</strong> Criamos contas reais e testamos depósitos,
                  jogos e levantamentos.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-xs font-bold">2</span>
                </div>
                <p className="text-sm">
                  <strong className="text-white">Análise Técnica:</strong> Verificamos licenças, certificações de jogos
                  e medidas de segurança.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-xs font-bold">3</span>
                </div>
                <p className="text-sm">
                  <strong className="text-white">Avaliação Comparativa:</strong> Comparamos com padrões da indústria e
                  concorrentes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-xs font-bold">4</span>
                </div>
                <p className="text-sm">
                  <strong className="text-white">Atualização Contínua:</strong> Revisamos regularmente para garantir
                  informações precisas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
