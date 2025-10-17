import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
            Política de Privacidade
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
              <p className="text-gray-300 mb-4">
                O melhoressitesdecasinospt.com ("nós", "nosso" ou "site") está comprometido em proteger a sua
                privacidade e os seus dados pessoais. Esta Política de Privacidade explica como recolhemos, utilizamos,
                divulgamos e protegemos as suas informações quando visita o nosso website e utiliza os nossos serviços.
              </p>
              <p className="text-gray-300">
                Ao utilizar o nosso website, você concorda com a recolha e utilização de informações de acordo com esta
                política. Se não concordar com os termos desta política, por favor não utilize o nosso website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Informações que Recolhemos</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">2.1 Informações Fornecidas Diretamente</h3>
                <p className="text-gray-300 mb-2">
                  Podemos recolher informações que você nos fornece diretamente quando:
                </p>
                <ul className="text-gray-300 list-disc pl-6 space-y-1">
                  <li>Se regista para receber a nossa newsletter</li>
                  <li>Preenche formulários de contacto</li>
                  <li>Participa em inquéritos ou promoções</li>
                  <li>Comunica connosco através de email ou redes sociais</li>
                  <li>Cria uma conta no nosso website (se aplicável)</li>
                </ul>
                <p className="text-gray-300 mt-2">
                  Estas informações podem incluir: nome, endereço de email, idade, localização geográfica e preferências
                  de comunicação.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  2.2 Informações Recolhidas Automaticamente
                </h3>
                <p className="text-gray-300 mb-2">
                  Quando visita o nosso website, recolhemos automaticamente certas informações sobre o seu dispositivo e
                  comportamento de navegação, incluindo:
                </p>
                <ul className="text-gray-300 list-disc pl-6 space-y-1">
                  <li>Endereço IP e localização geográfica aproximada</li>
                  <li>Tipo de navegador e sistema operativo</li>
                  <li>Páginas visitadas e tempo gasto em cada página</li>
                  <li>Links clicados e ações realizadas no site</li>
                  <li>Data e hora das visitas</li>
                  <li>Website de referência (de onde veio)</li>
                </ul>
                <p className="text-gray-300 mt-2">
                  Estas informações são recolhidas através de cookies e tecnologias semelhantes. Para mais informações,
                  consulte a nossa{" "}
                  <Link href="/politica-cookies" className="text-yellow-400 hover:underline">
                    Política de Cookies
                  </Link>
                  .
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">2.3 Informações de Terceiros</h3>
                <p className="text-gray-300">
                  Podemos receber informações sobre si de parceiros de negócios, fornecedores de análise e plataformas
                  de redes sociais quando interage com o nosso conteúdo nessas plataformas.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Como Utilizamos as Suas Informações</h2>
              <p className="text-gray-300 mb-4">Utilizamos as informações recolhidas para os seguintes fins:</p>
              <ul className="text-gray-300 list-disc pl-6 space-y-2">
                <li>
                  <strong>Fornecer e melhorar os nossos serviços:</strong> Operar, manter e melhorar o nosso website e
                  conteúdo
                </li>
                <li>
                  <strong>Comunicação:</strong> Enviar newsletters, atualizações sobre novos casinos, bónus exclusivos e
                  outras informações relevantes (apenas se tiver consentido)
                </li>
                <li>
                  <strong>Personalização:</strong> Personalizar a sua experiência e fornecer conteúdo e recomendações
                  relevantes
                </li>
                <li>
                  <strong>Análise e investigação:</strong> Analisar tendências, comportamento dos utilizadores e
                  eficácia do nosso conteúdo
                </li>
                <li>
                  <strong>Segurança:</strong> Detetar, prevenir e resolver problemas técnicos e de segurança
                </li>
                <li>
                  <strong>Cumprimento legal:</strong> Cumprir obrigações legais e regulamentares
                </li>
                <li>
                  <strong>Marketing de afiliados:</strong> Rastrear cliques e conversões para os nossos parceiros de
                  casino (de forma anónima)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Partilha de Informações</h2>
              <p className="text-gray-300 mb-4">
                Não vendemos, alugamos ou comercializamos as suas informações pessoais a terceiros. No entanto, podemos
                partilhar as suas informações nas seguintes circunstâncias:
              </p>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">4.1 Parceiros de Serviço</h3>
                <p className="text-gray-300">
                  Partilhamos informações com fornecedores terceiros que nos ajudam a operar o nosso website, como
                  serviços de hosting, análise de dados, email marketing e processamento de pagamentos (se aplicável).
                  Estes parceiros estão obrigados a proteger as suas informações e só podem utilizá-las para os fins
                  especificados.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">4.2 Parceiros de Afiliados</h3>
                <p className="text-gray-300">
                  Quando clica num link de casino no nosso site, podemos partilhar informações anónimas (como ID de
                  clique) com os operadores de casino para rastrear referências e comissões de afiliados. Estas
                  informações não incluem dados pessoais identificáveis.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">4.3 Requisitos Legais</h3>
                <p className="text-gray-300">
                  Podemos divulgar as suas informações se formos obrigados por lei, ordem judicial, processo legal ou
                  para proteger os nossos direitos, propriedade ou segurança, ou os de outros.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">4.4 Transferências de Negócio</h3>
                <p className="text-gray-300">
                  Em caso de fusão, aquisição ou venda de ativos, as suas informações podem ser transferidas para a nova
                  entidade. Notificá-lo-emos de qualquer alteração na propriedade ou utilização das suas informações
                  pessoais.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Segurança dos Dados</h2>
              <p className="text-gray-300 mb-4">
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger as suas
                informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Estas medidas
                incluem:
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-1">
                <li>Encriptação SSL/TLS para transmissão de dados</li>
                <li>Armazenamento seguro de dados em servidores protegidos</li>
                <li>Acesso restrito a informações pessoais apenas a funcionários autorizados</li>
                <li>Revisões regulares de segurança e atualizações de sistemas</li>
              </ul>
              <p className="text-gray-300 mt-4">
                No entanto, nenhum método de transmissão pela internet ou armazenamento eletrónico é 100% seguro. Embora
                nos esforcemos para proteger as suas informações, não podemos garantir a sua segurança absoluta.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Os Seus Direitos (RGPD)</h2>
              <p className="text-gray-300 mb-4">
                De acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD) da União Europeia, você tem os
                seguintes direitos relativamente aos seus dados pessoais:
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-2">
                <li>
                  <strong>Direito de acesso:</strong> Pode solicitar uma cópia das informações pessoais que temos sobre
                  si
                </li>
                <li>
                  <strong>Direito de retificação:</strong> Pode solicitar a correção de informações incorretas ou
                  incompletas
                </li>
                <li>
                  <strong>Direito ao apagamento:</strong> Pode solicitar a eliminação dos seus dados pessoais em certas
                  circunstâncias
                </li>
                <li>
                  <strong>Direito à limitação do tratamento:</strong> Pode solicitar a restrição do processamento dos
                  seus dados
                </li>
                <li>
                  <strong>Direito à portabilidade:</strong> Pode solicitar a transferência dos seus dados para outro
                  serviço
                </li>
                <li>
                  <strong>Direito de oposição:</strong> Pode opor-se ao processamento dos seus dados para fins de
                  marketing direto
                </li>
                <li>
                  <strong>Direito de retirar o consentimento:</strong> Pode retirar o seu consentimento a qualquer
                  momento
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                Para exercer qualquer um destes direitos, contacte-nos através dos meios indicados na secção de
                contacto. Responderemos ao seu pedido no prazo de 30 dias.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Retenção de Dados</h2>
              <p className="text-gray-300">
                Retemos as suas informações pessoais apenas pelo tempo necessário para cumprir os fins descritos nesta
                política, a menos que um período de retenção mais longo seja exigido ou permitido por lei. Quando as
                suas informações já não forem necessárias, eliminá-las-emos ou anonimizá-las-emos de forma segura.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Links para Sites de Terceiros</h2>
              <p className="text-gray-300">
                O nosso website contém links para casinos online e outros sites de terceiros. Não somos responsáveis
                pelas práticas de privacidade ou conteúdo desses sites. Recomendamos que leia as políticas de
                privacidade de cada site que visita.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Menores de Idade</h2>
              <p className="text-gray-300">
                O nosso website é destinado apenas a pessoas com 18 anos ou mais. Não recolhemos intencionalmente
                informações pessoais de menores de 18 anos. Se tomarmos conhecimento de que recolhemos dados de um
                menor, eliminaremos essas informações imediatamente. Se acredita que um menor nos forneceu informações
                pessoais, contacte-nos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Jogo Responsável</h2>
              <p className="text-gray-300 mb-4">
                O melhoressitesdecasinospt.com promove o jogo responsável e seguro. O jogo deve ser uma forma de
                entretenimento e não uma fonte de rendimento. Se você ou alguém que conhece tem problemas com o jogo,
                procure ajuda profissional:
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-1">
                <li>
                  <a
                    href="https://www.jogoresponsavel.pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline"
                  >
                    Jogo Responsável Portugal
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.sicad.pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline"
                  >
                    SICAD - Serviço de Intervenção nos Comportamentos Aditivos e nas Dependências
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gamcare.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline"
                  >
                    GamCare
                  </a>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                Todos os casinos recomendados no nosso site são licenciados pelo SRIJ (Serviço de Regulação e Inspeção
                de Jogos) e operam legalmente em Portugal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Alterações a Esta Política</h2>
              <p className="text-gray-300">
                Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. Quaisquer
                alterações serão publicadas nesta página com uma data de atualização revista. Recomendamos que reveja
                esta política periodicamente para se manter informado sobre como protegemos as suas informações. A
                utilização continuada do nosso website após alterações constitui a sua aceitação da política revista.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">12. Contacto</h2>
              <p className="text-gray-300 mb-4">
                Se tiver questões, preocupações ou pedidos relacionados com esta Política de Privacidade ou com o
                tratamento dos seus dados pessoais, pode contactar-nos através de:
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-1">
                <li>Formulário de contacto disponível no nosso website</li>
                <li>Email: info@melhoressitesdecasinospt.com</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Faremos o nosso melhor para responder ao seu pedido no prazo de 30 dias.
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
