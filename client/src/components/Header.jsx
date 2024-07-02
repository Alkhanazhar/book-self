import { Menu } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Header = () => {
  const [user] = useContext(Auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("Users", null);

    navigate("/login");
    toast.success("User logged out");
    window.location.reload();
  };
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/courses"}>Course</Link>
      </li>{" "}
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>{" "}
      <li>
        <Link to={"/about"}>About</Link>
      </li>
    </>
  );
  return (
    <div
      className={
        sticky
          ? "shadow-lg sticky top-0 bg-slate-950 transition-all duration-300 ease-in-out flex items-center justify-center z-10"
          : ""
      }
    >
      <div
        className={`navbar  
      max-w-screen-2xl mx-auto container md:px-10 px-4 `}
      >
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-slate-950"
            >
              {navItems}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            bookstore
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium flex items-center">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end space-x-3 items-center">
          <div className=" hidden md:flex">
            <label className="input input-bordered flex items-center gap-2 outline-none  ">
              <input
                type="text"
                className="grow outline-none w-32"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          {user ? (
            <button
              className="btn bg-pink-500 hover:bg-pink-600 duration-150 text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button type="button" className="dark-btn">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
