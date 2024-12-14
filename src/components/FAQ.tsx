import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import FAQCategory from './faq/FAQCategory';
import { faqs } from './faq/faqData';
import type { FAQCategoryType } from './faq/types';

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>('Getting Started');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <section id="faq" className="py-32 bg-gradient-to-b from-gray-900 to-primary-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl -top-96 -left-40 animate-float" />
        <div className="absolute w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-3xl bottom-48 right-12 animate-float" style={{ animationDelay: '-2s' }} />
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-primary-200">
            Everything you need to know about MyKingdom
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-primary-500/20 rounded-xl focus:outline-none focus:border-primary-500/40 text-white placeholder-primary-300"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {filteredFaqs.map((category: FAQCategoryType) => (
            <FAQCategory
              key={category.category}
              category={category}
              isOpen={openCategory === category.category}
              openIndex={openIndex}
              onToggleCategory={() => setOpenCategory(openCategory === category.category ? null : category.category)}
              onToggleQuestion={(index) => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}