import React, { useState } from 'react'
import { useCart } from '../../Hooks/useCart'
import { useFetch } from '../../Hooks/useFetch'
import { Loading } from '../../components'
import { useMultiFetch } from '../../Hooks/useMultiFetch'
import { CartElement } from '../../components'
export const CartPage = ({cart_tools}) => {
    const [items, addToCart, removeFromCart, subTotal, reduceQuantity] = cart_tools
    // const [data,loading] = useMultiFetch(items)


  return <section  className='cart-section w-full relative h-full'>
        <p className='section-heading my-10'>Cart Items</p>
    <div className="cartpage-container overflow-hidden w-full  pb-[10rem]">
        {items.length==0 && <p className='text-rose-600 w-full text-center text-lg'>Cart is Empty</p>}
        <ul className='max-w-full flex flex-row flex-wrap w-full'>
            {items && items.map((item,i)=> <li className='lg: m-3 xl:m-4' key={i}>
             <CartElement item={item} removeFromCart={removeFromCart} reduceQuantity={reduceQuantity}/>
            </li>)}
        </ul>

    </div>
    <div className="checkout-section bg-white dark:bg-zinc-900 dark:shadow-none absolute bottom-2 w-full h-[5rem] flex justify-between flex-row items-center shadow-sm shadow-stone-400">
            <span className='mx-5 text-rose-500'>Total: ${subTotal()}</span>
            {items.length>0 && <button  className='mx-5 text-rose-500 border-2 border-rose-500 p-2 hover:bg-rose-500 hover:text-white transition-colors duration-150'>Checkout</button>}
        </div>
  </section>
}
