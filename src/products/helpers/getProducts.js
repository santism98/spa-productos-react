import { consultation } from '../../api/fetch';

export const getProducts = async (url) => {

  const request = await consultation(url);
   
  if (Array.isArray(request.products)) {

    const products = request.products.map((item) => ({

      id: item.id,
      title: item.title,
      description: item.description,
      photo: item.thumbnail,
      price: item.price,
      rating: item.rating,
      
    }));

    return products;

  } else {

    const product = {

      id: request.id,
      title: request.title,
      description: request.description,
      photo: request.thumbnail,
      price: request.price,
      rating: request.rating,

    };

    return product;

  }
};
