import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([])
<<<<<<< HEAD
    const { products } = useContext(ShopContext)

    useEffect(() => {

        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0, 5))

=======
    const { products  } = useContext(ShopContext)
    useEffect(() => {
        setBestSeller(products.slice(0, 5))
>>>>>>> 4a45a24 (Optimization and correction of some mitakes of display)
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={"Meilleures"} text2={"ventes"} />  
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
<<<<<<< HEAD
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
=======
                        <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
>>>>>>> 4a45a24 (Optimization and correction of some mitakes of display)
                    ))
                }
            </div>
            
        </div>
        
    )
}

export default BestSeller
