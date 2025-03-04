import { FaqAccordion } from "./FaqAccordian";

const defaultData = [
  {
    answer: "No way! Anyone can join, no matter your background.",
    icon: "🧑‍💻",
    iconPosition: "right",
    id: 1,
    question: "Is this only for computer science students?",
  },
  {
    answer: "Not necessarily. Our foundation modules are beginner-friendly; we also have advanced content for experienced learners.",
    id: 2,
    question: "Do I need prior coding experience?",
  },
  {
    answer:
      "Usually 3 to 9 months, depending on the program, plus AI-specialization modules that extend your practical knowledge.",
    id: 3,
    question: "How long does each program last?",
  },
  {
    answer: "Absolutely. We provide dedicated career services, mock interviews, and connect you with employers.",
    icon: "⭐",
    iconPosition: "left",
    id: 4,
    question: "Is there job placement help?",
  },
  {
    answer: "It’s the future of tech. Our mission is to keep you ahead of the curve, where the highest-paying and most exciting opportunities are.",
    id: 5,
    question: "Why does Vertocity focus on Generative AI?",
  },
  {
    answer: "Yes, We absolutely do provide with leading NBFC, banking partners and credit cards.",
    id: 6,
    question: "Do you have any EMI support?",
  },
  {
    answer: "Yes, We will equip you with everything possible to help you land a job or start your own agency.",
    icon: "👩‍💻",
    iconPosition: "right",
    id: 7,
    question: "Can I get a job or earn after the program?",
  },
];

function ChatAccordian() {

  return <FaqAccordion data={defaultData} className="max-w-[700px]" />;
}

function CustomStyleDemo() {
  return (
    <FaqAccordion
   
      data={defaultData}
      className="max-w-[700px]"
      questionClassName="bg-secondary hover:bg-secondary/80"
      answerClassName="bg-[#02ff7495] text-secondary-foreground"
      timestamp="Updated daily at 12:00 PM"
    />
  );
}

export { ChatAccordian, CustomStyleDemo };
