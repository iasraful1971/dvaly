import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
const Product = () => {
  useEffect(() => {
    AOS.init({
      duration : 3000
    });
  }, []);
  const {id}=useParams();
  const products = [
    {
      id: 1,
     details:'A product detail page (PDP) is a web page on an eCommerce site that presents the description of a specific product in view. The details displayed often include size, color, price, shipping information, reviews, and other relevant information customers may want to know before making a purchase.',
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
     details:'Product information management (PIM) is the process of managing all the information required to market and sell products through distribution channels..',
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt:
        'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
     details:'Use the product detail [product_detail] attribute to provide technical specifications or additional details. You can describe any aspect of the product not.',
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt:
        'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
     details:'The purpose of a product description is to provide shoppers with important information that helps them make a purchase decision. Think o',
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt:
        'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
  ]

  const filteredProduct = products.filter(product => product.id == id);
  return (
    <>
      <Navbar />
      <div className='bg-white dark:bg-gray-800'>
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 className='sr-only dark:text-white'>Products</h2>

          <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8' data-aos='fade-right'>
            {filteredProduct.map(product => (
              <a key={product.id} href={product.href} className='group'>
                <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8' >
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className='w-full h-full object-center object-cover group-hover:opacity-75'
                  />
                </div>
                <h3 className='mt-4 text-sm text-gray-700 dark:text-gray-200'>
                  {product.name}
                </h3>
                <h4 className='mt-1 text-lg font-medium text-red-900 dark:text-gray-300'>
                  {product.price}
                </h4>
                <p className='mt-1 text-sm font-medium text-gray-900 dark:text-gray-500'>
                  {product.details}
                </p>
              
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product
