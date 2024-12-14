import React from 'react';
import type { AuthToggleProps } from './types';

export default function AuthToggle({ isLogin, onToggle }: AuthToggleProps) {
  return (
    <p className="mt-6 text-center text-primary-200">
      {isLogin ? "Don't have an account?" : "Already have an account?"}
      <button
        onClick={onToggle}
        className="ml-2 text-primary-400 hover:text-primary-300"
      >
        {isLogin ? 'Sign up' : 'Sign in'}
      </button>
    </p>
  );
}