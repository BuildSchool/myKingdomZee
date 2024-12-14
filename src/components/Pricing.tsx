import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const features = {
  basic: [
    'Up to 10 properties',
    'Basic analytics',
    'Email support',
    'Mobile app access',
    'Tenant portal',
    'Maintenance requests',
    'Document storage',
    'Payment processing'
  ],
  premium: [
    'Unlimited properties',
    'Advanced analytics & AI insights',
    '24/7 priority support',
    'Mobile app access',
    'Advanced tenant portal',
    'Automated maintenance',
    'Unlimited document storage',
    'Custom payment rules',
    'Property performance forecasting',
    'Integration with accounting software',
    'Custom reporting',
    'Team collaboration tools'
  ]
};

export default function Pricing() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-primary-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl -top-96 -left-40 animate-float" />
        <div className="absolute w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-3xl top-96 -right-32 animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your property portfolio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">Basic Plan</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-white">$49</span>
                <span className="text-primary-200 ml-2">/month</span>
              </div>
              <div className="space-y-4 mb-8">
                {features.basic.map((feature, index) => (
                  <div key={index} className="flex items-center text-primary-100">
                    <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 px-8 rounded-xl bg-primary-600/80 hover:bg-primary-500 text-white font-semibold transition-colors duration-300">
                Start Free Trial
              </button>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="bg-gradient-to-b from-gray-900/90 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-primary-400/30 hover:border-primary-400/50 transition-all duration-300 relative">
              <div className="absolute -top-4 right-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Star size={14} />
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Premium Plan</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">$99</span>
                <span className="text-primary-200 ml-2">/month</span>
              </div>
              <div className="space-y-4 mb-8">
                {features.premium.map((feature, index) => (
                  <div key={index} className="flex items-center text-primary-100">
                    <Check className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-primary-500/25">
                Start Free Trial
              </button>
            </div>
          </motion.div>
        </div>

        {/* Annual Pricing Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-primary-500/20">
            <h4 className="text-xl font-semibold text-white mb-2">Save 20% with Annual Billing</h4>
            <p className="text-primary-200">Get two months free when you choose annual billing</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}