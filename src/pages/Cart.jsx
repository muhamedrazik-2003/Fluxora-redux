import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, checkout, removefromCart } from "../redux/slices/cartSlice";


export default function Cart() {
  const { cart } = useSelector((state) => state.cartSlice);
  console.log(cart)
  const dispatch = useDispatch()


  return (
    <section className="bg-dark text-white py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Your Cart</h2>
        <div className="grid grid-cols-[2.5fr_1fr] gap-4">
          <div className="grid grid-cols-1 gap-4">
            {
              cart.length > 0
                ? <>
                  {
                    cart.map(items => (
                      <div className="bg-slate-950 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
                        <img
                          src={items.images}
                          alt="Product"
                          className="w-28 h-28 object-cover rounded-lg"
                        />

                        <div className="flex-1 w-full">
                          <p className="text-muted text-sm mt-1 mb-3">{`ID : ${items.id}`}</p>
                          <h3 className="text-xl font-semibold">{items.title}</h3>
                          <p className="text-muted text-sm mt-1 mb-3">{`$ ${items.price}`}</p>

                          <div className="flex items-center gap-2">
                            <button className="bg-warning text-dark font-bold p-2 rounded hover:bg-yellow-600">
                              <Minus size={16} onClick={() => dispatch(decrementQuantity(items.id))} />
                            </button>
                            <span className="text-lg px-2">{items.quantity}</span>
                            <button className="bg-warning text-dark font-bold p-2 rounded hover:bg-yellow-600">
                              <Plus size={16} onClick={() => dispatch(incrementQuantity(items.id))} />
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={()=> dispatch()}
                          className="text-red-500 hover:underline flex items-center text-sm mt-3 sm:mt-0 sm:ml-4">
                          <Trash2 size={16} className="mr-1" />
                          Remove
                        </button>
                      </div>
                    ))
                  }
                </>
                : <h1>Your Cart is Empty</h1>
            }
          </div>
          <div className="bg-slate-950 rounded-xl p-6 shadow-md">

            <h3 className="text-lg font-medium mb-2 ">
              Total Products : 
              <span className="text-warning font-bold"> {cart.length}</span>
            </h3>
            <h3 className="text-lg font-medium mb-4">
              Total Amount : 
              <span className="text-warning font-bold">{` $ ${cart.reduce((current,prev) => current + (prev.quantity * prev.price),0).toFixed(2)}`}</span>
            </h3>
            <button 
              onClick={() => dispatch(checkout(removefromCart()))}
              className="w-[100%] bg-yellow-500 text-black rounded-full font-semibold py-3 hover:bg-yellow-600">
              Proceed to Checkout
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
