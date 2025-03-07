<<<<<<< HEAD
import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {

    const { currency,delivery_fee,getCartAmount } = useContext(ShopContext);

=======
import  { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '/src/context/ShopContext'

const CartTotal = () => {

    const { currency, getCartAmount } = useContext(ShopContext);
    
>>>>>>> 4a45a24 (Optimization and correction of some mitakes of display)
    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title  text2={'PANIER'} />
            </div>
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
<<<<<<< HEAD
                    <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
=======
                    <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount()}.00</b>
>>>>>>> 4a45a24 (Optimization and correction of some mitakes of display)
                </div>
            </div>
        </div>
    )
}

export default CartTotal
