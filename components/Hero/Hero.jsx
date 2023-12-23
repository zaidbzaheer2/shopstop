import { AllRoutes } from "../../Routes/AllRoutes"
export const Hero = ({cart_tools})=>{

    return <section className="hero-section">
            <div className="hero-container dark:text-white  w-full h-full mb-10 ">
            <div className="contents-container w-[98%] md:w-[80%] m-auto h-full pb-[5rem]">
                <AllRoutes cart_tools={cart_tools}/>
            </div>
        </div>
    </section>
}