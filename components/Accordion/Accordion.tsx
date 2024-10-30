import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/Utils/constant";

type Props = {};

const AccordionSection = (props: Props) => {
  return (
    <div className="bg-white text-[#12305B] sm:text-lg flex justify-center py-7">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[5%] xl:gap-12 w-[90%] max-w-[1560px]">
        <div className="md:flex-[1] ">
          <div className="flex md:flex-col md:gap-5 font w-full justify-evenly pt-5">
            <p className="font-bold">
              Sleepstiq
              <span className="bg-[#FFD7231A] pr-2 sm:pr-4 py-[2px] sm:py-1">
                {" "}
                Product{" "}
              </span>
            </p>
            <p>Order</p>
            <p>Melatonin</p>
          </div>
        </div>
        <div className="md:flex-[4] lg:pr-[5%] 2xl:pr-20">
          <Accordion type="single" collapsible className="w-full border-t">
            {faqs.map((faq, index) => {
              return (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
