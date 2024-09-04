import image from "../assets/women/women2.jpg";
import { IoLockClosed } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { TbTrain } from "react-icons/tb";

const Sales = () => {
  return (
    <div className=" container mt-16">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <div>
          <img
            src={image}
            alt=""
            className="max-w-[400px] h-[350px] w-full mx-auto 
            drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold">Winter Sale upto 50% Off</h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
            <p className="flex items-center gap-4"><IoLockClosed className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-[#ede8ff] "/> <span>Quality Products</span></p>
            <p className="flex items-center gap-4"><IoFastFood  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-[#feecd5] "/> <span>Fast Delivery</span></p>
            <p className="flex items-center gap-4"><TbTrain className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-[#dcfde6] " /> <span>Easy Payment method</span></p>
            <p className="flex items-center gap-4"><TbTrain  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-[#fff9c2] "/> <span>Get Offers</span></p>

        </div>
      </div>
    </div>
  );
};

export default Sales;
