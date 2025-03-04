import { Instagram } from "lucide-react";

import { ChatAccordian } from "./ChatAccordian";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function FAQ() {
  return (
    <div className="w-full py-20 lg:py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Frequently Asked Questions(FAQs)
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                  Have more questions? Contact our support team to get what you
                  need.
                </p>
              </div>
              <div className="">
                <Link href="https://www.instagram.com/beyondbasics.dev/" target="_blank">
                  <Button className="gap-3" variant="outline">
                    Any questions? Reach out{" "}
                    <Instagram className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
         
          <div className="lg:flex items-center justify-center">
            <ChatAccordian />
          </div>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
