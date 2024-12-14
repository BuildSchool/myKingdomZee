import { NavigationItem } from './types';

export const navigation: NavigationItem[] = [
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