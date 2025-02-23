import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom';
import Tours from './pages/Tours';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className='wrapper'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/tours' element={<Tours/>}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
    </div>
  )
}

export default App