import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function CTAButtons() {
  return (
    <div className="flex items-center space-x-4">
      <button className="text-white hover:text-primary-400 transition-colors">
        Log in
      </button>
      <button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2">
        <span>Get Started</span>
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  );
}