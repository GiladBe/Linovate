import React from 'react';
import { Button } from '../../globals/components'
interface ReviewFormProps {
    newReview: string;
    rating: number | null;
    isLoading:boolean
    onReviewChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onRatingChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onSubmit: () => void;
    onCancel: () => void
}

const ReviewForm: React.FC<ReviewFormProps> = ({
    newReview,
    rating,
    isLoading,
    onReviewChange,
    onRatingChange,
    onSubmit,
    onCancel
    
}) => {
    return (
        <div className="flex flex-col mb-4 h-100" >

            <label htmlFor="rating" className="mb-2 font-semibold text-sm">
                Rating
            </label>

            <select
                id="rating"
                value={rating ?? ''}
                onChange={onRatingChange}
                className="border p-2 rounded-md mb-4 w-35"
            >
                <option value="" disabled>
                    Select Rating
                </option>
                {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>


            <label htmlFor="reviewText" className="mb-2 font-semibold text-sm">
                Your Review:
            </label>
            <textarea
                id="reviewText"
                value={newReview}
                onChange={onReviewChange}
                placeholder="Write your review here..."
                className="border p-2 rounded-md mb-4 resize-none flex-1"
            />



            <div className="flex mr-2">

                <Button onClick={onSubmit} loading ={isLoading}  variant="primary">Leave a Review</Button>
                <Button onClick={onCancel} >Cancel</Button>

            </div>


        </div>
    );
};

export default ReviewForm;
