import React from 'react';
import { Chrome } from 'lucide-react';
import type { SocialButtonsProps } from './types';

export default function SocialButtons({ onGoogleClick }: SocialButtonsProps) {
  return (
    <div className="mb-6">
      <button 
        onClick={onGoogleClick}
        className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg transition-colors"
      >
        <Chrome size={20} />
        <span>Continue with Google</span>
      </button>
    </div>
  );
}