import React, { useContext } from 'react';
import { CartContext } from '../context/Cart';
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  const { items, removeFromCart } = useContext(CartContext);
  const total = items.reduce((a, b) => a + b.price, 0);
  const finalTotal = (total + (total * 0.18)).toFixed(2);

  return (
    <div className="min-h-screen mt-14 bg-gradient-to-br from-blue-400 to-purple-600 p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Your Cart</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side - Cart Items */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Added Places</h2>
          <div className="space-y-4">
            {items.length > 0 ? (
              items.map((item) => (
                <li key={item.id} className="flex flex-wrap sm:flex-nowrap items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
                  <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg object-cover shadow-md" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      Price: <span className="font-bold text-gray-900">${item.price}</span>
                    </p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)} // Call removeFromCart
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
                    Remove
                  </button>
                </li>
              ))
            ) : (
              <div className='flex justify-center items-center gap-5 mt-20'>
                <h2 className="text-center text-2xl font-semibold text-sky-500">Your cart is empty</h2>
                <div className='text-sky-500 text-2xl font-semibold'><FaCartShopping/></div>
              </div> 
            )}
          </div>
        </div>

        {/* Right Side - Pricing Summary */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg max-h-[300px]">
          <h2 className="text-2xl font-semibold mb-4">Pricing Details</h2>
          <div className="space-y-2 text-lg">
            <div className="flex justify-between">
              <span>Price:</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between">
              <span>GST Tax:</span>
              <span>18%</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-xl">
              <span>Total:</span>
              <span>${finalTotal}</span>
            </div>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
