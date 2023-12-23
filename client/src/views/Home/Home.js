import React, { useState, useEffect } from 'react'
import "./Home.css"
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard';
import { checkLogin } from '../../utils/auth';
import Navbar from '../../components/Navbar/Navbar';

function Home() {
    const [products, setProducts] = useState([]);


    const loadProducts = async () => {
        const response = await axios.get("/products");
        setProducts(response?.data?.data);
    }

    useEffect(() => {
        checkLogin();
        loadProducts();
    }, []);


    return (
        <div>
            <Navbar />
            <h1 className="main-title text-center">The Complete Package to Make Easy Your Life <p className='text-center main-title-caption '>It is a curated collection of essential tools and services designed to simplify and enhance your daily life.<br /> From innovative gadgets and time-saving apps to personalized solutions, this comprehensive package is crafted to streamline your routines, boost productivity, and bring convenience to every aspect of your lifestyle.</p></h1><hr />

            <div className='pr-head'>
                <h2 className='text-center p-heading'>PRODUCTS</h2>
                <input type='text' name='search-bar' placeholder='Search Products --->>' className='search-bar' />
            </div>

            <div className='products-container'>
                {
                    products?.map((product, index) => {
                        const { _id, name, price, description, image } = product;
                        return (
                            <ProductCard key={index} id={_id} name={name} price={price} description={description} image={image} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home