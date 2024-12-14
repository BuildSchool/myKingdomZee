import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  totalPages: number;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onPageSelect: (index: number) => void;
}

export default function Navigation({ 
  totalPages, 
  activeIndex, 
  onPrev, 
  onNext, 
  onPageSelect 
}: NavigationProps) {
  return (
    <div className="flex justify-center items-center mt-8 gap-4">
      <button
        onClick={onPrev}
        className="p-2 rounded-full bg-primary-500/10 hover:bg-primary-500/20 text-primary-300 transition-colors"
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => onPageSelect(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === activeIndex
                ? 'bg-primary-500 w-6'
                : 'bg-primary-500/30 hover:bg-primary-500/50'
            }`}
            aria-label={`Go to testimonial page ${i + 1}`}
          />
        ))}
      </div>
      <button
        onClick={onNext}
        className="p-2 rounded-full bg-primary-500/10 hover:bg-primary-500/20 text-primary-300 transition-colors"
        aria-label="Next testimonials"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}