import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

<<<<<<< HEAD
const RelatedProducts = ({ category, subCategory }) => {
=======
const RelatedProducts = ({ category }) => {
>>>>>>> 4a45a24 (Optimization and correction of some mitakes of display)

    const [related, setRelated] = useState([])

    const { products } = useContext(ShopContext)

    useEffect(() => {

        if (products.length > 0) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter(item => category === item.category);
<<<<<<< HEAD
            productsCopy = productsCopy.filter(item => subCategory === item.subCategory);
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products])
=======
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category])
>>>>>>> 4a45a24 (Optimization and correction of some mitakes of display)

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={"RELATED"} text2={"PRODUCTS"} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    related.map((item, index) => (
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

export default RelatedProducts
