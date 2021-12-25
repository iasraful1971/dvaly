import React from 'react'
import Accordion from '../Accordion/Accordion'
import Contact from '../Contact/Contact'
import ProductList from '../ProductLists/ProductLists'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'
import Slider from '../Slider/Slider'
import Hero from './Hero/Hero'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductList/>
      <Slider/>
      <Accordion/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default Home
