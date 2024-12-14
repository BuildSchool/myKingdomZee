import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2, ChevronDown, ExternalLink } from 'lucide-react';

const navigation = [
  {
    name: 'Solutions',
    items: [
      { name: 'Property Management', description: 'Streamline your property operations' },
      { name: 'Tenant Portal', description: 'Enhanced tenant experience' },
      { name: 'Analytics Dashboard', description: 'Data-driven insights' },
      { name: 'Maintenance Management', description: 'Automated maintenance workflows' },
    ]
  },
  {
    name: 'Features',
    items: [
      { name: 'AI Automation', description: 'Smart property automation' },
      { name: 'Financial Tools', description: 'Comprehensive financial management' },
      { name: 'Reports', description: 'Advanced reporting and analytics' },
      { name: 'Integrations', description: 'Connect with your favorite tools' },
    ]
  },
  { name: 'Pricing' },
  { name: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-primary-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
              MyKingdom
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.items ? (
                  <button
                    className="flex items-center space-x-1 text-primary-200 hover:text-white transition-colors"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.items && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-primary-500/20 w-64">
                          <div className="space-y-3">
                            {item.items.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={`#${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block p-2 rounded-lg hover:bg-primary-500/10 transition-colors group"
                              >
                                <div className="font-medium text-white group-hover:text-primary-400 transition-colors">
                                  {subItem.name}
                                </div>
                                <div className="text-sm text-primary-200">
                                  {subItem.description}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-primary-400 transition-colors">
                Log in
              </button>
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2">
                <span>Get Started</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-primary-500/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <div className="space-y-2">
                      <div className="font-medium text-white">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={`#${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block text-primary-200 hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={`#${item.name.toLowerCase()}`}
                      className="block text-primary-200 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-4">
                <button className="w-full text-center text-white hover:text-primary-400 transition-colors py-2">
                  Log in
                </button>
                <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}