import { Route, Routes } from "react-router-dom";
import { Home, ProductList, Detail, CartPage} from "../pages";
import { useCart } from "../Hooks/useCart";
export const AllRoutes = ({cart_tools})=>{

    return <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="products/" element={<ProductList/>}/>
        <Route path="products/:id" element={<Detail cart_tools={cart_tools}/>}/>
        <Route path="cart/" element={<CartPage cart_tools={cart_tools}/>}/>
    </Routes>
}