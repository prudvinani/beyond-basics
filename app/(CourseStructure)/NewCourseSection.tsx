"use client";
import { ChevronDown, NotebookIcon, PlayIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { LockIcon } from "lucide-react";
import { JSX, useState } from "react";

interface ModuleContent {
  type: string;
  count: number;
}

interface Lesson {
  icon?: JSX.Element;
  watchvideo?: string;
  type: string;
  title: string;
}

interface Module {
  id: string;
  week: string;
  tag?: string;
  colors: string;
  title: string;
  content?: ModuleContent[];
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
    <div className="flex flex-col w-full max-w-4xl mx-auto mb-11 " >
      {modules.map((module) => (
        <div key={module.id} className="mb-4 ">
          <div className="relative">
            <div className="flex items-center ">
              <div className="relative w-full mt-7 rounded-br-[34px] rounded-bl-[34px] rounded-tr-[34px]  rounded-tl-[34px]" style={{background:module.colors}} >
                <div
                  className="ml-9 flex absolute   top-[-25px] max-w-32 text-center border-r-2 border-l-2 border-t-2  px-4 z-20 text-black font-outfit rounded-tr-2xl rounded-tl-2xl"
                  style={{
                    backgroundColor: module.colors,
                    borderColor: module.colors,
                  }}
                >
                  <div>Module {module.week}</div>
                </div>
                {/* here is the color */}
                <div
                  className=" rounded-full overflow-hidden border-2 border-black"
                  style={{ background: module.colors }}
                   
                >
                  <div
                    className="px-6 py-4  flex justify-between items-center"
                    style={{ backgroundColor: module.colors }}
                  >
                    <div className="flex items-center gap-4 ">
                      <NotebookIcon className="mb-[6px]" />
                      <div>
                        <h3>{module.title}</h3>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-8 h-8 flex items-center justify-center"
                      aria-expanded={openModule === module.id}
                      aria-label={
                        openModule === module.id
                          ? "Collapse module"
                          : "Expand module"
                      }
                    >
                      <motion.div
                        animate={{ rotate: openModule === module.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-black" />
                      </motion.div>
                    </button>
                  </div>
                </div>
                {/* here is the logic of the  */}
             <div>
             <AnimatePresence>
                  {openModule === module.id && (
                    <motion.div
                      key={module.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      // here is the logic of the rounded-br-3xl
                      className="overflow-hidden rounded-br-3xl rounded-bl-3xl  "
                      style={{ background: module.colors }}
                    >
                      {module.lessons?.map((lesson, index) => (
                        <div key={index}>
                          <div
                            key={index}
                            className="border mx-5 rounded-full my-3"
                            style={{ backgroundColor: module.colors }}
                          >
                            <div className="px-6 py-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-10 h-10 rounded-full flex items-center justify-center "
                                  style={{ background: module.colors }}
                                >
                                  {lesson.icon || <NotebookIcon size={20} />}
                                </div>
                                <div>
                                  <div className="text-gray-500 text-xs uppercase mb-1">
                                    {lesson.type}
                                  </div>
                                  <h4 className="text-sm text-black ">
                                    {lesson.title}
                                  </h4>
                                </div>
                              </div>
                              <button
                                className="text-black border-2 px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-colors"
                                style={{ borderColor: module.colors }}
                              >
                                {/*  */}
                                {lesson.watchvideo ? (
                                  <div className="flex items-center space-x-2">
                                    <p>{lesson.watchvideo} </p>
                                    <PlayIcon size={16} />
                                  </div>
                                ) : (
                                  <LockIcon size={16} />
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
}
