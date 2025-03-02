"use client";
import { ChevronDown, NotebookIcon, PlayIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { JSX, useState } from "react";

interface ModuleContent {
  type: string;
  count: number;
}

interface Lesson {
<<<<<<< HEAD
  icon?: JSX.Element; // Ensure the icon type is JSX.Element
=======
  icon?: JSX.Element; 
>>>>>>> ce3b382 (Initial commit)
  type: string;
  title: string;
}

interface Module {
  id: string;
  week: string;
  tag?: string;
  title: string;
  content?: ModuleContent[]; // Allow content to be an array
  lessons?: Lesson[];
}

interface CourseAccordionProps {
  modules: Module[];
}

export default function CourseAccordion({ modules }: CourseAccordionProps) {
  const [openModule, setOpenModule] = useState<string | null>(null);

  const toggleModule = (moduleId: string) => {
    setOpenModule((prev) => (prev === moduleId ? null : moduleId));
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto mb-11">
      {modules.map((module) => (
        <div key={module.id} className="mb-4">
          <div className="relative">
            <div className="flex items-start">
              <div className="relative w-full mt-[28px]">
                {/* Module Label */}
                <div className="ml-9 flex absolute top-[-28px] max-w-32 text-center border border-gray-200 px-4 z-20 bg-white text-gray-400 font-outfit rounded-t-xl">
                  <div>Module {module.week.toString()}</div>
                </div>

                <div className="rounded-3xl border border-gray-200 overflow-hidden">
                  {/* Module Header */}
                  <div className="bg-white px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <NotebookIcon />
                      <div>
                        {module.tag && (
                          <div className="text-green-600 text-xs font-medium uppercase mb-1">
                            {module.tag}
                          </div>
                        )}
                        <h3 className="font-semibold">{module.title}</h3>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-8 h-8 flex items-center justify-center"
                      aria-expanded={openModule === module.id}
                      aria-label={openModule === module.id ? "Collapse module" : "Expand module"}
                    >
                      <motion.div
                        animate={{ rotate: openModule === module.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </button>
                  </div>

                  {/* Module Content */}
                  <AnimatePresence>
                    {openModule === module.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white"
                      >
                        {module.lessons?.map((lesson, index) => (
                          <div key={index} className="border mx-5 rounded-full my-3">
                            <div className="px-6 py-4 flex items-center justify-between bg-[#ffe8a5]">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                  {lesson.icon || <NotebookIcon size={20} />}
                                </div>
                                <div>
                                  <div className="text-gray-500 text-xs font-medium uppercase mb-1">
                                    {lesson.type}
                                  </div>
                                  <h4 className="text-sm text-red-800 font-medium">
                                    {lesson.title}
                                  </h4>
                                </div>
                              </div>
                              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-colors">
                                Watch for free <PlayIcon size={16} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
