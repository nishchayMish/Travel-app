import React, { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../context/Cart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useContext(CartContext);

  return (
    <nav className="bg-gradient-to-r from-[#2c3e50] via-[#34495e] to-[#f39c12] shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/" className="text-white text-2xl font-bold">
          Explore<span className="text-yellow-300">India</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center space-x-6 text-white">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/tours" className="hover:text-yellow-300">Tours</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          {/* Cart Icon (Desktop) */}
          <li className="relative bg-black p-3 rounded-full hover:bg-gray-800 transition">
            <Link to="/cart" className="flex items-center text-white text-lg relative">
              <FaCartShopping className="text-xl" />
              {cart.items.length > 0 && (
                <sup className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cart.items.length}
                </sup>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="sm:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 text-white text-center p-4 space-y-4">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/tours" className="hover:text-yellow-300">Tours</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          {/* Cart Icon (Mobile) */}
          <li className="relative inline-block">
            <Link to="/cart" className="flex justify-center items-center text-lg">
              <FaCartShopping className="text-2xl" />
              {cart.items.length > 0 && (
                <sup className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cart.items.length}
                </sup>
              )}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
