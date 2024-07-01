import { books } from "../../public/books";

import Slider from "react-slick";
import Card from "./Card";

const FreeBook = () => {
  const free = books.filter((item) => {
    return item.category == "Free";
  });
  {
    free;
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-2xl container md:px-10 px-4 mx-auto my-10 space-y-3 ">
      <h1 className="text-2xl md:text-3xl font-bold">Free offered books</h1>
      <p className="font-light">
        We are excited to offer a collection of classic and popular books
        available for free download, includ ing timeless masterpieces like{" "}
        {"Pride and Prejudice,"}and {"Jane Eyre"}.
      </p>

      <Slider {...settings}>
        {free.map((item) => {
          return (
            <div key={item._id} className="md:mx-12 mx-20">
              <Card item={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FreeBook;
