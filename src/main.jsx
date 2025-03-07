import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
<<<<<<< HEAD
=======
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

>>>>>>> 4a45a24 (Optimization and correction of some mitakes of display)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
<<<<<<< HEAD
=======
      <ToastContainer />
>>>>>>> 4a45a24 (Optimization and correction of some mitakes of display)
    </ShopContextProvider>
  </BrowserRouter>
)
