import React, { useEffect, useState } from 'react';
import ReviewModal from './review/ReviewModal';
import { ReviewInterface } from '../globals/types';
import { Button } from '../globals/components';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    image_url: string;
    reviews: ReviewInterface[];
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState<ReviewInterface[]>(product.reviews);

  useEffect(() => {
    setReviews(product.reviews);
  }, [product.reviews]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLeaveReview = (newReview: ReviewInterface) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  const getAverageRating = (reviews: Array<ReviewInterface>) => {
    if (reviews.length === 0) {
      return <span className="text-yellow-500">-</span>;
    }
    let totalRatings: number = 0;
    reviews.forEach((review) => {
      totalRatings += review.rating;
    });
    let finalRating = totalRatings / reviews.length;
    if (Number.isInteger(finalRating)) {
      return <span className="text-yellow-500">{finalRating.toFixed(0)}★</span>;
    } else {
      return <span className="text-yellow-500">{finalRating.toFixed(1)}★</span>;
    }
  };

  return (
    <div className="bg-card p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <img
        src={`/images/${product.id}.jpg`}
        alt={product.name}
        className="w-full h-48 object-contain rounded-md mb-4"
      />

      {getAverageRating(reviews)}

      <h3 className="text-heading font-semibold mb-2">{product.name}</h3>
      <p className="text-body text-sm mb-2">{product.description}</p>
      <p className="text-price font-bold mt-2">${product.price}</p>

      <Button onClick={handleOpenModal} variant="primary">
        Reviews
      </Button>

      <ReviewModal
        productName={product.name}
        reviews={reviews}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product_id={product.id}
        onLeaveReview={handleLeaveReview}
        imageUrl={product.image_url}
      />
    </div>
  );
}

