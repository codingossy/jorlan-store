import React from "react";
import { faq } from "../../datafiles/FaqData";
import Accordion from "./Accordion";

const Faq = () => {
  const { icon, title, accordions } = faq;
  //   faq from data file

  return (
    <section className="container mx-auto">
      <div className="lg:pt-6 py-16">
        {/* section title */}
        <div className="section-title-group mx-auto justify-start -space-x-4 px-4 lg:max-w-[540px] lg:justify-center lg:px-0">
          <img className="lg:hidden" src={icon} alt="" />
          <h2 className="h2 section-title mb-4 font-semibold">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        {/* accordion list */}
        <div className="flex flex-col gap-y-4 px-4">
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
