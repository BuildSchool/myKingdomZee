import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { FAQ } from './types';

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export default function FAQItem({ faq, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
      >
        <span className="text-lg font-semibold text-white flex items-center gap-3">
          <span className="text-2xl">{faq.icon}</span>
          {faq.question}
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-white/5 rounded-b-xl border-t border-primary-500/10">
              <p className="text-primary-200 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}