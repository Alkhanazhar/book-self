import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import shimmerData from "../../public/books.json";
import { useBooks } from "../hooks/usebooks";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Courses = () => {
  const { books, loading } = useBooks();

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
      {loading ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
          {shimmerData.map((book) => {
            return <Shimmer key={book?.name} item={book} />;
          })}
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
          {books?.data?.length > 0 &&
            books?.data?.map((book) => {
              return <Card key={book?.name} item={book} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Courses;
