export interface AuthFormData {
  name: string;
  email: string;
  password: string;
}

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface AuthHeaderProps {
  isLogin: boolean;
}

export interface AuthFormProps {
  isLogin: boolean;
  formData: AuthFormData;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (field: keyof AuthFormData, value: string) => void;
}

export interface SocialButtonsProps {
  onGoogleClick: () => void;
}

export interface AuthToggleProps {
  isLogin: boolean;
  onToggle: () => void;
}