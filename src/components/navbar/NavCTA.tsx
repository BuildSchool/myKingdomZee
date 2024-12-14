import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import AuthModal from '../auth/AuthModal';

export default function NavCTA() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <button 
          onClick={scrollToFAQ}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
        >
          FAQ
        </button>
        <button 
          onClick={() => setIsAuthModalOpen(true)}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2"
        >
          <span>Get Started</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}