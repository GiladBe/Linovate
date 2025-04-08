export interface ProductInterface {
    id: number;
    name: string;
    description: string;
    price: string;
    image_url: string;
  }
  
  export interface ReviewInterface {
    id: number;
    productId: number;
    userId: number;
    rating: number;
    comment: string;
  }
  
  export interface UserInterface {
    id: number;
    username: string;
    email: string;
  }