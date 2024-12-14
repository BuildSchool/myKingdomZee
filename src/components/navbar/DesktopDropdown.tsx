import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { DropdownProps } from './types';

export default function DesktopDropdown({ item, isActive, onMouseEnter, onMouseLeave }: DropdownProps) {
  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 text-primary-200 hover:text-white transition-colors"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span>{item.name}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {isActive && item.items && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-primary-500/20 w-64">
              <div className="space-y-3">
                {item.items.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={`#${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block p-2 rounded-lg hover:bg-primary-500/10 transition-colors group"
                  >
                    <div className="font-medium text-white group-hover:text-primary-400 transition-colors">
                      {subItem.name}
                    </div>
                    <div className="text-sm text-primary-200">
                      {subItem.description}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}