import React from 'react';
import {ProductInterface} from '../globals/types'


interface ProductCardProps {
    product:ProductInterface
}


export default function ProductCard({ product }: ProductCardProps) {
    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <p className="text-green-600 font-bold mt-2">${product.price}</p>
      </div>
    );
  }