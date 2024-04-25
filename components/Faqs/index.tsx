import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faqs() {
  return (

    <div className="flex lg:flex-row flex-col bg-black lg:p-20 p-5 gap-10 lg:pr-32">
        <div className="flex flex-col">
        <span className="text-white font-bold text-xl">Need To Know --&gt;</span>

        <div className="text-6xl text-[#FFD700] font-bold ">
            Frequently Asked <br /><span className="text-[#FF9900]">Questions</span>
        </div>
        </div>
    
    <Accordion
      type="single"
      collapsible
      className="w-2/3 border-2 bg-tranparent p-10 lg:rounded-3xl rounded-xl text-white text-left lg:text-2xl"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Training Program ?</AccordionTrigger>
        <AccordionContent className="lg:text-xl">
          Manparth Bharat&apos;s team of experts is working tirelessly to create
          cutting-edge educational content and training programs that can be
          accessed by anyone, anywhere.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What we are serving ?
        </AccordionTrigger>
        <AccordionContent>
          Manparth Bharat&apos;s products and services are designed to cater to a
          wide range of audiences, including students, teachers, and educational
          institutions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What company wants ?</AccordionTrigger>
        <AccordionContent>
          Manparth Bharat committed to transform the mindset of youth from reels
          and social media to reality and society from religious duality to
          humanity from self esteemed to togetherness and by which we build a
          powerpack of youth in Bharat.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );
}
