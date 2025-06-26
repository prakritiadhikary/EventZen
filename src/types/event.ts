// Unified Event type for the entire codebase
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  price: number;
  image: string;
  attendees: number;
  isFavorite?: boolean;
  coverImage?: string; // For compatibility with forms
} 