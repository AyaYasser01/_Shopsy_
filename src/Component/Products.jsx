import image1 from "../assets/women/women.png";
import image2 from "../assets/women/women2.jpg";
import image3 from "../assets/women/women3.jpg";
import image4 from "../assets/women/women4.jpg";

import { FaStar } from "react-icons/fa";

const Products = () => {
  const data = [
    {
      id: 1,
      image: image1,
      h1: "Women Ethnic",
      color: "white",
      num: 5,
    },
    {
      id: 2,
      image: image2,
      h1: "Women western",
      color: "Red",
      num: 4.5,
    },
    {
      id: 3,
      image: image3,
      h1: "Goggles",
      color: "brown",
      num: 4.7,
    },
    {
      id: 4,
      image: image4,
      h1: "Printed T-Shirt",
      color: "Yellow",
      num: 4.4,
    },
    {
      id: 5,
      image: image2,
      h1: "Fashin T-Shirt",
      color: "Pink",
      num: 4.5,
    },
  ];
  return (
    <div className="mt-14 mb-12">
      <div className=" container ">
        <div className=" text-center">
          <p className=" text-[#ffb241] text-[12px] ">
            Top Selling Products for you
          </p>
          <p className="text-3xl sm:text-4xl  font-bold">Products</p>
          <p className="text-[10px] text-[#9ca2ae]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div className=" mt-10 gap-5 place-items-center grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
          {data.map((op) => (
            // eslint-disable-next-line react/jsx-key
            <div className="" key={op.id}>
              <img
                src={op.image}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <h1 className="font-bold pt-3">{op.h1}</h1>
              <p className="text-[14px] text-[#9ca2ae]">{op.color}</p>
              <p className="flex  items-center ">
                <FaStar className="text-yellow-300 " />{" "}
                <span className=" align-middle">{op.num}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center"><button className="text-center mt-10 cursor-pointer bg-[#ffa828] text-white py-1 px-5 rounded-md">View All Button</button></div>
      </div>
    </div>
  );
};

export default Products;
