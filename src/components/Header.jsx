import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const { cart } = useSelector(state => state.cartSlice)
    const { wishlist } = useSelector(state => state.wishSlice)

    return (
        <nav className="bg-transparent px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to={'/'} className="flex items-center">
                    <img src="/public/Fluxora icon.svg" className="mr-3 h-6 sm:h-9" alt="Fluxora Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Fluxora</span>
                </Link>
                <div className="flex items-center lg:order-2">
                    <Link
                        to={'/wishlist'}
                        className="text-white font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-yellow-600 group">
                        Whishlist
                        <span className='py-0.5 px-2 ml-1 rounded-full bg-yellow-500 text-black group-hover:bg-amber-700 group-hover:text-yellow-400'>{wishlist.length}</span>
                    </Link>
                    <Link
                        to={'/cart'}
                        className="text-white font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-yellow-600 group">
                        Cart
                        <span className='py-0.5 px-2 ml-1 rounded-full bg-yellow-500 text-black group-hover:bg-amber-700 group-hover:text-yellow-400'>{cart.length}</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
