import { NotebookIcon } from "lucide-react";

export const courseModules = [
  {
    id: "1",
    week: "1",
    title: "Placements & Interviews",
    tag: "PLACEMENTS AND INTERVIEWS",
    content: [{ type: "video", count: 4 }],
    lessons: [
      { type: "Week 1", title: "Resume Building", icon: <NotebookIcon size={20} /> },
      { type: "Week 2", title: "Placement Resource", icon: <NotebookIcon size={20} /> },
      { type: "Week 3", title: "Mock Interview Preparation", icon: <NotebookIcon size={20} /> },
      { type: "Week 4", title: "Off-Campus Placement Strategy", icon: <NotebookIcon size={20} /> },
    ],
  },
  {
    id: "2",
    week: "2",
    title: "The Social Edge",
    tag: "THE SOCIAL EDGE",
    content: [{ type: "video", count: 4 }],
    lessons: [
      { type: "Week 1", title: "Networking Strategies", icon: <NotebookIcon size={20} /> },
      { type: "Week 2", title: "Social Media Branding", icon: <NotebookIcon size={20} /> },
      { type: "Week 3", title: "Public Speaking Tips", icon: <NotebookIcon size={20} /> },
      { type: "Week 4", title: "Building a Personal Brand", icon: <NotebookIcon size={20} /> },
    ],
  },
];
