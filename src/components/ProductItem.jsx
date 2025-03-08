
import { useContext } from 'react'
import PropTypes from "prop-types"
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, image, price }) => {

  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)} className='text-gray-700 cursor-pointer'>

      <div className=' overflow-hidden'>
        <img
            className='hover:scale-110 transition ease-in-out'
            alt="Product Image"
            src={
              image && image.length > 0 && image[0]?.name 
              ? `${import.meta.env.VITE_NODEJS_API_BASEURL}/product/image/${image[0].name}` 
              : null
            }
        />
      </div>

      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
      
    </Link>
  )
}


ProductItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  price: PropTypes.string,
}

export default ProductItem
