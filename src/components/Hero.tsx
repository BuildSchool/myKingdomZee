import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-primary-900 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl -top-48 -left-24 animate-float" />
        <div className="absolute w-[300px] h-[300px] bg-secondary-500/10 rounded-full blur-3xl top-96 right-12 animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
      </div>

      <div className="container mx-auto px-4 pt-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-12">
          {/* Left Column - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <img 
                src="/images/logo.svg" 
                alt="MyKingdom Logo" 
                className="h-16 w-auto"
              />
              <h1 className="ml-4 text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                MyKingdom
              </h1>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent leading-tight">
              Transform Your Property Management with AI
            </h2>
            
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience the future of property management with our AI-powered platform. Automate tasks, gain insights, and grow your portfolio effortlessly.
            </p>

            {/* Video Section */}
            <div className="relative mb-8 max-w-2xl mx-auto lg:mx-0">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-primary-500/20">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <button
                  onClick={handleVideoClick}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className={`w-20 h-20 bg-primary-500/90 rounded-full flex items-center justify-center transform transition-transform ${isPlaying ? 'scale-0' : 'group-hover:scale-110'}`}>
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setShowWaitlist(true)}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all"
            >
              Join the Waitlist
            </button>
          </div>

          {/* Right Column - Property Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 hidden lg:block"
          >
            <div className="grid grid-cols-3 gap-4">
              {/* Property Images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="col-span-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Property"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 h-48 w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Modern Apartment"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 h-48 w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Smart Home"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 h-48 w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="col-span-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Penthouse View"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 h-48 w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Waitlist Form Modal */}
      <WaitlistForm isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </section>
  );
}