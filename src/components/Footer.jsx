import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="text-center bg-yellow-500 py-8">
            <Link to={'/'} className="flex justify-center items-center text-2xl font-semibold text-black">
                <img src="/public/Fluxora icon.svg" className="mr-3 h-6 sm:h-9" alt="Fluxora Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Fluxora</span>
            </Link>
            <p className="my-6 px-6 mx-auto text-gray-500 dark:text-gray-900 max-w-4xl">
                We’re your one-stop destination for quality products, unbeatable prices, and seamless shopping. From the latest tech to daily essentials, we bring everything you need right to your fingertips.
            </p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-black">
                <li>
                    <Link className="mr-4 hover:underline md:mr-6 ">Home</Link>
                </li>
                <li>
                    <Link className="mr-4 hover:underline md:mr-6">Whishlist</Link>
                </li>
                <li>
                    <Link className="mr-4 hover:underline md:mr-6 ">Cart</Link>
                </li>
            </ul>
            <span className="text-sm text-gray-500 sm:text-center dark:text-red-700">© 2025 <Link className="hover:underline">Fluxora</Link>. By Muhamed Razik</span>
        </div>
    )
}

export default Footer
