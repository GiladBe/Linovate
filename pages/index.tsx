import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { ProductInterface, ReviewInterface } from '../globals/types'
import {Spinner} from '../globals/components'; 
import {useState,useEffect} from 'react'



interface HomePageProps {
  products: ProductInterface[];
}

const HomePage: NextPage<HomePageProps> = ({ products }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);
 
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Product Catalog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {!loading? products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )):  <Spinner /> }
        
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/products');
    return { props: { products: res.data.rows } };
  } catch (error) {
    console.error(error);
    return { props: { products: [] } };
  }
};

export default HomePage;
