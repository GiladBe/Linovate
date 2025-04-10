
import React from 'react';
import { ReviewInterface } from '../../globals/types';

interface ReviewListProps {
  reviews: ReviewInterface[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="overflow-x-hidden  mt-2 overflow-y-auto max-h-80">
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div
            key={review.id}
            className="p-4 border-b-2 border-gray-200"
            style={{ overflowX: 'hidden' }} // Prevent horizontal scrolling in individual review items
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{review.reviewer}</h3>
              <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
            </div>
            <p className="mt-2">{review.review}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;

