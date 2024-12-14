export interface FAQ {
  question: string;
  answer: string;
  icon: string;
}

export interface FAQCategoryType {
  category: string;
  questions: FAQ[];
}