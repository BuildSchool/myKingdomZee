import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import Navigation from './Navigation';
import TrustIndicators from './TrustIndicators';
import { testimonials } from './testimonialData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    activeIndex * testimonialsPerPage,
    (activeIndex + 1) * testimonialsPerPage
  );

  return (
    <section className="py-32 bg-gradient-to-b from-primary-900 to-secondary-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl -top-48 -left-24 animate-float" />
        <div className="absolute w-[300px] h-[300px] bg-secondary-500/10 rounded-full blur-3xl top-96 right-12 animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-primary-200">Join thousands of satisfied property managers worldwide</p>
        </motion.div>

        {/* Featured Testimonials Carousel */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          <Navigation
            totalPages={totalPages}
            activeIndex={activeIndex}
            onPrev={prevTestimonials}
            onNext={nextTestimonials}
            onPageSelect={setActiveIndex}
          />
        </div>

        <TrustIndicators />
      </div>
    </section>
  );
}