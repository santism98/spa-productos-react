import { useState, useEffect } from 'react';
import { SingleProduct } from '../products/components/SingleProduct';

export const SearchCard = ({ search }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      if (!search) return;
      setIsLoading(true);
      const url = `https://dummyjson.com/products/search?q=${search}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (Array.isArray(data)) {
          const filteredData = data.filter(
            (product) =>
              product.categoryName === 'smartphones' ||
              product.categoryName === 'sunglasses' ||
              product.categoryName === 'tops'
          );
          setFilteredProducts(filteredData);
          setError('');
        } else {
          setFilteredProducts([]);
          setError('No se encontraron productos');
        }
      } catch (error) {
        console.error(error);
        setError('Hubo un error al buscar los productos');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [search]);

  return (
    <>
      {isLoading ? (
        <h2 className="text-left">Buscando</h2>
      ) : error ? (
        <p>{error}</p>
      ) : filteredProducts.length > 0 ? (
        <section>
          <div className="gap-1 container auto centrado">
            {filteredProducts.map((product) => (
              <SingleProduct key={product.id} {...product} />
            ))}
          </div>
        </section>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </>
  );
};
