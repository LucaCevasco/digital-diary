// Define types for the drops
export type DropType = 'thought' | 'image' | 'code' | 'quote';

export interface Drop {
  id: string;
  type: DropType;
  date: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  caption?: string;
  author?: string;
}

// Define all drops data
export const drops: Drop[] = [
  {
    id: '1',
    type: 'thought',
    date: 'April 6, 2025',
    content: 'Kicking of this project...'
  },
  {
    id: '2',
    type: 'image',
    date: 'April 6, 2025',
    content: '',
    imageUrl: '/images/drops/biblioteca.jpg',
    imageAlt: 'Brutalist architecture',
    caption: 'Brutalist architecture that reminds me of certain software architectures I\'ve worked with.'
  },
  {
    id: '3',
    type: 'quote',
    date: 'April 6, 2025',
    content: 'The universe is not only stranger than we imagine, it is stranger than we can imagine.',
    author: 'J.B.S. Haldane'
  }
];

// Helper function to get latest drops
export const getLatestDrops = (count: number = 4): Drop[] => {
  return drops.slice(0, count);
};

// Filter drops by type
export const getDropsByType = (type: DropType): Drop[] => {
  return drops.filter(drop => drop.type === type);
}; 