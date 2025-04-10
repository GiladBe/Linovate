export interface ProductInterface {
    id: number;
    name: string;
    description: string;
    price: string;
    image_url: string;
    reviews:Array<ReviewInterface>,
  
    
  }
  
  export interface ReviewInterface {
    id: number;
    product_id: number;
    rating: number;
    review: string;
    reviewer:string
  }
  
