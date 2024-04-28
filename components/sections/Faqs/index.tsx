import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faqs() {
  return (
    <section>
     {/* <div className="relative w-full z-20">
  <div className="absolute top-40 right-0 w-40 h-40 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100 pointer-events-none"></div>
  <div className="absolute top-52 left-0 w-40 h-40 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100 pointer-events-none"></div>
  <div className="absolute top-20 left-1/2 w-40 h-40 bg-[#FF9900] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100 pointer-events-none"></div>
</div> */}


      <div className="flex lg:flex-row flex-col lg:p-20 p-5 lg:gap-10 gap-5 lg:pr-32 z-200">
        <div className="flex flex-col lg:gap-8 gap-2">
          <span className="text-white font-bold text-xl">
            Need To Know --&gt;
          </span>

          <div className="lg:text-6xl text-4xl text-[#FFD700] font-bold ">
            Frequently Asked <br />
            <span className="text-[#FF9900]">Questions</span>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="lg:w-2/3 w-full  bg-tranparent lg:p-10 p-5 lg:rounded-xl rounded-lg text-white text-left lg:text-2xl overflow-hidden z-20000"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Training Program ?</AccordionTrigger>
            <AccordionContent className="lg:text-xl">
              Manparth Bharat&apos;s team of experts is working tirelessly to
              create cutting-edge educational content and training programs that
              can be accessed by anyone, anywhere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What we are serving ?</AccordionTrigger>
            <AccordionContent>
              Manparth Bharat&apos;s products and services are designed to cater
              to a wide range of audiences, including students, teachers, and
              educational institutions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What company wants ?</AccordionTrigger>
            <AccordionContent>
              Manparth Bharat committed to transform the mindset of youth from
              reels and social media to reality and society from religious
              duality to humanity from self esteemed to togetherness and by
              which we build a powerpack of youth in Bharat.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
