import { HeartMinus } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishSlice';
import { addToCart } from '../redux/slices/cartSlice';

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishSlice)
  const dispatch = useDispatch()
  console.log(wishlist);
  return (
    <section className="bg-black text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Your Wishlist</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wishlist.length > 0
            ? <>
              {wishlist.map(item => (
                <div
                  className="bg-slate-950 rounded-xl p-4 shadow-lg transition"
                >
                  <img
                    src={item.thumbnail}
                    alt="{item.name}"
                    className="w-full h-72 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-muted text-sm mt-1 mb-4">{`$ ${item.price}`}</p>
                  <div className='grid space-y-2'>
                    <button 
                      onClick={() => dispatch(removeFromWishlist(item.id))}
                      className="bg-red-500 rounded-full text-black font-semibold px-4 py-2 w-full hover:bg-red-700 transition">
                      Remove From Wishlist
                    </button>
                    <button 
                      onClick={() => { dispatch(addToCart(item)) }}
                      className="bg-yellow-500 rounded-full text-black font-semibold px-4 py-2  w-full hover:bg-yellow-700 transition">
                      Add to Cart
                    </button>
                  </div>

                </div>
              ))

              }
            </>
            : <p>No Products Available</p>
          }

        </div>
      </div>
    </section>
  )
}

export default Wishlist
