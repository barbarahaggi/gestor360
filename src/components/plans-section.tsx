import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui-components/Accordion";
import { Button } from "../ui-components/Button";
import { Card } from "../ui-components/Card";
// import { Divider } from "../ui-components/Divider";
import { Cloud, Presentation, LaptopMinimal  } from 'lucide-react';



export function Planos() {
    return (
        <>
            <section id="sessao-planos" className=" w-full h-130 mb-48">
                <div className="flex justify-center">
        <h1 className="text-amber-700 text-4xl mt-24 mb-16 font-bold">Pacotes de Crescimento</h1>
            </div>
                <div className="flex gap-11 align-center justify-center max-w-full flex-col md:flex-row">
                    <div className="w-72">
                    <Card className="mx-auto  h-fit min-h-110 bg-black border-0 shadow-lg shadow-gray-500 ">
                        <div className="flex justify-between">
                            <h1 className="text-xl text-gray-200 flex font-bold">Plano Micro</h1>
                            <Cloud className="text-amber-700" />
                        </div>
                        <div className="mt-8 flex align-center justify-center">
                            <span className="text-white text-4xl">R$120</span>
                        </div>
                        <Accordion type="single" className="mx-auto max-w-sm mt-12" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Gestão financeira básica</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50 text-sm"> 
                                            
                                           - Registro de entradas e saídas.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           
                                           - Controle de fluxo de caixa simplificado.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                            
                                           - Emissão de notas fiscais e recibos.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Gestão administrativa</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Cadastro e gerenciamento de colaboradores.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Controle de processos internos.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                            - Gestão de produtos e serviços.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Relatórios essenciais</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Relatório mensal de movimentação financeira.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Resumo de processos e atividades.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Sistema de alertas</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className="text-gray-300 dark:text-gray-50">
                                          - Lembretes de contas a pagar/receber.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                          - Alertas de fluxo de caixa negativo.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
<div className="flex mt-20 align-center justify-center">
                    <Button className="bg-gray-200 text-amber-700 hover:bg-amber-700 hover:text-white">Teste grátis por 30 dias</Button>

                    </div>
                    </Card>
                    </div>
                    
                
                 <div className="w-72">
                  <Card className="mx-auto  h-fit min-h-110 bg-black border-0 shadow-lg shadow-gray-500 ">
                        <div className="flex justify-between">
                            <h1 className="text-xl text-gray-200 flex font-bold">Plano Tech</h1>
                            <LaptopMinimal className="text-amber-700" />
                        </div>
                        <div className="mt-8 flex align-center justify-center">
                            <span className="text-white text-4xl">R$220</span>
                        </div>
                        <Accordion type="single" className="mx-auto max-w-sm mt-12" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Tudo do Plano Micro</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50 text-sm"> 
                                           - Inclui todas as funções do Plano Micro.
                                        </li>
                                        
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Análises estratégicas</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Identificação de riscos e oportunidades.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Sugestões para melhorar a performance financeira.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Relatórios avançados</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Relatórios customizáveis e detalhados.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Acompanhamento de métricas de crescimento.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Assistente de equipe</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className="text-gray-300 dark:text-gray-50">
                                          - Análise do desempenho da equipe.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                          - Sugestões para otimizar RH e reduzir riscos.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
<div className="flex mt-20 align-center justify-center">
                    <Button className="bg-amber-700 text-white hover:bg-gray-200 hover:text-amber-700">Teste grátis por 30 dias</Button>

                    </div>
                    </Card>
                    </div>
                    
                 <div className="w-72">
                  <Card className="mx-auto  h-fit min-h-110 bg-black border-0 shadow-lg shadow-gray-500 ">
                        <div className="flex justify-between">
                            <h1 className="text-xl text-gray-200 flex font-bold">Plano Sênior</h1>
                            <Presentation className="text-amber-700" />
                        </div>
                        <div className="mt-8 flex align-center justify-center">
                            <span className="text-white text-4xl">R$480</span>
                        </div>
                        <Accordion type="single" className="mx-auto max-w-sm mt-12" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Tudo do Plano Tech</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50 text-sm"> 
                                           - Inclui todas as funções do Plano Tech.
                                        </li>
                                        
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Escalabilidade</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Sugestões de novos produtos e serviços.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Análises para expansão de mercado.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Centro de riscos</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Estratégias para proteção do negócio.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Monitoramento de indicadores críticos.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Relatórios premium</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className="text-gray-300 dark:text-gray-50">
                                          - Relatórios completos para gestão de grandes equipes.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                          - Insights para decisões estratégicas de longo prazo.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
<div className="flex mt-20 align-center justify-center">
                    <Button className="bg-gray-200 text-amber-700 hover:bg-amber-700 hover:text-white">Teste grátis por 30 dias</Button>

                    </div>
                    </Card>
                    </div>
                    
                </div>
            </section>
        </>


    )
}