export interface MenuItem {
  id: string;
  name: string;
  category: 'destaques' | 'sashimi' | 'sushi' | 'pratos' | 'sobremesas';
  categoryLabel: string;
  description?: string;
  highlighted?: boolean;
  image?: string;
  tag?: string;
  isConfirmedItem?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  dateText: string;
  text: string;
  highlights: string[];
}

export interface OpeningHour {
  day: string;
  hours: string;
  isOpenToday?: boolean;
}
