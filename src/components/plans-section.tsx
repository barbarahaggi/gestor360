import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui-components/Accordion";
import { Button } from "../ui-components/Button";
import { Card } from "../ui-components/Card";
import { Cloud, Presentation, LaptopMinimal } from "lucide-react";

export function Planos() {
  return (
    <section id="sessao-planos" className="w-full bg-black px-4 sm:px-6 lg:px-16 py-6">
      {/* Título */}
      <div className="flex justify-center ">
        <h1 className="text-amber-700 text-3xl sm:text-4xl md:text-5xl mt-25 mb-12 font-bold text-center pb-8">
          Nossos Planos
        </h1>
      </div>

      {/* Grid responsivo para os planos */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center lg:gap-6 place-items-center gap-8">
            {/* --- PLANO MICRO --- */}
        <Card className="w-full max-w-xs h-fit min-h-110 bg-black  shadow-lg shadow-gray-500 p-6 border-1">
          <div className="flex justify-between">
            <h1 className="text-xl text-gray-200 font-bold">Plano Micro</h1>
            <Cloud className="text-amber-700" />
          </div>
          <div className="mt-8 flex justify-center">
            <span className="text-white text-4xl font-semibold">R$120</span>
          </div>

          <Accordion type="single" className="mx-auto max-w-sm mt-8" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-gray-200 text-md font-bold">
                Gestão financeira básica
              </AccordionTrigger>
              <AccordionContent>
                <ol className="flex flex-col gap-2">
                  <li className="text-gray-300 text-sm">
                    - Registro de entradas e saídas.
                  </li>
                  <li className="text-gray-300 text-sm">
                    - Controle de fluxo de caixa simplificado.
                  </li>
                  <li className="text-gray-300 text-sm">
                    - Emissão de notas fiscais e recibos.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-gray-200 text-md font-bold">
                Gestão administrativa
              </AccordionTrigger>
              <AccordionContent>
                <ol className="flex flex-col gap-2">
                  <li className="text-gray-300 text-sm">
                    - Cadastro e gerenciamento de colaboradores.
                  </li>
                  <li className="text-gray-300 text-sm">
                    - Controle de processos internos.
                  </li>
                  <li className="text-gray-300 text-sm">
                    - Gestão de produtos e serviços.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-gray-200 text-md font-bold">
                Relatórios essenciais
              </AccordionTrigger>
              <AccordionContent>
                <ol className="flex flex-col gap-2">
                  <li className="text-gray-300 text-sm">
                    - Relatório mensal de movimentação financeira.
                  </li>
                  <li className="text-gray-300 text-sm">
                    - Resumo de processos e atividades.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-gray-200 text-md font-bold">
                Sistema de alertas
              </AccordionTrigger>
              <AccordionContent>
                <ol className="flex flex-col gap-2">
                  <li className="text-gray-300 text-sm">
                    - Lembretes de contas a pagar/receber.
                  </li>
                  <li className="text-gray-300 text-sm">
                    - Alertas de fluxo de caixa negativo.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex mt-8 justify-center">
            <Button className="bg-gray-200 text-black font-medium hover:bg-amber-700 hover:text-white w-full sm:w-auto">
              Teste grátis por 30 dias
            </Button>
          </div>
        </Card>

        {/* --- PLANO TECH --- */}
        <Card className="w-full max-w-xs h-fit min-h-110 bg-black border-1 shadow-lg shadow-gray-500 p-6">
          <div className="flex justify-between">
            <h1 className="text-xl text-gray-200 font-bold">Plano Tech</h1>
            <LaptopMinimal className="text-amber-700" />
          </div>
          <div className="mt-8 flex justify-center">
            <span className="text-white text-4xl font-semibold">R$220</span>
          </div>

          <Accordion type="single" className="mx-auto max-w-sm mt-8" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-gray-200 text-md font-bold">
                Tudo do Plano Micro
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-300 text-sm">
                  - Inclui todas as funções do Plano Micro.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-gray-200 text-md font-bold">
                Análises estratégicas
              </AccordionTrigger>
              <AccordionContent>
                <ol className="flex flex-col gap-2">
                  <li className="text-gray-300 text-sm">
                    - Identificação de riscos e oportunidades.
                  </li>
                  <li className="text-gray-300 text-sm">
                    - Sugestões para melhorar a performance financeira.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-gray-200 text-md font-bold">
                Relatórios avançados
              </AccordionTrigger>
              <AccordionContent>
                <ol className="flex flex-col gap-2">
                  <li className="text-gray-300 text-sm">
                    - Relatórios customizáveis e detalhados.
                  </li>
                  <li className="text-gray-300 text-sm">
                    - Acompanhamento de métricas de crescimento.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-gray-200 text-md font-bold">
                Assistente de equipe
              </AccordionTrigger>
              <AccordionContent>
                <ol className="flex flex-col gap-2">
                  <li className="text-gray-300 text-sm">
                    - Análise do desempenho da equipe.
                  </li>
                  <li className="text-gray-300 text-sm">
                    - Sugestões para otimizar RH e reduzir riscos.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex mt-8 justify-center">
            <Button className="bg-amber-700 text-white hover:bg-gray-200 hover:text-amber-700 w-full sm:w-auto">
              Teste grátis por 30 dias
            </Button>
          </div>
        </Card>

        {/* --- PLANO SÊNIOR --- */}
        <Card className="w-full max-w-xs h-fit min-h-110 bg-black border-1 shadow-lg shadow-gray-500 p-6">
          <div className="flex justify-between">
            <h1 className="text-xl text-gray-200 font-bold">Plano Sênior</h1>
            <Presentation className="text-amber-700" />
          </div>
          <div className="mt-8 flex justify-center">
            <span className="text-white text-4xl font-semibold">R$480</span>
          </div>

          <Accordion type="single" className="mx-auto max-w-sm mt-8" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-gray-200 text-md font-bold">
                Tudo do Plano Tech
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-300 text-sm">
                  - Inclui todas as funções do Plano Tech.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-gray-200 text-md font-bold">
                Escalabilidade
              </AccordionTrigger>
              <AccordionContent>
                <ol className="flex flex-col gap-2">
                  <li className="text-gray-300 text-sm">
                    - Sugestões de novos produtos e serviços.
                  </li>
                  <li className="text-gray-300 text-sm">
                    - Análises para expansão de mercado.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-gray-200 text-md font-bold">
                Centro de riscos
              </AccordionTrigger>
              <AccordionContent>
                <ol className="flex flex-col gap-2">
                  <li className="text-gray-300 text-sm">
                    - Estratégias para proteção do negócio.
                  </li>
                  <li className="text-gray-300 text-sm">
                    - Monitoramento de indicadores críticos.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-gray-200 text-md font-bold">
                Relatórios premium
              </AccordionTrigger>
              <AccordionContent>
                <ol className="flex flex-col gap-2">
                  <li className="text-gray-300 text-sm">
                    - Relatórios completos para gestão de grandes equipes.
                  </li>
                  <li className="text-gray-300 text-sm">
                    - Insights para decisões estratégicas de longo prazo.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex mt-8 justify-center">
            <Button className="bg-gray-200 text-black font-medium hover:bg-amber-700 hover:text-white w-full sm:w-auto">
              Teste grátis por 30 dias
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
