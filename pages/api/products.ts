// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductInterface } from '../../globals/types'; 

const products: ProductInterface[] = [
  {
    id: 1,
    name: 'Cool Shirt',
    description: 'A really cool shirt.',
    price: '25.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Nice Shoes',
    description: 'Stylish shoes for every occasion.',
    price: '60.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Vintage Jeans',
    description: 'Retro denim jeans with a modern fit.',
    price: '45.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Leather Wallet',
    description: 'A classy leather wallet to keep your money safe.',
    price: '35.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Sports Watch',
    description: 'A durable watch for the active lifestyle.',
    price: '75.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Smartphone Case',
    description: 'A sleek and protective case for your phone.',
    price: '15.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Bluetooth Headphones',
    description: 'Wireless headphones with great sound quality.',
    price: '90.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Running Shoes',
    description: 'Perfect for long-distance running.',
    price: '80.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Winter Jacket',
    description: 'Keep warm with this insulated winter jacket.',
    price: '120.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Backpack',
    description: 'A spacious backpack for your daily adventures.',
    price: '50.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 11,
    name: 'Sunglasses',
    description: 'Stylish sunglasses for sunny days.',
    price: '30.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 12,
    name: 'Coffee Mug',
    description: 'A perfect mug for your morning coffee.',
    price: '10.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 13,
    name: 'Digital Camera',
    description: 'Capture beautiful moments with this digital camera.',
    price: '300.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 14,
    name: 'Guitar',
    description: 'An acoustic guitar for music lovers.',
    price: '150.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 15,
    name: 'Headphones Stand',
    description: 'Keep your headphones safe and organized.',
    price: '20.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 16,
    name: 'Desk Lamp',
    description: 'A stylish desk lamp with adjustable brightness.',
    price: '40.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 17,
    name: 'Yoga Mat',
    description: 'Perfect for your daily yoga sessions.',
    price: '25.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 18,
    name: 'Portable Speaker',
    description: 'Take your music anywhere with this portable speaker.',
    price: '55.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 19,
    name: 'Smartwatch',
    description: 'Track your fitness and stay connected with this smartwatch.',
    price: '120.00',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 20,
    name: 'Fitness Tracker',
    description: 'Monitor your activity with this fitness tracker.',
    price: '40.00',
    image_url: 'https://via.placeholder.com/150',
  }
];


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
