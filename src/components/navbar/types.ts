export interface NavigationItem {
  name: string;
  items?: {
    name: string;
    description: string;
  }[];
}

export interface DropdownProps {
  item: NavigationItem;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export interface MobileMenuProps {
  isOpen: boolean;
  navigation: NavigationItem[];
}

export interface NavLogoProps {
  title: string;
}