import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Clock, Shield, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Building2,
    title: 'Smart Portfolio Management',
    description: 'Leverage AI-powered insights to optimize your property portfolio performance in real-time.',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-blue-500/90 to-violet-600/90',
    stats: '45% ROI Increase'
  },
  {
    icon: Clock,
    title: 'Automated Excellence',
    description: 'Save 15+ hours weekly with intelligent automation for tenant management and maintenance.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-emerald-500/90 to-teal-600/90',
    stats: '60% Time Saved'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption and compliance measures to protect your valuable property data.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-orange-500/90 to-red-600/90',
    stats: '99.9% Uptime'
  },
  {
    icon: TrendingUp,
    title: 'Revenue Maximization',
    description: 'Boost property returns by 23% with predictive analytics and market insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-purple-500/90 to-pink-600/90',
    stats: '23% Higher Returns'
  }
];

export default function Benefits() {
  return (
    <section className="py-32 bg-gradient-to-b from-primary-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -top-48 -right-24 animate-float" />
        <div className="absolute w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-3xl bottom-48 left-12 animate-float" style={{ animationDelay: '-2s' }} />
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
            Why Choose Our Platform
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Experience the future of property management with our innovative features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-500">
                {/* Image Background */}
                <div className="absolute inset-0">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-90 group-hover:opacity-95 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(benefit.icon, {
                        size: 24,
                        className: "text-white"
                      })}
                    </div>
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                      <span className="text-white font-semibold">{benefit.stats}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-200 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-white/90">
                    {benefit.description}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-300 pointer-events-none" />
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 animate-pulse-slow">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-white rounded-full" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}