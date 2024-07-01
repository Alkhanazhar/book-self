import { MoveLeft } from "lucide-react";
import { books } from "../../public/books";
import Card from "./Card";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container px-4 md:px-10 my-28">
      <div className="space-y-4">
        <h1 className="lg:text-6xl text-4xl text-center ">
          We are Delighted to have you{" "}
          <span className="text-pink-500">here</span>
        </h1>
        <p className="w-7/12 mx-auto text-center text-base">
          Dive into our vast collection of free books and bestsellers. From
          timeless classics to contemporary hits, {"there's "}something for
          every reader. Enjoy seamless browsing, instant downloads, and discover
          your next great read with us. Happy reading!
        </p>
        <div className="text-center">
          <Link to={"/"}>
            <button className="btn bg-pink-500 text-lg text-white hover:bg-pink-600">
              <MoveLeft /> Back
            </button>
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
        {books.map((book) => {
          return <Card key={book._id} item={book} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
