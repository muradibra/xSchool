import { FaqProps } from "@/app/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = ({ faqs }: FaqProps) => {
  return (
    <section className="pt-15 pb-15 lg:pt-65 px-5 lg:px-15 lg:pb-50 font-hoves">
      <h2 className="uppercase font-first-neue font-medium text-2xl lg:text-[90px] leading-9 lg:leading-25">
        Questions
        <br />
        We've Got Answers.
      </h2>

      <Accordion
        type="single"
        collapsible
        className="mt-10 lg:mt-25 border-b border-[#10101520]"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-t border-[#10101520]"
          >
            <AccordionTrigger className="flex items-center justify-between text-xl lg:text-3xl font-normal text-left py-6 cursor-pointer text-primary-black leading-7 lg:leading-11">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pt-0 lg:py-20.5">
              <div
                className="text-xl lg:text-3xl text-[#10101580] leading-7 lg:leading-11 
      [&_p]:mb-4 last:[&_p]:mb-0"
                dangerouslySetInnerHTML={{
                  __html: faq.answer.replace(/&nbsp;/g, "").trim(),
                }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
