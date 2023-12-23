import Slider from "react-slick"
import "./Slick.css"
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
    <button onClick={onClick} className="text-3xl hidden md:block controls absolute z-[1000] top-[40%] bg-stone-300 bg-opacity-0 hover:bg-opacity-50 rounded-[100%] right-[-40px] text-pink-700 !w-[50px] h-[50px]">&gt;</button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <button onClick={onClick} className="text-3xl hidden md:block controls absolute z-[1000] top-[40%] bg-stone-300 bg-opacity-0 hover:bg-opacity-50 rounded-[100%] left-[-40px]  text-pink-700 !w-[50px] h-[50px]">&lt;</button>
        
    );
  }
export const Slick=({children})=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay:true,
        autoplaySpeed: 4000
      };
    return <Slider {...settings} className="w-full h-[13rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] rounded-lg">
        {children}
    </Slider>
}