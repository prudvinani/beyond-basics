import { FaqAccordion } from "./FaqAccordian";

const defaultData = [
  {
    answer:"Our courses focus on practical skills and insights across 24 topics rather than deep theory. While we don’t guarantee placements, our career support and job leads help boost your employability.",
    icon: "🧑‍💻",
    iconPosition: "right",
    id: 1,
    question: "Is there a placement guarantee?",
  },
  {
    answer: "No free classes are offered, but you can enroll risk-free with our no-questions-asked 7-day refund policy.",
    id: 2,
    question: "Can I try the course before buying?",
  },
  {
    answer:"Absolutely. We start with foundational concepts and progressively move to advanced topics, catering to all levels.",
    id: 3,
    question: "Is the course beginner-friendly?",
  },
  {
    answer: "Enjoy weekly curated topics, hands-on assignments, and interactive sessions—all available online anytime",
    icon: "⭐",
    iconPosition: "left",
    id: 4,
    question: "How is the course content delivered?",
  },
  {
    answer: "Absolutely! You'll master 24 essential topics In 6 months for 2025 through weekly assignments and real-world projects, ensuring you build practical skills for immediate success.",
    id: 5,
    question: "Will I learn practical skills?",
  },
  {
    answer: "Premium includes exclusive job/internship postings, live industry expert sessions, hackathons, and personalized mentorship through Community Channels.",
    id: 6,
    question: "What makes the Premium plan different?",
  },
  {
    answer:"Yes, every live session is recorded and available on-demand, so you can catch up at your convenience.",
    icon: "👩‍💻",
    iconPosition: "right",
    id: 7,
    question: "Are live sessions recorded?",
  },
  {
    answer:"We offer a blended approach—some sessions are live for direct interaction, while others are recorded for flexible, anytime access. This setup ensures you get expert guidance and the freedom to learn at your pace.",
    icon: "👩‍💻",
    iconPosition: "right",
    id: 8,
    question: "Are classes live or recorded?",
  },
  {
    answer:"Yes, the 6-month plan includes launching a new course each month. You have already paid for the full duration, so no additional charges will be incurred.",
    icon: "👩‍💻",
    iconPosition: "right",
    id: 9,
    question: "I took the 6-month plan but can see only one course so far.",
  },
  {
    answer:" Whether you’re a student, job-seeker, or working professional, our 6-month plan is designed for everyone. With 24 essential topics covering the skills needed to thrive in today's competitive market, this plan equips you with the practical insights to succeed and adapt continuously.",
    icon: "👩‍💻",
    iconPosition: "right",
    id: 10,
    question: "Who should purchase the 6-month plan?",
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
