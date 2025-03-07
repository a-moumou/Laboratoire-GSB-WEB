import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '/src/context/ShopContext';

import RelatedProducts from '/src/components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, fetchProducts, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState({});
  const [quantity, setQuantity] = useState(1); // État pour la quantité

  const fetchCurentProduct = async () => {
    products.map((item)=>{
      if (item.id == productId) {
        setProductData(item)
      }
    })
  };

  useEffect(() => {
    fetchProducts()
    fetchCurentProduct();
  },[]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              <img onClick={() => {}} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={productData.image} alt="" />
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={productData.image[0]?.name} alt="Product image" />
          </div>
        </div>

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 mb-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <p className='text-xl'>Quantité</p>
          {/* Contrôle de la quantité */}
          <div className='flex items-center mt-5'>
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className='border px-3 py-1'>-</button>
            <input    
              value={quantity} 
              onChange={(e) => setQuantity(Math.max(1, e.target.value))} 
              className='border text-center w-12 mx-2 p-2' 
            />
            <button onClick={() => setQuantity(quantity + 1)} className='border px-3 py-1'>+</button>
          </div>

          <button onClick={() => addToCart(productData.id, quantity)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-4'>AJOUTER AU PANIER</button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>Le paiement à la livraison est disponible pour ce produit.</p>
            <p>Politique de retour et d&lsquo;échange facile sous 7 jours.</p>
          </div>
        </div>
      </div>

      <RelatedProducts category = { productData.category }/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;