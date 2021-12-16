import React from 'react'
import Contact from '../Contact/Contact'
import ProductList from '../ProductLists/ProductLists'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'
import Hero from './Hero/Hero'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductList/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default Home
