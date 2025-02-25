// types.ts
import { LucideIcon } from 'lucide-react';

export interface ScrollItem {
  icon: LucideIcon;
  title: string;
}

export interface InfiniteScrollProps {
  items: ScrollItem[];
  direction?: 'right' | 'left';
  speed?: number;
}