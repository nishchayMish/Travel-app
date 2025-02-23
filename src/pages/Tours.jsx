import React, { useContext } from 'react'
import products from '../products'
import Card from '../components/Card'
import { CartContext } from '../context/Cart';

const Tours = () => {
  const cart = useContext(CartContext); 
  return (
    <section className='mt-10 px-10 py-10 bg-gradient-to-l from-[#2c3e50] via-[#34495e] to-[#f39c12] overflow-x-hidden'>
        <Card products={products} cart={cart}/>
    </section>
  )
}

export default Tours;
