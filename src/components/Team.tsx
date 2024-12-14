import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Chet Parker',
    role: 'Chief Design Officer',
    image: 'https://raw.githubusercontent.com/stackblitz/stackblitz-codeflow/main/assets/team/chet.jpg',
    bio: 'Former Design Lead at Apple. Revolutionizing property management UX with human-centered design principles.',
    location: 'London, UK',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Syed Hasan',
    role: 'Head of Innovation',
    image: 'https://raw.githubusercontent.com/stackblitz/stackblitz-codeflow/main/assets/team/syed.jpg',
    bio: 'AI and blockchain expert with a passion for transforming traditional industries through cutting-edge technology.',
    location: 'Dubai, UAE',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Mohammed Nawaz',
    role: 'Head of Engineering',
    image: 'https://raw.githubusercontent.com/stackblitz/stackblitz-codeflow/main/assets/team/mohammed.jpg',
    bio: 'Tech visionary with extensive experience in scaling distributed systems. Leading MyKingdom\'s engineering excellence.',
    location: 'Chennai, India',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Pradeep Pandey',
    role: 'AI Research Lead',
    image: 'https://raw.githubusercontent.com/stackblitz/stackblitz-codeflow/main/assets/team/pradeep.jpg',
    bio: 'Machine learning expert specializing in predictive analytics and automated property valuation models.',
    location: 'Uttar Pradesh, India',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Nikhil Shetty',
    role: 'Product Strategy Lead',
    image: 'https://raw.githubusercontent.com/stackblitz/stackblitz-codeflow/main/assets/team/nikhil.jpg',
    bio: 'Product visionary with expertise in market analysis and strategic growth. Driving MyKingdom\'s product roadmap.',
    location: 'Pune, India',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

export default function Team() {
  return (
    <section className="py-32 bg-gradient-to-b from-secondary-900 to-primary-900 relative overflow-hidden">
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
            Built by AI Enthusiasts
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Meet the visionaries combining AI expertise with property management innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
                {/* Member Image */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full ring-2 ring-primary-500/50 group-hover:ring-primary-400 transition-all"
                  />
                </div>

                {/* Location Badge */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                  <span className="text-sm text-white">{member.location}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-300 text-center mb-4">{member.role}</p>
                <p className="text-primary-200 text-center mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a href={member.social.twitter} className="text-primary-400 hover:text-primary-300 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href={member.social.linkedin} className="text-primary-400 hover:text-primary-300 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.github} className="text-primary-400 hover:text-primary-300 transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}