
export const postReview = async (product_id:number, newReview:string, rating:number) => {
    const response = await fetch('/api/reviews/postReview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: product_id,
        review: newReview,
        rating: rating,
      }),
    });
    
    
    return response;
  };