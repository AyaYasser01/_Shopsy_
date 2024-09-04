import image1 from "../assets/shirt/shirt.png"
import image2 from "../assets/shirt/shirt2.png"
import image3 from "../assets/shirt/shirt3.png"
import { FaStar } from "react-icons/fa";
const Bestproducts = () => {

    
const Data = [
    {
      id: 1,
      img: image1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: image2,
      title: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: image3,
      title: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
    return (
      <div>
        <div className="container">
          <div className="text-left mb-24 ml-10">
            <p  className="text-sm text-[#fea829]">
              Top Rated Products for you
            </p>
            <h1  className="text-3xl font-bold">
              Best Products
            </h1>
            <p  className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center  ">
            {Data.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div
                className="rounded-2xl bg-white relative shadow-xl  group max-w-[300px] hover:scale-105 duration-200 "
               key={data.id}>
                <div className="h-[100px]">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500   duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <div className="flex justify-center">
                    <button className="text-center mt-10 cursor-pointer bg-[#ffa828] text-white py-1 px-5 rounded-full hover:scale-105 duration-200 ">
                        Order Now
                        </button></div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
export default Bestproducts