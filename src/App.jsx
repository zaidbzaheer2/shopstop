import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Header, Hero, Footer } from "../components"
import { useCart } from "../Hooks/useCart"
import { useEffect, useState } from "react"
const THEME_TOKEN = "SHOPMATE@THEME_SETTINGS"
const App = () =>{
  const [theme, setTheme] = useState(()=>{
    const currTheme = localStorage.getItem(THEME_TOKEN);
    if(currTheme)
      return currTheme
    else
      return "light"
  })
  useEffect(()=>{
    const mainBody = document.querySelector(".background-body")
    mainBody.classList = `background-body ${theme==="light"? "bg-white": "bg-zinc-800"}`
    localStorage.setItem(THEME_TOKEN, theme)
  }, [theme])
  const cart_pack = useCart()
  return <section className={"SHOPSTOP_APP  h-full " + ` ${theme} `}>
            <Header cart_tools={cart_pack} theme_tools = {[theme, setTheme, THEME_TOKEN]}/>
            <Hero cart_tools={cart_pack}/>
    
          </section>
}
export default App