

import home from "/src/assets/home_icon.png"
import logo from "/src/assets/logo.png"
import search from "/src/assets/search_icon.png"
import cart from "/src/assets/cart.png"
import cart_default from "/src/assets/cart_default.png"
import sun from "/src/assets/sun.png"
import moon from "/src/assets/moon.png"
import { Link,NavLink } from "react-router-dom"
import "./Header.css"
export const Header = ({cart_tools, theme_tools}) =>{
    const [theme, setTheme, THEME_TOKEN] = theme_tools
    const _items = [...cart_tools[0]]
    const toggleTheme = ()=>{
        setTheme(theme=>{
            if(theme==="light")
                return "dark"
            else
                return "light"
        })
    }
    let itemsInCartNumber =  0
    _items.forEach(item=>itemsInCartNumber+=item.quantity)  
    return <section className="header-section dark:text-white">
        <div className="header-container-pc w-full h-[5rem] bg-white dark:bg-zinc-900 faded-borders border-2 dark:border-none border-rose-600">
            <div className="header-contents w-[95%] md:w-[80%] mx-auto flex flex-row items-center h-full justify-between">
                <div className="logo w-[6rem] h-[3rem]">
                    <img src={logo} className="w-[6rem] h-[3rem]"/>
                </div>
                <nav className="hidden md:block">
                    <NavLink end to={""}><span className="mx-4 border-b-2  border-white hover:border-rose-500 transition-colors duration-200">Home</span></NavLink>
                    <NavLink end to={"/products"}><span className="mx-4 border-b-2  border-white hover:border-rose-500 transition-colors duration-200 ">View Products</span></NavLink>
                    <span className="mx-4 border-b-2 cursor-pointer  border-white hover:border-rose-500 transition-colors duration-200 ">Contact Us</span>
                </nav>

                   <div className="cart-symbol relative">
                        <div className="absolute text-center hidden md:block left-[-12px] top-[-5px] w-5 h-5 rounded-[200%] bg-rose-500 text-white">
                            <p className="text-[12px] mt-[0.1rem]">{itemsInCartNumber}</p>
                        </div>
                        <NavLink end to={"/cart"}><img src={cart_default} className="hover:scale-110  hidden md:inline w-12 "/></NavLink>
                        <img onClick={toggleTheme} className="ml-5 cursor-pointer inline w-6" src={theme==="light"? moon:sun} />
                    </div>
            </div>

        </div>
        <div className="header-container dark:bg-zinc-900 w-full h-[5rem] z-[1000] fixed bottom-0 bg-white md:hidden dark:shadow-none shadow-inner shadow-stone-300">
            <header className="w-[90%] max-w-[30rem] m-auto flex flex-row justify-center items-center h-full">
                
                <ul className="nav-list flex flex-row w-full justify-between">
                    {[[search,"/products"],[home,""] ,[cart,"/cart"] ].map((el,i)=> <li key={i} className=" mx-3 cursor-pointer border-b-2 dark:border-none p-1 border-white transition-colors  duration-150"><Link to={el[1]}><img src={el[0]} alt="" className="w-[40px] hover:scale-110" /></Link></li>)}
                </ul>
            </header>
        </div>

    </section>
}