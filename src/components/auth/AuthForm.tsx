import React from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import type { AuthFormProps } from './types';

export default function AuthForm({ isLogin, formData, onSubmit, onChange }: AuthFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {!isLogin && (
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400" size={20} />
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-primary-500/20 rounded-lg focus:outline-none focus:border-primary-500/40 text-white placeholder-primary-300"
            required
          />
        </div>
      )}
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400" size={20} />
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-white/5 border border-primary-500/20 rounded-lg focus:outline-none focus:border-primary-500/40 text-white placeholder-primary-300"
          required
        />
      </div>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400" size={20} />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => onChange('password', e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-white/5 border border-primary-500/20 rounded-lg focus:outline-none focus:border-primary-500/40 text-white placeholder-primary-300"
          required
        />
      </div>

      {isLogin && (
        <div className="text-right">
          <a href="#" className="text-primary-400 hover:text-primary-300 text-sm">
            Forgot password?
          </a>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
      >
        <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
        <ArrowRight size={20} />
      </button>
    </form>
  );
}