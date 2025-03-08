import axios from "axios"
import ProductItem from './ProductItem';
import Title from './Title'
import { useEffect, useState } from "react";

const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([])

    const getBestsellerProduct = async () => {
        const response = await axios.get(`${import.meta.env.VITE_NODEJS_API_BASEURL }/products/bestseller/retrieve`)
        if (response.status === 200) {
            setBestSeller(response.data)
            console.log(response.data)
        }
    }

    useEffect(()=>{
        getBestsellerProduct()
    },[])

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={"Meilleures"} text2={"ventes"} />  
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
            
        </div>
        
    )
}

export default BestSeller
