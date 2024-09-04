import logo from "../../src/assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";



function Nav() {
  return (
    <div className=" bg-[#fedca9]  py-2 sm:px-[5rem] px-10  flex justify-between">
      <a className="flex items-center gap-1">
        <img src={logo} alt="Logo" className=" w-10" />
        <span className=" font-bold text-2xl sm:text-3xl">Shopsy</span>
      </a>
      <div className="flex items-center gap-3">
      <div className=" relative">
      <input
          className="hidden sm:block w-[200px] sm:w-[200px] transition-all duration-300 rounded-full
             focus:w-[300px]
            border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-[#f7941f] "
          type="search"
          placeholder="search"
        />          
        <IoMdSearch className="hidden sm:block text-gray-500 group-hover:text-[#f7941f] absolute top-1/2 -translate-y-1/2 right-3"/>
      </div>
        <button className="bg-[#f7941f] transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group">
          <span className="group-hover:block hidden transition-all duration-200">
            Order
          </span>
          <FaCartShopping  className="text-xl text-white drop-shadow-sm cursor-pointer"/>
        </button>
      </div>
    </div>
  );
}

export default Nav;
