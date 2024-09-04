import banner from "../assets/website/orange-pattern.jpg"

const Newproducts = () => {
    const bannerimg = {
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        height:"100%",
        width:"100%",
    }
  return (
    <div className=" text-center  p-10 mt-8" style={bannerimg}>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Get Notified About New Products</h1>
        <input type="email" name="" id="" placeholder="Enter Your email"
             className=" w-full p-3 mt-5"/>
    </div>
  )
}

export default Newproducts