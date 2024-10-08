import image1 from "../assets/hero/women.png"
import image2 from "../assets/hero/shopping.png"
import image3 from "../assets/hero/sale.png"
import Slider  from "react-slick"
const Home = () => {
    const list = [
        {
            id : 1,
            img : image1,
            title:"Upto 50% off on all Men's Wear",
            description:"lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id : 2,
            img : image2,
            title:"30% off on all Women's Wear",
            description:"Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id : 3,
            img : image3,
            title:"70% off on all Products Sale",
            description:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ]
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
      };
  return (
    <div className=' relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center 
                     items-center text-black duration-200 '>
        <div className=' bg-[#f8d6a4] h-[700px] w-[700px]  absolute -top-1/2  right-0 rounded-3xl rotate-45 '>
        </div>
         
         <div className="container px-12 pb-8 sm:pb-0 z-10">
         <Slider {...settings}>
            {list.map((data)=>(
                // eslint-disable-next-line react/jsx-key
                <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2" >

                    <div className="flex flex-col justify-center
                    gap-4 pt-12 sm:pt-0 text-center sm:text-left
                    order-2 sm:order-1 relative z-10">
                        <h1 className="text-5xl sm:text-6xl
                        lg:text-7xl font-bold">
                           {data.title}
                        </h1>
                        <p className="text-sm">
                        {data.description}
                        </p>
                        <div>
                            <button className="bg-gradient-to-r from-[#fba523]
                            to-[#f08f06] hover:scale-105 duration-200 
                            text-white py-2 px-4 rounded-full"
                            >Order Now</button>
                        </div>
                    </div>
                    {/*  */}
                    <div className="order-1 sm:order-2">
                        <div className=" relative z-10">
                            <img 
                            src={data.img}
                            alt=""
                            className="w-[300px] h-[300px]
                            sm:h-[450px] sm:w-[450px] sm:scale-105
                            lg:scale-125 object-contain mx-auto"
                            />
                            
                        </div>
                    </div>

                </div>
            </div>     
            ))}
           
            </Slider>
         </div>
    </div>
  )
}

export default Home