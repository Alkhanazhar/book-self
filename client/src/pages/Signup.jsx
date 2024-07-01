import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Header />
      <div className="h-screen flex items-center justify-center">
        <div className="modal-box">
          <div className="modal-action">
            <form
              method="dialog"
              className="w-full space-y-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="text-center text-2xl">Sign up</h2>

              <div className="flex justify-end "></div>

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="block text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="block text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="block text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <button
                className="btn w-full bg-pink-500 text-slate-50 hover:bg-pink-600 transition-all"
                type="submit"
              >
                Sign up
              </button>
              <p>
                have an account{" "}
                <span className="text-pink-500 font-bold">
                  <Link to={"/login"}>login</Link>
                </span>
              </p>
              {/* if there is a button in form, it will close the modal */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
