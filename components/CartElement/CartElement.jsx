import React from 'react'
import { useCart } from '../../Hooks/useCart'
export const CartElement = ({item, removeFromCart, reduceQuantity}) => {
  const {id, title, quantity, image, price } = item
  console.log("Rerendered " + title)
  return <div className="cart-element bg-white text-black dark:shadow-none rounded-lg w-full  relative h-[12rem] md:h-[10rem] flex flex-row justify-between shadow-md shadow-stone-300 ">
            <div className="img-wrapper w-fit">
              <img src={image} className='mt-2 md:m-0 border-2 rounded-t-lg border-stone-300 min-w-[8rem] md:w-[8rem] h-[10rem]'/>
            </div>
            <div className="ml-2 details-wrapper  md:w-fit">
              <p className='w-[40%] md:w-[20rem] truncate'>{title}</p><br/>
              <p className=''>${price} <span className='text-stone-500'>x {quantity}</span></p>
              <div className='w-full absolute bottom-2'>{(quantity>1) && <button className='remove-btn  mr-3 bg-rose-500 p-2 hover:scale-110 transition-transform duration-200 text-white' onClick={()=>reduceQuantity(item)}>Remove x1</button>}<br className='md:hidden'/><button onClick={()=>removeFromCart(id)} className='remove-btn mr-2 mt-2 bg-rose-500 p-2 hover:scale-110 transition-transform duration-200 text-white'>{quantity>1? "Remove All":"Remove from Cart" }</button></div>
            </div>
        </div>

}
