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
                    
                <div className="w-72">
<Card className="mx-auto max-w-xs h-fit min-h-110 bg-black border-0 shadow-lg shadow-gray-500">
                        <div className="flex justify-between">
                            <h1 className="text-xl text-gray-200 flex font-bold">Plano Tech</h1>
                            <LaptopMinimal className="text-amber-700" />
                        </div>
                        <div className="mt-8 flex align-center justify-center">
                            <span className="text-white text-4xl">R$220</span>
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
                        <Button className="bg-amber-700 hover:bg-amber-900">Teste grátis por 30 dias</Button>

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