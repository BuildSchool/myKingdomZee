import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Search } from 'lucide-react';
import confetti from 'canvas-confetti';
import { countries } from '../data/countries';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  country: string;
  dialCode: string;
}

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistForm({ isOpen, onClose }: WaitlistFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    country: '',
    dialCode: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState(0);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 900) + 100;
    setWaitlistNumber(randomNumber);
    setIsSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleCountrySelect = (code: string, dialCode: string) => {
    setFormData(prev => ({
      ...prev,
      country: code,
      dialCode: dialCode
    }));
    setIsCountryDropdownOpen(false);
    setSearchQuery('');
  };

  const selectedCountry = countries.find(c => c.code === formData.country);

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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900 to-primary-900/90 rounded-2xl p-8 max-w-md w-full relative border border-primary-500/20 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-primary-200 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                  Join the Waitlist
                </h2>
                <p className="text-primary-200 mb-6">
                  Be among the first to experience the future of property management
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-200 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-2 bg-white/5 border border-primary-500/20 rounded-lg focus:outline-none focus:border-primary-500/40 text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-200 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-2 bg-white/5 border border-primary-500/20 rounded-lg focus:outline-none focus:border-primary-500/40 text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-primary-200 mb-1">
                      Country
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="w-full px-4 py-2 bg-white/5 border border-primary-500/20 rounded-lg focus:outline-none focus:border-primary-500/40 text-white flex items-center justify-between"
                      >
                        <span className="flex items-center gap-2">
                          {selectedCountry ? (
                            <>
                              <span>{selectedCountry.flag}</span>
                              <span>{selectedCountry.name}</span>
                            </>
                          ) : (
                            'Select a country'
                          )}
                        </span>
                        <ChevronDown size={20} className="text-primary-200" />
                      </button>

                      {isCountryDropdownOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-gray-900 border border-primary-500/20 rounded-lg shadow-xl max-h-60 overflow-auto">
                          <div className="sticky top-0 bg-gray-900 p-2 border-b border-primary-500/20">
                            <div className="relative">
                              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-200" />
                              <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search countries..."
                                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-primary-500/20 rounded-lg focus:outline-none focus:border-primary-500/40 text-white"
                              />
                            </div>
                          </div>
                          {filteredCountries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => handleCountrySelect(country.code, country.dialCode)}
                              className="w-full px-4 py-2 text-left hover:bg-primary-500/10 flex items-center gap-2 text-white"
                            >
                              <span>{country.flag}</span>
                              <span>{country.name}</span>
                              <span className="text-primary-200 ml-auto">{country.dialCode}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-primary-200 mb-1">
                      Mobile Number
                    </label>
                    <div className="flex gap-2">
                      <div className="w-24 shrink-0">
                        <input
                          type="text"
                          value={formData.dialCode}
                          readOnly
                          className="w-full px-4 py-2 bg-white/5 border border-primary-500/20 rounded-lg focus:outline-none focus:border-primary-500/40 text-white"
                          placeholder="+1"
                        />
                      </div>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                        className="w-full px-4 py-2 bg-white/5 border border-primary-500/20 rounded-lg focus:outline-none focus:border-primary-500/40 text-white"
                        placeholder="123 456 7890"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                  >
                    Join Waitlist
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">🎉</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  You're on the list!
                </h3>
                <p className="text-primary-200 mb-4">
                  Your waitlist number is
                </p>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-6">
                  #{waitlistNumber}
                </div>
                <p className="text-primary-200">
                  We'll notify you when it's your turn to experience MyKingdom
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}