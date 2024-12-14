import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustIndicators() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="inline-flex items-center gap-8 bg-gray-900/30 backdrop-blur-xl px-8 py-4 rounded-full border border-primary-500/20">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-primary-500 fill-current" />
          <span className="text-white font-semibold">4.9/5 Rating</span>
        </div>
        <div className="w-px h-8 bg-primary-500/20" />
        <div className="text-primary-200">
          <span className="text-white font-semibold">10,000+</span> Happy Users
        </div>
        <div className="w-px h-8 bg-primary-500/20" />
        <div className="text-primary-200">
          <span className="text-white font-semibold">50+</span> Countries
        </div>
      </div>
    </motion.div>
  );
}