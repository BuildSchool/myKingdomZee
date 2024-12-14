import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { MobileMenuProps } from './types';

export default function MobileMenu({ isOpen, navigation }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-primary-500/20"
    >
      <div className="container mx-auto px-4 py-4 space-y-4">
        {navigation.map((item) => (
          <div key={item.name}>
            {item.items ? (
              <div className="space-y-2">
                <div className="font-medium text-white">{item.name}</div>
                <div className="pl-4 space-y-2">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={`#${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-primary-200 hover:text-white transition-colors"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                href={`#${item.name.toLowerCase()}`}
                className="block text-primary-200 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            )}
          </div>
        ))}
        <div className="pt-4 space-y-4">
          <button className="w-full text-center text-white hover:text-primary-400 transition-colors py-2">
            Log in
          </button>
          <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2">
            <span>Get Started</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}