/* eslint-disable react/prop-types */
const Shimmer = () => {
  return (
    <div className="mx-auto">
      <div className="card md:w-[20rem] w-[18rem] h-[28rem] shadow-xl my-10 hover:scale-105 duration-200 overflow-hidden">
        {/* <figure className="h-[30rem"> */}
        <div className="w-full h-[20rem] bg-slate-300 animate-pulse"></div>
        {/* </figure> */}
        <div className="card-body ">
          <h2 className="card-title text-2xl line-clamp-1 w-64 flex justify-end rounded-full bg-slate-700  animate-pulse">
            <div className="badge badge-secondary line-clamp-1 w-16 h-8  animate-pulse "></div>
          </h2>
          <p className="line-clamp-1 w-full h-8 animate-pulse"></p>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
