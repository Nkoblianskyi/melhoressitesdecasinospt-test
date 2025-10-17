import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-6">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/casino-bg.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>

          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Política de Cookies
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
              <p className="text-gray-300 mb-4">
                O melhoressitesdecasinospt.com ("nós", "nosso" ou "site") utiliza cookies e tecnologias semelhantes para
                melhorar a sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Esta
                Política de Cookies explica o que são cookies, como os utilizamos e como pode controlá-los.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. O que são Cookies?</h2>
              <p className="text-gray-300 mb-4">
                Cookies são pequenos ficheiros de texto armazenados no seu dispositivo (computador, tablet ou
                smartphone) quando visita um website. Estes ficheiros permitem que o site reconheça o seu dispositivo e
                memorize informações sobre a sua visita, como preferências de idioma e outras configurações.
              </p>
              <p className="text-gray-300">
                Os cookies podem ser "persistentes" (permanecem no seu dispositivo até expirarem ou serem eliminados) ou
                "de sessão" (são eliminados quando fecha o navegador).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Tipos de Cookies que Utilizamos</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">3.1 Cookies Estritamente Necessários</h3>
                <p className="text-gray-300 mb-2">
                  Estes cookies são essenciais para o funcionamento do nosso website e não podem ser desativados nos
                  nossos sistemas. São geralmente definidos apenas em resposta a ações realizadas por si, como definir
                  as suas preferências de privacidade, iniciar sessão ou preencher formulários.
                </p>
                <p className="text-gray-300 text-sm italic">
                  Exemplos: cookies de sessão, cookies de segurança, cookies de preferências de consentimento.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">3.2 Cookies de Desempenho e Análise</h3>
                <p className="text-gray-300 mb-2">
                  Estes cookies permitem-nos contar visitas e fontes de tráfego para que possamos medir e melhorar o
                  desempenho do nosso site. Ajudam-nos a saber quais as páginas mais e menos populares e a ver como os
                  visitantes se movem pelo site. Todas as informações recolhidas por estes cookies são agregadas e,
                  portanto, anónimas.
                </p>
                <p className="text-gray-300 text-sm italic">
                  Exemplos: Google Analytics, métricas de desempenho do site.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">3.3 Cookies de Funcionalidade</h3>
                <p className="text-gray-300 mb-2">
                  Estes cookies permitem que o website forneça funcionalidades melhoradas e personalização. Podem ser
                  definidos por nós ou por fornecedores terceiros cujos serviços adicionámos às nossas páginas. Se não
                  permitir estes cookies, alguns ou todos estes serviços podem não funcionar corretamente.
                </p>
                <p className="text-gray-300 text-sm italic">
                  Exemplos: preferências de idioma, configurações de visualização, conteúdo personalizado.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">3.4 Cookies de Publicidade e Marketing</h3>
                <p className="text-gray-300 mb-2">
                  Estes cookies podem ser definidos através do nosso site pelos nossos parceiros de publicidade. Podem
                  ser usados por essas empresas para construir um perfil dos seus interesses e mostrar-lhe anúncios
                  relevantes noutros sites. Não armazenam diretamente informações pessoais, mas baseiam-se na
                  identificação única do seu navegador e dispositivo de internet.
                </p>
                <p className="text-gray-300 text-sm italic">
                  Exemplos: cookies de afiliados, cookies de remarketing, cookies de redes sociais.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Cookies de Terceiros</h2>
              <p className="text-gray-300 mb-4">
                Alguns cookies no nosso site são colocados por serviços de terceiros que aparecem nas nossas páginas.
                Não controlamos a definição destes cookies, pelo que deve verificar os websites de terceiros para mais
                informações sobre estes cookies e como geri-los.
              </p>
              <p className="text-gray-300">
                Os terceiros que podem definir cookies através do nosso site incluem: fornecedores de análise (Google
                Analytics), plataformas de publicidade, redes sociais e parceiros de afiliados de casinos online.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Como Gerir e Eliminar Cookies</h2>
              <p className="text-gray-300 mb-4">
                Pode controlar e/ou eliminar cookies conforme desejar. Pode eliminar todos os cookies que já estão no
                seu dispositivo e pode configurar a maioria dos navegadores para impedir que sejam colocados. No
                entanto, se o fizer, poderá ter de ajustar manualmente algumas preferências sempre que visitar um site e
                alguns serviços e funcionalidades podem não funcionar.
              </p>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Configurações do Navegador:</h3>
                <ul className="text-gray-300 list-disc pl-6 space-y-1">
                  <li>
                    <strong>Google Chrome:</strong> Definições → Privacidade e segurança → Cookies e outros dados de
                    sites
                  </li>
                  <li>
                    <strong>Mozilla Firefox:</strong> Opções → Privacidade e Segurança → Cookies e Dados de Sites
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferências → Privacidade → Cookies e dados de websites
                  </li>
                  <li>
                    <strong>Microsoft Edge:</strong> Definições → Cookies e permissões do site → Cookies e dados do site
                  </li>
                </ul>
              </div>

              <p className="text-gray-300">
                Para mais informações sobre como gerir cookies, visite{" "}
                <a
                  href="https://www.allaboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:underline"
                >
                  www.allaboutcookies.org
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Consentimento e Alterações</h2>
              <p className="text-gray-300 mb-4">
                Ao continuar a utilizar o nosso website após ter sido informado sobre o uso de cookies, você consente
                com o uso de cookies conforme descrito nesta política. Pode retirar o seu consentimento a qualquer
                momento, alterando as configurações do seu navegador ou contactando-nos.
              </p>
              <p className="text-gray-300">
                Reservamo-nos o direito de alterar esta Política de Cookies a qualquer momento. Quaisquer alterações
                serão publicadas nesta página com uma data de atualização revista.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Contacto</h2>
              <p className="text-gray-300">
                Se tiver questões sobre a nossa Política de Cookies ou sobre como utilizamos cookies, pode contactar-nos
                através do formulário de contacto disponível no nosso website ou enviando um email para o endereço
                indicado na nossa página de contactos.
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-12 pt-8 border-t border-yellow-500/20">
              <p>Última atualização: {new Date().toLocaleDateString("pt-PT", { year: "numeric", month: "long" })}</p>
              <p className="mt-2">melhoressitesdecasinospt.com - Todos os direitos reservados</p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
