import { NotebookIcon } from "lucide-react";

export const courseModules = [
  {
    id: "1",
    week: "1",
    title: "Placements & Interviews",
    tag: "PLACEMENTS AND INTERVIEWS",
    colors:"#FFE8A5",
   
    content: [{ type: "video", count: 4 }],
    lessons: [
      { type: "Week 1", title: "Resume Building", watchvideo:"Watch", icon: <NotebookIcon size={20} /> },
      { type: "Week 2", title: "Placement Resource", watchvideo:"Watch", icon: <NotebookIcon size={20} /> },
      { type: "Week 3", title: "Mock Interview Preparation", icon: <NotebookIcon size={20} /> },
      { type: "Week 4", title: "Off-Campus Placement Strategy", icon: <NotebookIcon size={20} /> },
    ],
  },
  {
    id: "2",
    week: "2",
    title: "The Social Edge",
    tag: "THE SOCIAL EDGE",
    colors:"#EBE1FA",
    content: [{ type: "video", count: 4 }],
    lessons: [
      { type: "Week 1", title: "Linkedin & Networking", icon: <NotebookIcon size={20} /> },
      { type: "Week 2", title: "Communication skills public speaking", icon: <NotebookIcon size={20} /> },
      { type: "Week 3", title: "Freelancing Basics & Getting First Clients", icon: <NotebookIcon size={20} /> },
      { type: "Week 4", title: "Startup Mindset & Exploring Business Ideas", icon: <NotebookIcon size={20} /> },
    ],
  },
  {
    id: "3",
    week: "3",
    title: "Content Creation",
    tag: "Content Creation",
    colors:"#FFE3EF",
    content: [{ type: "video", count: 4 }],
    lessons: [
      { type: "Week 1", title: "Foundation", icon: <NotebookIcon size={20} /> },
      { type: "Week 2", title: " Video editing & publishing your 1st video", icon: <NotebookIcon size={20} /> },
      { type: "Week 3", title: "Scaling & building personal brand", icon: <NotebookIcon size={20} /> },
      { type: "Week 4", title: "Generating money  revenue sources, brand deals, monetization from followers", icon: <NotebookIcon size={20} /> },
    ],
  },
  {
    id: "4",
    week: "4",
    title: "The Building Website",
    tag: "Building Website",
    colors:"#ADEFC8",
    content: [{ type: "video", count: 4 }],
    lessons: [
      { type: "Week 1", title: " Web dev 101", icon: <NotebookIcon size={20} /> },
      { type: "Week 2", title: "Building websites using wordpress", icon: <NotebookIcon size={20} /> },
      { type: "Week 3", title: " Building websites using framer", icon: <NotebookIcon size={20} /> },
      { type: "Week 4", title: "Projects week (building websites, portfolios)", icon: <NotebookIcon size={20} /> },
    ],
  },
  {
    id: "5",
    week: "5",
    title: "The Jargon - Busting",
    tag: "Jargon - Busting",
    colors:"#B8CDEC",
    content: [{ type: "video", count: 4 }],
    lessons: [
      { type: "Week 1", title: "UI/UX", icon: <NotebookIcon size={20} /> },
      { type: "Week 2", title: "IOT", icon: <NotebookIcon size={20} /> },
      { type: "Week 3", title: "Devops", icon: <NotebookIcon size={20} /> },
      { type: "Week 4", title: "Block Chain", icon: <NotebookIcon size={20} /> },
    ],
  },
  {
    id: "6",
    week: "6",
    title: "Everything about AI",
    tag: "Everything about AI",
    colors:"#A3E0DD",
    content: [{ type: "video", count: 4 }],
    lessons: [
      { type: "Week 1", title: "Basics of ML, what else we need to know to learn AI", icon: <NotebookIcon size={20} /> },
      { type: "Week 2", title: "Prompt Engineering", icon: <NotebookIcon size={20} /> },
      { type: "Week 3", title: "LLM’s & AI Agents", icon: <NotebookIcon size={20} /> },
      { type: "Week 4", title: "Building an AI Agent", icon: <NotebookIcon size={20} /> },
    ],
  },
  
];
