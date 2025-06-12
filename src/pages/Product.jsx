import React, { useState, useEffect } from 'react'
import { ShoppingCart, Heart, Star, Package, Shield, Truck, Ruler, Scale } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { products } = useSelector(state => state.productSlice)
  const [productData, setProductData] = useState({})

  const { productId } = useParams()

  useEffect(() => {
    const productDetails = products.find(item => item.id === Number(productId))
    setProductData(productDetails)
  }, [products, productId])

  if (!productData) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

  return (
    <section className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-xl shadow-md">
              <img
                src={productData.thumbnail}
                alt={productData.title}
                className="w-full h-96 object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{productData.title}</h1>
              <div className="flex items-center mt-2 space-x-2">
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 text-gray-500">{productData.rating}</span>
                </div>
                <span className="text-green-600 font-medium">{productData.availabilityStatus}</span>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-lg">
              <div className="flex items-end gap-4">
                <span className="text-3xl font-bold">$ {productData.price}</span>
              </div>
            </div>

            <p className="text-gray-500">{productData.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-yellow-500 hover:bg-yellow-700 text-black font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="flex-1 border bg-green-500 text-black hover:bg-green-700 font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition">
                <Heart size={20} />
                Add to Wishlist
              </button>
            </div>

            {/* Product Details */}
            <div className="pt-6 space-y-4 mb-15">
              <div className="flex items-start gap-4">
                <Truck className="text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Shipping Information</h3>
                  <p className="text-yellow-600">{productData.shippingInformation}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Shield className="text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium ">Warranty & Returns</h3>
                  <p className="text-yellow-600">{productData.warrantyInformation} • {productData.returnPolicy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product