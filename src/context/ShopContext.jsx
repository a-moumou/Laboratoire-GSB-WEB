
import { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {


    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [clientId, setClientId] = useState(()=>{
        const saved = JSON.parse(localStorage.getItem("client_id"));
        return saved ? saved : null
    });
    const [products, setProducts] = useState([]);

    /* First step in runing */

    useEffect(()=>{
        fetchProducts();
        loadCartItem();
    },[])

    /* Get all the products stored in rge database*/

    const fetchProducts = async () => {
        try {
            const url = import.meta.env.VITE_NODEJS_API_BASEURL + "/products"
            const response = await axios.get(url);
            setProducts(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des produits :", error);
        }
    };

    const loadCartItem = useCallback(() => {
        const cartItem = JSON.parse(localStorage.getItem('cartItems'));
        if(cartItem){
            setCartItem(cartItem)
        }
    }, [])


    /* Add product to cart */

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select product size');
            return;
        }

        const cartItemsLocalStorage = JSON.parse(localStorage.getItem("cartItems"))
            if (cartItemsLocalStorage) {
                const selectedCart = cartItemsLocalStorage.find(({id}) => id === itemId);
                if (selectedCart) {
                    if (selectedCart[size]) {
                        selectedCart[size] += 1;
                    }
                }
                else {
                    const item = { id:itemId, size: size }
                    cartItemsLocalStorage.push(item);
                } 
                setCartItem(cartItemsLocalStorage)
                localStorage.setItem("cartItems",JSON.stringify(cartItemsLocalStorage))
            }
            else{
                localStorage.setItem("cartItems",JSON.stringify([ {id: itemId, size: size} ]))
            }
    }

    /* Increase or decrease the quantity of product in the cart */

    const updateQuantity = async (itemId, size, quantity) => {
        const cartItemsLocalStorage = JSON.parse(localStorage.getItem("cartItems"))
        const selectedCart = cartItemsLocalStorage.find(({id}) => id === itemId);
        selectedCart[size] = quantity;
        localStorage.setItem("cartItems",JSON.stringify(cartItemsLocalStorage))
    }

    /* Delete one product of your cart */

    const deleteCartItem = (item) => {
            const cartItemsLocalStorage = JSON.parse(localStorage.getItem( "cartItems" )) || []
            const indexItem = cartItemsLocalStorage.findIndex(({ id }) => id == item.id)
            cartItemsLocalStorage.splice(indexItem, 1) //Delete the cart item in the storage  
            localStorage.setItem( "cartItems", JSON.stringify( cartItemsLocalStorage ) )
            setCartItem(cartItemsLocalStorage)
    }

    /* Get the tatal price of the product within your cart */

    const getCartAmount = () => {
        let totalAmount = 0;
        if (cartItem.length > 0 && products.length > 0) {
            
            for (const item of cartItem) {
                let itemInfo = products.find((product) => product.id === item.id);
                if (itemInfo) {
                    totalAmount += Number(itemInfo.price, 10) * item.size;
                } else {
                    console.warn(`Product unfound for item.id: ${item.id}`);
                }
            }
        }
        return totalAmount;

    };



    const value = {
        currency, delivery_fee, products,
        updateQuantity,
        search, setSearch, showSearch, setShowSearch,
        addToCart, cartItem, getCartAmount, deleteCartItem, loadCartItem,
        clientId, setClientId, fetchProducts
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )


}


ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default ShopContextProvider;
