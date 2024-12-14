import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AuthHeader from './AuthHeader';
import SocialButtons from './SocialButtons';
import AuthForm from './AuthForm';
import AuthToggle from './AuthToggle';
import type { AuthModalProps, AuthFormData } from './types';

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<AuthFormData>({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Form submitted:', formData);
  };

  const handleFormChange = (field: keyof AuthFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900 to-primary-900/90 rounded-2xl p-8 max-w-md w-full relative border border-primary-500/20 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-primary-200 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <AuthHeader isLogin={isLogin} />
            
            <SocialButtons onGoogleClick={handleGoogleLogin} />

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary-500/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gradient-to-br from-gray-900 to-primary-900/90 text-primary-200">
                  Or continue with
                </span>
              </div>
            </div>

            <AuthForm 
              isLogin={isLogin}
              formData={formData}
              onSubmit={handleSubmit}
              onChange={handleFormChange}
            />

            <AuthToggle 
              isLogin={isLogin}
              onToggle={() => setIsLogin(!isLogin)}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}