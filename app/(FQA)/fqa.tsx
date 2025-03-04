import { Instagram } from "lucide-react";
import { ChatAccordian } from "./ChatAccordian";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function FAQ() {
  return (
    <section className="w-full py-16 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6 md:mx-10 flex flex-col items-center md:items-start  ">
            <h4 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 dark:text-white text-center md:text-start">
              Frequently Asked Questions (FAQs)
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed md:text-start text-center ">
              Have more questions? Contact our support team to get the help you need.
            </p>

            <Link href="https://www.instagram.com/beyondbasics.dev/" target="_blank">
              <Button
                variant="outline"
                // className="flex items-center gap-3 border-gray-300 mt-2 rounded-full text-center dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                className="text-center mt-3 border-gray-300  rounded-full  dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
              >
                Any questions? Reach out <Instagram className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center">
            <ChatAccordian />
          </div>
        </div>
      </div>
    </section>
  );
}

export { FAQ };
