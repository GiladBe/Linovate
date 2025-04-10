import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import toast for notifications
import ProductSpecs from './ProductSpecs';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { ReviewInterface } from '../../globals/types';
import { Button } from '../../globals/components'
import { postReview } from './controller'
interface ReviewModalProps {
  productName: string;
  imageUrl: string;
  reviews: ReviewInterface[];
  isOpen: boolean;
  product_id: number;
  onClose: () => void;
  onLeaveReview: (review: ReviewInterface) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  productName,
  imageUrl,
  reviews,
  isOpen,
  product_id,
  onClose,
  onLeaveReview,
}) => {
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [isLeaveReview, setIsLeaveReview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview(e.target.value);
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(Number(e.target.value));
  };

  const handleLeaveReview = async () => {

    if (newReview.trim() !== '' && rating !== null) {
      try {
        setIsLoading(true)
        const response = await postReview(product_id, newReview, rating)

        const data = await response.json();
        if (response.ok) {
          onLeaveReview(data?.value?.rows[0])
        } else {
          console.error('Error:', data.message);
        }
        setNewReview('');
        setRating(null);
        setIsLeaveReview(false);
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error('Failed to submit review:', error);
      }
    } else {
      toast.error('Please leave a review and select a rating');
    }
  };

  const handleCancel = () => {
    setIsLeaveReview(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300"
        style={{ animation: 'fadeIn 0.3s' }}
      >
        <div
          className="bg-white rounded-lg p-6 max-w-xl w-full md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] border-2 border-gray-300 shadow-lg transition-all duration-300 transform scale-95 md:scale-100 max-h-[90vh] h-full md:h-[50vh] overflow-y-auto flex flex-col"

          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-2 left-2 text-gray-600 hover:text-gray-800 text-xl"
          >
            ×
          </button>

          {!isLeaveReview ? (
            <>
              <ProductSpecs productName={productName} product_id={product_id} />

              <Button onClick={() => { setIsLeaveReview(true) }} variant="primary">Leave a Review</Button>

              <ReviewList reviews={reviews} />
            </>
          ) : (
            <div>
              <ReviewForm
                newReview={newReview}
                rating={rating}
                onReviewChange={handleReviewChange}
                onRatingChange={handleRatingChange}
                onSubmit={handleLeaveReview}
                onCancel={handleCancel}
                isLoading={isLoading}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewModal;



