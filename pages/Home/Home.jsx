
import "./Home.css"
import { Carousel } from "../../components"
import { Slick } from "../../components"
import { electronics, toys, appliances, music, clothes, slides, stats } from "../../src/assets/Sources"
import games from "/src/assets/games.png"
import { CardList } from "../../components"
import { useFetch } from "../../Hooks/useFetch"
import { Loading } from "../../components"
export const Home = ()=>{
    const parameters = {
        sort_type:"default",
        page:"1",
        page_size:"6",
        sort_order:"default"
    }
    const categories = [[electronics, "Electronics"],[appliances, "Appliances"], [music, "Music"], [clothes, "Clothes"], [games, "Games"], [toys, "Toys"]]
    const [setURL, data,loading,error] = useFetch("https://fakestoreapi.com/products?limit=6")
    document.title= "Home"
    return <section className="home-section">
        <div className="home-container mt-[5rem] h-full">
            <section className="top-products">
                <p className="section-heading">Best Selling</p>
                <Slick>
                 { slides.map((el,i)=> <div key={i} className="slide-wrapper text-white relative rounded-lg drop-shadow-lg bg-gradient-to-r from-pink-600  via-rose-500 to-white w-full h-[13rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem]">
                        <div className="details m-5 absolute h-full hidden md:block w-[40%]  left-0">
                            <p className="text-sm md:text-[20px] lg:text-[25px] xl:text-[30px] mb-5">43" Gaming Monitor</p>
                            <p className="text-sm md:text-[15px]  line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eaque, dolorum fugit corporis, magni nesciunt aut iure delectus repellendus sequi iusto reprehenderit unde dolores quasi quos recusandae eum explicabo distinctio.</p>
                        </div>
                        <div className="img-wrapper absolute right-0 w-full h-full md:w-[50%]">
                            <img src={el} className="h-[13rem] md:h-[15rem] lg:h-[20rem] xl:h-full w-full"/>
                        </div>
                        <div className="stats absolute bottom-2 left-2">
                            {stats.map((el,i)=> <span className="inline-block" key={i}><img src={el} className="w-[15px] h-[15px] md:w-[25px] md:h-[25px] invert z-[1000] mx-5"/></span>)}
                        </div>
                    </div>)}
                </Slick>
                
            </section>
            <section className="browse-categories mt-[5rem]">
                <p className="section-heading">Browse Categories</p>
                <ul className="categories-list w-full flex flex-row flex-wrap justify-center">
                    {categories.map((el,i)=> <li key={i} className="cursor-pointer m-5 scale-75 md:scale-100 inline-block text-center "><div className="img-wrapper hover:scale-110 transition-transform duration-200 from-pink-600 via-rose-500 to-rose-400 bg-gradient-to-b rounded-[100%]"><img className="w-[7rem] mb-2 h-[7rem] p-4 invert rounded-[100%] " src={el[0]}/></div> {el[1]}</li>)}
                </ul>
            </section>
            <section className="top-sales mt-[5rem] pb-[5rem]">
                <p className="section-heading">On Sale</p>
                {loading && <Loading loading={loading}/>}
                {data && <CardList data={data} scrollable={true} controls={true}/>}
            </section>
        </div>
    </section>
}