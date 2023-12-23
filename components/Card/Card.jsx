import { Link } from "react-router-dom";
export const Card = ({data})=>{
    console.log(data)
    const {id, title:name, image:thumb,price:sale_price,rating, description} = data;
    return<div className="mcard dark:bg-stone-200 dark:shadow-none text-black  mx-2 cursor-pointer w-[12rem] h-[18rem]  md:w-[14rem] md:h-[20rem] mt-5 rounded-lg shadow-md shadow-stone-400 hover:shadow-stone-400 hover:scale-105 transition-all duration-150">
        <Link to={`/products/${id}`} ><div className="card-contents h-full relative">
            <img src={thumb} className="card-thumb  rounded-t-lg h-[50%] w-[8rem] m-auto"/>
            <div className="card-details ml-2">
                <p className="text-sm my-2 font-semibold truncate">{name}</p>
                <p className="text-sm max-h-[1rem]  hidden md:block line-clamp-4 w-[95%]">{description}</p>
                <p className="absolute right-4 bottom-2 md:text-xl text-stone-400">★  {rating.rate}  </p>
                <p className="absolute bottom-2 md:text-xl">${sale_price}</p>
            </div>
        </div>
    </Link>
    </div>
}