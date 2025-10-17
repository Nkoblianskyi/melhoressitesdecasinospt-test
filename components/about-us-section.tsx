import { Users, Award, Shield } from "lucide-react"

export function AboutUsSection() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-green-900/20 to-black/50 rounded-lg p-8 md:p-12 border border-yellow-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-yellow-400">Sobre</span> <span className="text-green-500">Nós</span>
          </h2>
          <p className="text-gray-300 text-center text-lg mb-12 max-w-3xl mx-auto">
            Somos especialistas em análise de casinos online em Portugal, dedicados a fornecer informações precisas e
            imparciais.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-500/30">
                <Users className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Equipa Experiente</h3>
              <p className="text-gray-300">
                Mais de 10 anos de experiência coletiva na indústria de jogos online e análise de casinos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <Award className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Análises Independentes</h3>
              <p className="text-gray-300">
                Avaliações 100% imparciais baseadas em testes reais e critérios objetivos de qualidade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                <Shield className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Compromisso com Segurança</h3>
              <p className="text-gray-300">
                Priorizamos a sua segurança, recomendando apenas casinos licenciados e regulamentados pelo SRIJ.
              </p>
            </div>
          </div>

          <div className="mt-12 prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              A nossa missão é ajudar jogadores portugueses a encontrar os melhores casinos online através de análises
              detalhadas, comparações transparentes e informações atualizadas sobre bónus, jogos e métodos de pagamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
