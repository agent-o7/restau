import type { MenuItem } from '../types';

export const menuCategories = [
  'Entrées',
  'Plats Principaux',
  'Boissons',
  'Desserts'
];

export const menuItems: MenuItem[] = [
  // Entrées
  {
    id: '1',
    name: 'Banane Plantain Grillée',
    description: 'Banane plantain traditionnelle grillée avec sauce épicée',
    price: 2500,
    category: 'Entrées',
    image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '2',
    name: 'Salade d\'Akassa',
    description: 'Salade fraîche à base de maïs avec légumes',
    price: 3000,
    category: 'Entrées',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '3',
    name: 'Brochettes de Bœuf',
    description: 'Brochettes de bœuf grillées aux épices locales',
    price: 4500,
    category: 'Entrées',
    image: 'https://images.pexels.com/photos/5474640/pexels-photo-5474640.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },

  // Plats Principaux
  {
    id: '4',
    name: 'Riz Jollof au Poulet',
    description: 'Riz épicé avec poulet grillé tendre et légumes',
    price: 6500,
    category: 'Plats Principaux',
    image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '5',
    name: 'Fufu à la Sauce Palme',
    description: 'Fufu de manioc traditionnel avec riche sauce de palme',
    price: 5500,
    category: 'Plats Principaux',
    image: 'https://images.pexels.com/photos/5966631/pexels-photo-5966631.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '6',
    name: 'Tilapia Grillé',
    description: 'Tilapia frais grillé aux herbes et épices locales',
    price: 7000,
    category: 'Plats Principaux',
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '7',
    name: 'Ragoût de Porc à l\'Igname',
    description: 'Ragoût de porc mijoté servi avec igname bouillie',
    price: 6000,
    category: 'Plats Principaux',
    image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },

  // Boissons
  {
    id: '8',
    name: 'Eau de Coco Fraîche',
    description: 'Eau de coco naturelle servie fraîche',
    price: 1500,
    category: 'Boissons',
    image: 'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '9',
    name: 'Jus de Bissap',
    description: 'Boisson traditionnelle à la fleur d\'hibiscus',
    price: 2000,
    category: 'Boissons',
    image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '10',
    name: 'Bière Locale',
    description: 'Bière locale bien fraîche',
    price: 2500,
    category: 'Boissons',
    image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },

  // Desserts
  {
    id: '11',
    name: 'Gâteau à la Noix de Coco',
    description: 'Gâteau traditionnel à la noix de coco avec miel local',
    price: 2000,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '12',
    name: 'Salade de Fruits',
    description: 'Fruits de saison frais avec menthe',
    price: 2500,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  }
];