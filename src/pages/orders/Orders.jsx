import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { ShopContext } from '/src/context/ShopContext'
import Title from '/src/components/Title';
import { useParams } from 'react-router-dom';

const Orders = () => {

    const { id } = useParams() //an id of a command
    const { currency } = useContext(ShopContext);
    const [productFromOrder, setProductFromOrder ] = useState([])

    const handleProductFromCommand = async () => {
        const response = await axios.get(
            `${import.meta.env.VITE_NODEJS_API_BASEURL}/api/commands/products/${id}`
        )
        console.log(response.data)
        setProductFromOrder(response.data)
    }

    useEffect(()=>{
        handleProductFromCommand()
    },[])


    return (
        <div className='border-t pt-16'>

            <div className='text-2xl'>
                <Title text1={'MY'} text2={'PRODUCTS'} />
            </div>

            <div>
                {productFromOrder.map((item, index) => (
                    <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                        <div className='flex items-start gap-6 text-sm '>
                            <img className='w-16 sm:w-20' src={item.image} alt="Image" />
                            <div>
                                <p className='sm:text-base font-medium'>{item.name}</p>
                                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                    <p className='text-lg'>{currency}{item.price}</p>
                                    <p>Quantity: {item.quantities}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders
