import { useFetch } from "../../Hooks/useFetch"
import { useParams } from "react-router-dom"
import { Loading } from "../../components"

import { useRef } from "react"
export const Detail = ({cart_tools}) => {
    const cartBtnRef = useRef()
    const params = useParams()
    const [setURL, data,loading,error] = useFetch(`https://fakestoreapi.com/products/${params.id}`)
    const [items, addToCart, removeFromCart, subTotal] = cart_tools
    let itemInCart=0
    if(items.length>0){
       let searched= Array.from(items).filter(el=>el.id==params.id)
       if(searched.length>0)
        itemInCart = searched[0].quantity
    }
    

    const itemAddEffect=()=>{
        addToCart(data)
        cartBtnRef.current.classList.add("scale-125")
        const timeout = setTimeout(()=>cartBtnRef.current.classList.remove("scale-125"),200)
        return ()=>{clearTimeout(timeout)}
    }
    return (
    <section className="detail-section">
        <div className="detail-container mt-[5rem] flex flex-col items-center">
            {loading && <Loading loading={loading}/>}
            {error!==null && <p>ERROR</p>}
            {data&&<div className="detail-card w-[80%]  m-auto md:w-full h-full flex flex-row flex-wrap md:flex-nowrap justify-around">
                <div className="img-wrapper mb-10 min-w-[15rem] h-[20rem] p-5 shadow-md shadow-stone-500">
                    <img src={data.image} className="w-full h-full"/>
                </div>
                <div className="detail-wrapper w-full text-center md:text-left mx-5 md:w-[50rem] h-screen md:h-[20rem] relative">
                    <p className="text-xl mb-5">{data.title}</p>
                    <p className="text-stone-400">★ {data.rating.rate}</p>
                    <p className="md:w-[30rem] line-clamp-5">{data.description}</p>
                    <button onClick={()=>itemAddEffect()} className="mt-5 md:absolute md:bottom-2 hover:scale-110 transition-transform duration-200 bg-rose-500 text-white p-2">Add to Cart <span className="border-l-2 px-2 border-white">${data.price}</span></button>
                    <div ref={cartBtnRef} className="max-w-[8rem] transition-transform duration-200  mx-auto md:absolute my-5 md:my-0 border-2 border-rose-500 text-rose-500 p-2 bottom-2 right-2">In Cart: {itemInCart}</div>
                </div>
            </div>}
        </div>
    </section>
  )
}
