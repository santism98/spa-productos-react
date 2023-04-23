import { useEffect, useState } from "react";
import { getProducts } from '../helpers/getProducts'



export const useFetch = (url) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const consultProducts = async () => {
      const productItem = await getProducts(url);
      setProducts(productItem);
      setIsLoading(false);
    };
  
    useEffect(() => {
      consultProducts();
    }, []);
  
    return {
      products: products || [],
      isLoading,
    };
  };
  
