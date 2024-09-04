import { IoMdArrowDropdown } from "react-icons/io";


const Navbottem = () => {
  const list = ["Home", "Top Rated", "Kids Wear", "Mens Wear", "Electronics"];
  const oneList = ["Trending Products", "Best Selling", "Top Rated"];
  return (
    <div className="flex justify-center">
      <ul className="sm:flex hidden gap-6 cursor-pointer item-center items-center shadow-lg  ">
        {list.map((e, i) => (
          <li key={i}>
            <a  className="inline-block px-4 hover:text-[#F7941F]">{e}</a>
          </li>
        ))}
        <li className=" group relative cursor-pointer">
          <a href="" className="flex items-center ">
            Trending Products
            <span className="">
            <IoMdArrowDropdown 
                className=" transition-all
                durartion-200 group-hover:rotate-180"
              />
            </span>
          </a>
          <div className=" absolute z-[999999] hidden
          group-hover:block w-[200px] rounded-sm bg-white
          p-3">
            <ul>
              {oneList.map((e, i) => (
                <li key={i} className="p-2 hover:bg-[#f8ddb5a8]  rounded">
                  <a>{e}</a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbottem;
