import Slider from "react-slick";
const Testimonials = () => {
    const cards =[
        {
            id: 1,
            name: "Victor",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/101/101",
          },
          {
            id: 2,
            name: "Satya Nadella",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/102/102",
          },
          {
            id: 3,
            name: "Virat Kohli",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/104/104",
          },
          {
            id: 5,
            name: "Sachin Tendulkar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/103/103",
          },
        ];


    const  settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      return (
        <div className="py-10 mb-10">
          <div className="container">
          <div className=" text-center">
          <p className=" text-[#ffb241] text-[12px] ">
          What our customers are saying
          </p>
          <p className="text-3xl sm:text-4xl  font-bold">Testimonials</p>
          <p className="text-[10px] text-[#9ca2ae]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Sit asperiores modi Sit asperiores modi
          </p>
        </div>
    

            <div>
              <Slider {...settings}>
                {cards.map((data) => (
                  // eslint-disable-next-line react/jsx-key
                  <div className="my-6" key={data.id}>
                    <div
                      key={data.id}
                      className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-[#fff6e9] relative"
                    >
                      <div className="mb-4">
                        <img
                          src={data.img}
                          alt=""
                          className="rounded-full w-20 h-20"
                        />
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="space-y-3">
                          <p className="text-xs text-gray-500">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 ">
                            {data.name}
                          </h1>
                        </div>
                      </div>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      );
}

export default Testimonials