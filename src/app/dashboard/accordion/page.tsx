import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const items  = [
    { id: '1', question: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
    { id: '2', question: 'Is it styled?', content: 'Yes. It comes with default styles that matches the other components&apos; aesthetic.' },
    { id: '3', question: 'Is it animated?', content: 'Yes. It&apos;s animated by default, but you can disable it if you prefer.' },
]

export default function Page() {
    return (
        <div>
            <h1>Accordion Page</h1>
            <Accordion type="single" collapsible className="w-full">
                {
                    items.map(({ id, question, content }) => (
                        <AccordionItem value={id} key={id}>
                            <AccordionTrigger>{question}</AccordionTrigger>
                            <AccordionContent>
                                {content}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>

        </div>
    );
}