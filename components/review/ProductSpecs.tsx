// ProductInfo.tsx
import React from 'react';

interface ProductInfoProps {
  productName: string;
  product_id: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ productName, product_id }) => {
  return (
    <div className="flex items-center mb-4">
   
       <img
       src={`/images/${product_id}.jpg`}
        alt={productName}
        className="w-16 h-16 object-contain rounded-md mb-4"
        />
      <h2 className="text-xl font-semibold">{productName}</h2>
    </div>
  );
};

export default ProductInfo;
