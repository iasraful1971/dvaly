import React from 'react';
import { products } from '../../data';
import Card from './Card/Card';
import './ProductLists.css';
const ProductLists = () => {
    return (
        <>
            <div id='products' className="pl">
                <div className="pl-texts">
                    <h1 className='pl-title'>
                        This is Our best products
                    </h1>
                    <p className='pl-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptas doloremque dolore nam pariatur iste labore mollitia rem totam, minus voluptatum vitae nihil, omnis placeat iusto alias perspiciatis eos cupiditate, quam minima sequi repellendus ad deserunt sit. Corporis, qui voluptates.</p>
                </div>
                <div className="pl-list">
                    {products.map(item => (
                          <Card key={item.id} img={item.img} name={item.name} />
                    ))}
                
                </div>
            </div>   
        </>
    );
};

export default ProductLists;