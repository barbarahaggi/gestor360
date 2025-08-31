import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui-components/Accordion";
import { Button } from "../ui-components/Button";
import { Card } from "../ui-components/Card";
// import { Divider } from "../ui-components/Divider";
import { Cloud, LaptopMinimal, Presentation  } from 'lucide-react';



export function Planos() {
    return (
        <>
            <section className="mb-6 w-full h-130">
                <div className="flex gap-3.5 align-center mt-24 justify-center w-full">
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
                                           - Cadastro de clientes e fornecedores.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Gestão de estoque simples (entradas e saídas).
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Agenda de compromissos e prazos.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Relatórios essenciais</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Relatório mensal de receitas e despesas.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Gráficos básicos de fluxo de caixa.
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
                                          - Notificações de baixo estoque.
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
                            <Cloud className="text-amber-700" />
                        </div>
                        <div className="mt-8 flex align-center justify-center">
                            <span className="text-white text-4xl">R$220</span>
                        </div>
                        <Accordion type="single" className="mx-auto max-w-sm mt-12" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Análises e Estratégia</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50 text-sm"> 
                                            
                                           - Relatórios de performance com indicadores de saúde financeira (KPIs).
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           
                                           - Sugestões automáticas de redução de custos.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                            
                                           - Análises preditivas de fluxo de caixa (projeções futuras).
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Gestão de Projetos e Times</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Organização de tarefas e entregas.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Controle de produtividade por colaborador/equipe.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Integração com ferramentas de comunicação (Slack, Trello, etc.).
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-gray-200 text-md font-bold">Relatórios essenciais</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Relatório mensal de receitas e despesas.
                                        </li>
                                        <li className=" text-gray-300 dark:text-gray-50">
                                           - Gráficos básicos de fluxo de caixa.
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
                                          - Notificações de baixo estoque.
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
<Card className="mx-auto max-w-xs h-fit min-h-110 bg-black border-0 shadow-lg shadow-gray-500">
                        <div className="flex justify-between">
                            <h1 className="text-xl text-gray-200 flex font-bold">Plano Sênior</h1>
                            <Presentation  className="text-amber-700" />
                        </div>
                        <div className="mt-8 flex align-center justify-center">
                            <span className="text-white text-4xl">R$400</span>
                        </div>
                        <Accordion type="single" className="mx-auto max-w-sm mt-12" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-gray-200">In the app</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li>
                                            <span className="font-semibold text-gray-100 dark:text-gray-50">
                                                Step 1:
                                            </span>{" "}
                                            Tap the Inbox icon and then tap Add receipts.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-100 dark:text-gray-50">
                                                Step 2:
                                            </span>{" "}
                                            Tap the + symbol to attach a photo or PDF of the receipt for our
                                            system to match.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-gray-200">Via browser extension</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li>
                                            <span className="font-semibold text-gray-900 dark:text-gray-50">
                                                Step 1:
                                            </span>{" "}
                                            <span className="underline">Download</span> the browser extension
                                            for Chrome or Safari. (Firefox support is coming soon.)
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900 dark:text-gray-50">
                                                Step 2:
                                            </span>{" "}
                                            Click the extension icon at the top of your browser. Under the
                                            Receipts tab, upload an image or click Screenshot current tab to
                                            automatically attach the receipt to the expense.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-gray-200">Testing another</AccordionTrigger>
                                <AccordionContent>
                                    <ol className="flex flex-col gap-2">
                                        <li>
                                            <span className="font-semibold text-gray-900 dark:text-gray-50">
                                                Step 1:
                                            </span>{" "}
                                            <span className="underline">Download</span> the browser extension
                                            for Chrome or Safari. (Firefox support is coming soon.)
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900 dark:text-gray-50">
                                                Step 2:
                                            </span>{" "}
                                            Click the extension icon at the top of your browser. Under the
                                            Receipts tab, upload an image or click Screenshot current tab to
                                            automatically attach the receipt to the expense.
                                        </li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

<div className="flex mt-20 align-center justify-center">
                    <Button className="bg-gray-200 text-gray-500 hover:bg-gray-300">Teste grátis por 30 dias</Button>

                    </div>
                    </Card>
                </div>
                    
                </div>
            </section>
        </>


    )
}