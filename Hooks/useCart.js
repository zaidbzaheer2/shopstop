import { useCallback, useEffect, useState } from "react"

const ITEMS_KEY = "SHOPSTOP_CART_ITEMS"
export const useCart = () => {
  const[items, setItems] = useState(()=>{
    const curr_items = localStorage.getItem(ITEMS_KEY)
    if(curr_items)
        return JSON.parse(curr_items)
    else
        return []
  })
  const emptyCart = ()=>{
    setItems([])

  }

  useEffect(()=>{
    // emptyCart()
    localStorage.setItem(ITEMS_KEY, JSON.stringify(items))
  }, [items])
  const reduceQuantity =useCallback((item)=>{
    const index = items.findIndex(el=>el.id===item.id)
    if(index!==-1){
      if(items[index].quantity>1){
        setItems(prevItems=>{
          const updatedItems = [...prevItems]
          updatedItems[index] = {...updatedItems[index], quantity:updatedItems[index].quantity -1}
          return updatedItems
        })
      } else{
        removeFromCart(item.id)
      }
    }
    
  })
  const addToCart = item =>{
    console.log("ITEM ADDED")
    const itemInCart = items.findIndex(el=>el.id===item.id)
    if(itemInCart===-1)
    setItems(prevItems=>[...prevItems, {...item, quantity:1}])
    else{
      setItems(prevItems=>{
        const updatedItems = prevItems.map(el=>{
          if(el.id===item.id)
            return {...el, quantity:el.quantity+1}
          return el
        })
        return updatedItems
      })
    }
  }
  
  const removeFromCart = id =>{
    setItems(items=>{
        return items.filter(el=>el.id!==id)
    })
  }
  const subTotal = ()=>{
    var total=0
    items.map(item=>{total+=(item.price*item.quantity)})
    return total
  }
return [items, addToCart, removeFromCart, subTotal, reduceQuantity]
}
