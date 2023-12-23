import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./MyOrders.css"
import Navbar from '../../components/Navbar/Navbar';

function MyOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async()=>{
    const user = JSON.parse(localStorage.getItem("user")) || null;

    const response = await axios.get(`/orders?id=${user._id}`)

    setOrders(response?.data?.data);
  }

  useEffect(()=>{
    fetchOrders();
  }, []);

  return (
    <div>
       <Navbar/>
      <h1 className='text-center o-heading'>All Orders</h1>

      {
        orders?.map((order, index)=>{
          const {product, quantity, shippingAddress} = order;
          return (
          <div key={index} className='order-card'>
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <p>Price({product.price})  x Quantity({quantity}) = {product.price * quantity}</p>
            <p>Shipping Address: {shippingAddress}</p>

          </div>)
        })
      }
    </div>
  )
}

export default MyOrders