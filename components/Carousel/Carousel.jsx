import c1 from "/src/assets/c1.jpg"
import c2 from "/src/assets/c2.jpg"
import c3 from "/src/assets/c3.jpg"
import c4 from "/src/assets/c4.jpg"
import likes from "/src/assets/like.png"
import reviews from "/src/assets/reviews.png"
import sales from "/src/assets/sales.png"
import ranking from "/src/assets/ranking.png"
import "./Carousel.css"
import Slider from "react-slick"
import { useCallback, useEffect } from "react"
export const Carousel = ()=>{
  const slides_number = 4
  var current_slide = 1

  window.addEventListener("resize", ()=>{
    const el = document?.querySelectorAll(".slider-list")[0]
   el.scrollTo({left:0, behavior:"smooth"}) 
  })
 const slideNext = ()=>{
    const el = document?.querySelectorAll(".slider-list")[0]
    if(!el)
    return
    if(current_slide<slides_number){
    const moveDistance = el?.getBoundingClientRect().width
    el.scrollTo({left:el.scrollLeft+ moveDistance, behavior:"smooth"})
    current_slide++
    } else{
      el.scrollTo({left:0, behavior:"smooth"})
      current_slide=1
    }
    }
  const slidePrev = ()=>{
      const el = document.querySelectorAll(".slider-list")[0]
      if(!el)
      return
  
      const moveDistance = el.getBoundingClientRect().width
      if(current_slide>1){
      el.scrollTo({left:el.scrollLeft- moveDistance, behavior:"smooth"})
      current_slide--
      } else{
        el.scrollTo({left:5000, behavior:"smooth"})
        current_slide = slides_number
      }

    }
  const autoPlaySlides =useCallback(()=>{
    slideNext()
    setTimeout(autoPlaySlides, 4000)
  })
  // autoPlaySlides()
    return <section className="mcarousel relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem]">
      <ul className="slider-list w-full   invisible-scroll-x h-full list-none flex flex-col flex-wrap overflow-y-hidden overflow-x-scroll">
       {[c1,c2,c3,c4].map((el,i)=> <li key={i} className="slide relative w-full h-full bg-gradient-to-r from-pink-600 via-rose-500 to-rose-400">
          <div className="details w-[50%] line-clamp-5 md:line-clamp-10 text-ellipsis overflow-hidden  md:h-full scale-75 md:scale-100 absolute md:top-10 md:left-5">
              <p className="text-xl text-white">34" Gaming Monitor</p>
              <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ea neque dolorum fugiat similique adipisci excepturi. Consequatur nemo inventore iste, quis corrupti ratione corporis dolor, quos a totam eaque earum.</p>
          </div>  
          <div className="img-wrapper  md:w-[40%] h-full absolute top-0 right-0">
              <img src={el} className="h-full w-full"/>
          </div>
          <div className="stats absolute bottom-2  lg:left-0">
            {[likes,reviews,sales,ranking].map((el,i)=> <span className="!inline-block mx-3 md:mx-5"><img src={el} className="!invert w-[20px]"/></span>)}
          </div>
        </li>)}

      </ul>
      <div className="slider-controls">
        <button className="w-[50px] rounded-[200%] text-5xl md:text-7xl hover:bg-opacity-90  font-light text-rose-500  absolute md:top-[45%] z-[1000] top-[35%] left-[-25px] " onClick={slidePrev}>&lt;</button>
        <button className="w-[50px] rounded-[200%] text-5xl md:text-7xl  hover:bg-opacity-90 font-light text-rose-500 absolute md:top-[45%] z-[1000]  top-[35%] right-[-25px] " onClick={slideNext}>&gt;</button>
      </div>
    </section>
}