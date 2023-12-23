import { useFetch } from "../../Hooks/useFetch"
import { CardList } from "../../components"
import { Loading } from "../../components"
export const ProductList = () => {
    const [setURL, data, loading,error] = useFetch('https://fakestoreapi.com/products?limit=50')
    
  return <section className="products-section">
    <div className="products-container mt-[5rem] flex flex-col items-center">
        {loading && <Loading loading={loading}/>}
        {data && <CardList data={data} center={true}/>}
    </div>
  </section>
}
