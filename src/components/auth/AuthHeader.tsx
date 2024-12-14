import React from 'react';
import type { AuthHeaderProps } from './types';

export default function AuthHeader({ isLogin }: AuthHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h2>
      <p className="text-primary-200 mt-2">
        {isLogin
          ? 'Sign in to access your account'
          : 'Join us to start managing your properties'}
      </p>
    </div>
  );
}