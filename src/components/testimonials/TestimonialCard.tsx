import React from 'react';
import { Quote, Star } from 'lucide-react';
import type { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative bg-gray-900/30 backdrop-blur-xl p-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 h-full">
      {/* Quote icon with gradient */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
        <Quote className="text-white w-6 h-6" />
      </div>

      {/* Rating */}
      <div className="flex mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-primary-500 fill-current" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-primary-100 italic mb-8 text-lg leading-relaxed">"{testimonial.quote}"</p>

      {/* Author info */}
      <div className="flex items-center">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-500/50 group-hover:ring-primary-400 transition-all"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center ring-2 ring-gray-900">
            <Quote className="w-3 h-3 text-white" />
          </div>
        </div>
        <div className="ml-4">
          <h3 className="font-semibold text-white group-hover:text-primary-300 transition-colors">
            {testimonial.name}
          </h3>
          <p className="text-primary-300 text-sm">{testimonial.role}</p>
          <p className="text-primary-400 text-sm">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}