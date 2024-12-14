import React from 'react';
import { Building2 } from 'lucide-react';

export default function NavLogo() {
  return (
    <a href="/" className="flex items-center space-x-3">
      <Building2 className="w-8 h-8 text-primary-500" />
      <span className="text-2xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
        MyKingdom
      </span>
    </a>
  );
}