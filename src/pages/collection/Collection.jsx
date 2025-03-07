import { useCallback, useContext, useEffect, useState } from 'react'
import Title from '/src/components/Title'
import ProductItem from '/src/components/ProductItem'
import { ShopContext } from '/src/context/ShopContext'

const Collection = () => {

  const { products, search } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  // const [sortType, setSortType] = useState('relavent')



  const applyFilter = useCallback( () => {

    let productsCopy = products.slice()

    if (search.length > 0) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      //TODO: Implement the logic about a selected category by user
    }

    setFilterProducts(productsCopy)

  }, [search, category, products])

  useEffect(() => {
    applyFilter();
  }, [applyFilter]);


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
       {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"TOUTES"} text2={"COLLECTIONS"} />   
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
