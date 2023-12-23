import "./CardList.css"
import { Card } from "../Card/Card"
    export const  CardList = ({data,controls=false,scrollable=false, center=false})=>{
    const moveDistance = 300
    const listNext = ()=>{
        const list = document.querySelectorAll(".card-list")[0]
        list.scrollTo({left: list.scrollLeft + moveDistance, behavior: 'smooth'})
    }
    const listPrev = ()=>{
        const list = document.querySelectorAll(".card-list")[0]
        list.scrollTo({left: list.scrollLeft - moveDistance, behavior: 'smooth'})
    }
    return <section className="card-list-section  w-full relative">
        <ul className={"card-list x-custom-scroll   list-none flex flex-row w-full pb-3 overflow-y-hidden "+`${center? " justify-center ":" justify-start "}`+ `${scrollable? "overflow-x-scroll flex-nowrap":"overflow-hidden flex-wrap "}`}>
        {data.map((el,i)=><li key={i} className="w-fit "><Card data={el}/></li>)}
        </ul>
        {controls && <div className="list-controls controls hidden md:block h-full  w-full">
            <button  className="scale-[200%] z-[1000] absolute top-[50%] text-pink-600   rounded-[200%] h-[20px] w-[20px] opacity-50 left-[-30px]   transition-opacity duration-150 hover:opacity-75 " onClick={listPrev}>&lt;</button>
            <button   className="scale-[200%] z-[1000]  absolute top-[50%] text-pink-600   rounded-[200%] h-[20px] w-[20px] opacity-50  right-[-35px] transition-opacity duration-150 hover:opacity-75" onClick={listNext}>&gt;</button>
        </div>}
    </section>
}