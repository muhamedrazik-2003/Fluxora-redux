import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts, search, previousPage, nextPage } from '../redux/slices/productSlice'
import { addToCart } from '../redux/slices/cartSlice'
import { addToWishlist } from '../redux/slices/wishSlice'
import { ArrowLeft, ArrowRight, Search } from 'lucide-react'
// import {  } from '../redux/slices/productSlice'

const Landing = () => {
  const { products, loading, error, currentPage, productsPerPage } = useSelector((state) => state.productSlice);
  const totalPage = Math.ceil(products.length / productsPerPage)
  const firstIndex = (currentPage * productsPerPage) - productsPerPage
  const lastIndex = currentPage * productsPerPage

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(previousPage())
    }
  }
  const handleNext = () => {
    if (currentPage < totalPage) {
      dispatch(nextPage())
    }
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <section className="bg-dark text-white py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Elevate Your Style with Our Exclusive Streetwear Collection
          </h1>
          <p className="text-muted mb-8 text-lg">
            Discover the latest trends in urban fashion. Our new arrivals are
            designed for comfort and style, perfect for making a bold statement.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-600 transition duration-300">
            Shop Now
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center gap-4">
          <img
            src="https://img.freepik.com/free-photo/front-view-woman-posing-with-monochrome-outfit_23-2151044500.jpg?ga=GA1.1.1185905730.1730260349&semt=ais_items_boosted&w=740"
            alt="Streetwear Model 1"
            className="rounded-lg shadow-lg w-1/2 object-cover"
          />
          <img
            src="https://img.freepik.com/free-photo/black-turtleneck-t-shirt-men-s-business-wear_53876-104304.jpg?ga=GA1.1.1185905730.1730260349&semt=ais_items_boosted&w=740"
            alt="Streetwear Model 2"
            className="rounded-lg shadow-lg w-1/2 object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto mt-20 px-4">
        <div className='flex justify-between items-center mx-3'>
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Trending Products
          </h2>
          <div className='flex items-center  px-2 gap-2 mb-10 bg-slate-800 border-2 border-slate-700  text-white rounded-3xl'>
            <Search className=''/>
            <input
              onChange={(event) => dispatch(search(event.target.value))}
              type="search"
              placeholder='Enter Keyword To Search'
              className='w-xl h-8 text-lg focus:outline-none' />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {
            loading
              ? <div className='col-span-4 flex justify-center items-center py-10 mb-10'>
                <svg
                  className="size-40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 350 250"
                >
                  <path
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="300 385"
                    strokeDashoffset="0"
                    d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      calcMode="spline"
                      dur="2s"
                      values="685;-685"
                      keySplines="0 0 1 1"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>

              </div>
              : <>
                {error.length > 0
                  ? <h2 className='text-center text-amber-400'>{error}</h2>
                  :
                  <>
                    {
                      products.length > 0 &&
                      products.slice(firstIndex, lastIndex).map((item) => (
                        <div className="bg-slate-950 flex flex-col justify-between text-white rounded-lg shadow-md p-6" key={item.id}>
                          <Link to={`./product/${item.id}`}>
                            <img
                              src={item.thumbnail}
                              alt="Product img"
                              className="w-full h-64 object-cover rounded mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2">{item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}</h4>
                            <p className="text-slate-500 mb-2">
                              Brief description of the product. Highlight its key features.
                            </p>
                            <p className="text-lg font-bold mb-4 text-yellow-400">{`$ ${item.price}`}</p>
                          </Link>

                          <div className="space-y-2">
                            <button
                              onClick={() => dispatch(addToWishlist(item))}
                              className="bg-green-500 text-black px-4 w-full  py-2 rounded-3xl hover:bg-green-700 transition">
                              Add to Wishlist
                            </button>
                            <button
                              onClick={() => { dispatch(addToCart(item)) }}
                              className="bg-yellow-500 text-black px-4 w-full py-2 rounded-full hover:bg-yellow-700 transition">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      ))

                    }
                  </>


                }
              </>
          }
        </div>
      </div>
      <div className=' flex gap-6 justify-center mt-10'>
        <button onClick={() => handlePrev()} className='flex gap-1'><ArrowLeft /> Prev</button>
        <p>{currentPage} / {totalPage}</p>
        <button onClick={() => handleNext()} className='flex gap-1'>Next <ArrowRight /></button>
      </div>
    </section>
  )
}

export default Landing
