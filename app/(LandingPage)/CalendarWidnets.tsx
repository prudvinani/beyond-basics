"use client"

import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarWidget() {
  return (
    <div className="w-full max-w-[100px] h-[220px] sm:max-w-xs sm:h-[180px]">
      <motion.div
        className="bg-white rounded-[30px] shadow-lg hover:shadow-xl transition-shadow duration-300 h-full overflow-hidden"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-xs sm:text-sm font-medium text-gray-500 pt-2 sm:pt-3 pb-0 sm:pb-1 px-2 sm:px-4 text-center">
          Save the date
        </div>
        <div className="transform scale-70 sm:scale-85 origin-top -mt-1 sm:mt-0">
          <Calendar
            mode="single"
            className="rounded-md border-none mx-auto"
            classNames={{
              table: "w-full border-collapse",
              head_cell: "hidden",
              cell: "text-center text-xs sm:text-sm p-0 truncate",
              row: "flex w-full justify-between px-1 sm:px-2 truncate",
              nav_button: "h-5 w-5 sm:h-6 sm:w-6 hover:bg-gray-100 rounded-full",
              caption: "text-xs sm:text-sm font-medium pb-0",
              nav: "flex items-center justify-between px-1 sm:px-2",
              month: "text-sm sm:text-base font-semibold"
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}