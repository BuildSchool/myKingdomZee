import type { FAQCategoryType } from './types';

export const faqs: FAQCategoryType[] = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'What makes MyKingdom different from other property management software?',
        answer: 'MyKingdom combines cutting-edge AI technology with intuitive design to revolutionize property management. Our platform features real-time analytics, predictive maintenance alerts, and automated tenant management - all powered by advanced machine learning algorithms that learn and adapt to your specific needs.',
        icon: '🚀'
      },
      {
        question: 'How secure is my property and tenant data?',
        answer: 'We implement bank-level security measures including 256-bit encryption, regular third-party security audits, and compliance with GDPR, CCPA, and other global standards. Your data is stored in redundant, geo-distributed servers with 24/7 monitoring and automated threat detection.',
        icon: '🔒'
      },
      {
        question: 'Can I try MyKingdom before committing?',
        answer: 'Absolutely! Start with our 30-day free trial that includes full access to all premium features. No credit card required, and you will get personalized onboarding support to ensure you make the most of your trial period.',
        icon: '✨'
      }
    ]
  },
  {
    category: 'Features & Support',
    questions: [
      {
        question: 'What kind of support do you offer?',
        answer: 'We provide comprehensive 24/7 support through multiple channels: live chat with AI-powered instant responses, priority email support, dedicated phone line, and regular training webinars. Plus, access our extensive knowledge base and video tutorials anytime.',
        icon: '💬'
      },
      {
        question: 'Is there a limit to how many properties I can manage?',
        answer: 'No limits! Our platform scales seamlessly with your portfolio, whether you manage a single property or thousands of units. Our intelligent infrastructure automatically adjusts to your needs, ensuring optimal performance at any scale.',
        icon: '🏢'
      }
    ]
  },
  {
    category: 'Technical & Integration',
    questions: [
      {
        question: 'Can MyKingdom integrate with my existing software?',
        answer: 'Yes! MyKingdom offers seamless integration with popular accounting software, payment processors, and property management tools. Our API-first approach ensures compatibility with your existing tech stack.',
        icon: '🔄'
      },
      {
        question: 'How often do you release new features?',
        answer: 'We maintain a robust development cycle with monthly feature updates and weekly improvements. Our AI systems continuously learn from user feedback to suggest and implement optimizations automatically.',
        icon: '📈'
      }
    ]
  }
];