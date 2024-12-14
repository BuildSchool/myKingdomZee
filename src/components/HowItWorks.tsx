import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Settings, Building, ArrowRight, Zap, Users, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Insights',
    description: 'Get real-time property valuations and market predictions with 99% accuracy',
    color: 'from-primary-500 to-primary-600',
    delay: 0.1
  },
  {
    icon: Users,
    title: 'Smart Tenant Matching',
    description: 'Find perfect tenants with our AI screening system that reduces vacancy rates by 45%',
    color: 'from-secondary-500 to-secondary-600',
    delay: 0.2
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Forecast maintenance needs and optimize rental pricing with machine learning',
    color: 'from-accent-500 to-accent-600',
    delay: 0.3
  },
  {
    icon: Shield,
    title: 'Automated Compliance',
    description: 'Stay compliant with automated updates and real-time regulation tracking',
    color: 'from-emerald-500 to-teal-600',
    delay: 0.4
  }
];

const steps = [
  {
    number: '01',
    title: 'Quick Setup',
    description: 'Create your account and import your properties in under 5 minutes',
    icon: Sparkles,
    color: 'from-primary-500 to-primary-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '02',
    title: 'AI Configuration',
    description: 'Our AI analyzes your portfolio and customizes automation settings',
    icon: Settings,
    color: 'from-secondary-500 to-secondary-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '03',
    title: 'Start Growing',
    description: 'Watch your portfolio thrive with automated management and insights',
    icon: Building,
    color: 'from-accent-500 to-accent-600',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-primary-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl -top-96 -left-40 animate-float" />
        <div className="absolute w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-3xl bottom-48 right-12 animate-float" style={{ animationDelay: '-2s' }} />
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
            Experience the Future of Property Management
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Transform your property portfolio with AI-powered automation and insights
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 h-full overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-neon`}>
                  {React.createElement(feature.icon, { size: 24, className: 'text-white' })}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-primary-200">
                  {feature.description}
                </p>
                
                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="text-primary-400 w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-primary-500/0 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="group">
                  {/* Image Section */}
                  <div className="relative mb-8 overflow-hidden rounded-2xl">
                    <div className="aspect-video">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-60`} />
                    
                    {/* Step number */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                      <span className="text-white font-bold">{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-3 rounded-xl">
                      {React.createElement(step.icon, { className: 'text-white w-6 h-6' })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-primary-200">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-primary-500">
                    <Zap className="w-8 h-8 animate-pulse" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <button className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all flex items-center gap-2 mx-auto">
            Start Your Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}