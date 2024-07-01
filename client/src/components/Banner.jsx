import image from "../assets/book.png";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container md:px-10 px-4 mx-auto flex-col-reverse md:flex-row flex md:my-10">
      <div className="flex-1 md:my-32">
        <div className="space-y-5">
          <h1 className="lg:text-6xl order-2 md:order-1 text-4xl ">
            Welcome to our bookstore. Here, you will learn new things.
            <span className="text-pink-500"> every day</span>
          </h1>
          <p className="font-semibold ">
            Here, you will embark on a journey of discovery, gaining knowledge
            and insights through a vast collection of books that inspire and
            educate Here, you will discover a world of knowledge and new
            insights.
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <button className="btn btn-secondary">Secondary</button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center order-1">
        <img src={image} alt="" className="" />
      </div>
    </div>
  );
};

export default Banner;
