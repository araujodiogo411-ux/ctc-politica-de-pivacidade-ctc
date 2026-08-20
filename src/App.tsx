/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#F2F2F2] p-3 sm:p-6 md:p-10 flex items-center justify-center font-sans">
      <div className="w-full max-w-5xl bg-[#FFFFFF] text-[#1A1A1A] rounded-none sm:rounded-lg shadow-sm border border-gray-200/80 p-6 sm:p-10 md:p-14 flex flex-col min-h-full">
        {/* Header */}
        <header className="mb-8 border-b border-gray-100 pb-6">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Política de Privacidade
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 uppercase tracking-widest font-medium">
            Aplicativo CTC Consultas | Organização Pessoal e Datas
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-4 leading-relaxed max-w-2xl">
            Esta Política de Privacidade se aplica ao aplicativo <strong>[CTC consultas]</strong>, desenvolvido por <strong>Diogo Fábio</strong> (
            <a
              href="mailto:araujodiogo411@gmail.com"
              className="text-gray-700 hover:text-black underline underline-offset-2 transition-colors"
            >
              araujodiogo411@gmail.com
            </a>
            ).
          </p>
        </header>

        {/* Content Layout (Clean Minimal Grid for larger screens, stacked on mobile) */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-x-14 lg:gap-x-16 gap-y-8 flex-grow">
          {/* Column 1 */}
          <div className="space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                1. Visão Geral do Aplicativo
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                O aplicativo CTC Consultas é uma ferramenta voltada exclusivamente para a consulta de datas e
                organização pessoal. O objetivo do sistema é auxiliar o usuário na gestão de prazos, compromissos e
                agendamentos cotidianos de forma prática e segura.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                2. Coleta e Uso de Dados
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600 mb-2">
                Para o funcionamento adequado das ferramentas de organização e agendamento, o aplicativo pode
                coletar e processar localmente algumas informações estritamente necessárias fornecidas pelo próprio
                usuário, tais como:
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1 ml-1 leading-relaxed">
                <li>Datas de compromissos, lembretes e prazos inseridos no sistema;</li>
                <li>Títulos, descrições e notas de organização pessoal;</li>
                <li>Preferências de configuração do aplicativo (ex: temas, exibições de calendário).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                3. Armazenamento, Retenção e Compartilhamento de Dados
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-700 font-medium italic mb-1.5">
                Segurança e Privacidade Local:
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600 mb-2">
                Este aplicativo não armazena, retém ou compartilha nenhum dado pessoal do usuário em servidores externos. Todas as informações inseridas e gerenciadas pelo usuário ficam salvas exclusivamente de forma local, no próprio dispositivo móvel/equipamento onde o aplicativo está instalado.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                Como os dados permanecem restritos ao seu dispositivo, nenhum dado de organização pessoal é transmitido para terceiros, comercializado ou utilizado para fins de perfilamento promocional ou publicitário.
              </p>
            </section>
          </div>

          {/* Column 2 */}
          <div className="space-y-6 sm:space-y-8 md:border-l md:border-gray-100 md:pl-14 lg:md:pl-16">
            <section>
              <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                4. Escopo e Ausência de Dados de Saúde
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                O CTC Consultas é estritamente uma plataforma de organização pessoal e consulta de datas
                calendarizadas. O aplicativo não solicita, não coleta, não processa e não envolve qualquer tipo de
                informação relacionada à saúde, histórico médico, exames ou prontuários.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                5. Alterações nesta Política
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir eventuais melhorias no
                aplicativo ou mudanças em exigências legais. Recomenda-se a revisão regular desta página.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                6. Contato e Suporte
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-700 font-medium mb-1">
                Fale Conosco
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600 mb-3">
                Em caso de dúvidas, sugestões ou solicitações sobre esta Política de Privacidade ou sobre o aplicativo,
                entre em contato através dos e-mails oficiais:
              </p>
              <div className="bg-gray-50/80 border border-gray-100 p-3 sm:p-4 rounded-md space-y-2">
                <div className="text-xs sm:text-xs text-gray-600 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-medium text-gray-700">Desenvolvedor:</span>
                  <a
                    href="mailto:araujodiogo411@gmail.com"
                    className="font-mono text-gray-800 hover:text-black underline underline-offset-2 transition-colors"
                  >
                    araujodiogo411@gmail.com
                  </a>
                </div>
                <div className="text-xs sm:text-xs text-gray-600 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-medium text-gray-700">Suporte do Aplicativo:</span>
                  <a
                    href="mailto:ctcconsutas@gmail.com"
                    className="font-mono text-gray-800 hover:text-black underline underline-offset-2 transition-colors"
                  >
                    ctcconsutas@gmail.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-gray-400">
          <p>Última atualização: Agosto de 2026</p>
          <p className="font-semibold text-gray-500 uppercase tracking-widest text-[10px]">
            Desenvolvido por Diogo Fábio
          </p>
        </footer>
      </div>
    </div>
  );
}
