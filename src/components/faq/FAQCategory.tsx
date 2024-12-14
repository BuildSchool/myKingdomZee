import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import FAQItem from './FAQItem';
import type { FAQCategoryType } from './types';

interface FAQCategoryProps {
  category: FAQCategoryType;
  isOpen: boolean;
  openIndex: number | null;
  onToggleCategory: () => void;
  onToggleQuestion: (index: number) => void;
}

export default function FAQCategory({
  category,
  isOpen,
  openIndex,
  onToggleCategory,
  onToggleQuestion
}: FAQCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <button
        onClick={onToggleCategory}
        className="w-full flex items-center justify-between p-4 bg-primary-500/10 rounded-xl hover:bg-primary-500/20 transition-colors group mb-4"
      >
        <span className="text-xl font-semibold text-white flex items-center gap-2">
          <Sparkles className="text-primary-400" size={20} />
          {category.category}
        </span>
        {isOpen ? (
          <ChevronUp className="text-primary-400 group-hover:text-primary-300 transition-colors" />
        ) : (
          <ChevronDown className="text-primary-400 group-hover:text-primary-300 transition-colors" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {category.questions.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => onToggleQuestion(index)}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}