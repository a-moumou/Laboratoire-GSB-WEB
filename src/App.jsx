
import  { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ShopContext } from './context/ShopContext';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/ui/navbar/Navbar'
import Home from './pages/home/Home'
import Collection from './pages/collection/Collection'
import Contact from './pages/contact/Contact'
import Cart from './pages/cart/Cart'
import Product from './pages/product/Product'
import Footer from './components/ui/Footer/Footer'
import Login from './pages/login/Login'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Orders from './pages/orders/Orders'
import BillPage from '/src/pages/bill/bill'
import SearchBar from './components/SearchBar'
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/profile/Profile';

const App = () => {

  const { loadCartItem } = useContext(ShopContext)
  
  useEffect(()=>{
    loadCartItem()
  },[loadCartItem])

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/bill' element={<BillPage />} />
        <Route path='/orders/:id' element={<Orders />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
