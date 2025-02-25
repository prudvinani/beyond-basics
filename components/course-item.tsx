import type { LucideIcon } from "lucide-react"

interface CourseItemProps {
  title: string
  icon: LucideIcon
}

export default function CourseItem({ title, icon: Icon }: CourseItemProps) {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-white px-3 shadow-sm sm:gap-3 sm:px-6 sm:py-3">
      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 sm:size-10">
        <Icon className="size-4 text-primary sm:size-6" />
      </div>
      <span className="whitespace-nowrap text-sm font-medium sm:text-lg">{title}</span>
    </div>
  )
}

