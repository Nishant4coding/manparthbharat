import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faqs() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full lg:pl-40 pl-5 lg:pr-40 pr-5 bg-black text-white text-left lg:text-2xl"
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
        <AccordionTrigger>What is the segmentations of the products and services ?
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
  );
}
