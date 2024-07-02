/* eslint-disable react/prop-types */
const Card = ({ item }) => {
  return (
    <div className="mx-auto">
      <div className="card md:w-[20rem] w-[18rem] shadow-xl my-10 hover:scale-105 duration-200">
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl line-clamp-1 mb-2 font-medium">
            {item.name}
            <div className="badge badge-secondary line-clamp-1 flex items-center">
              {item.category}
            </div>
          </h2>
          <p className="line-clamp-1">{item.title}</p>
          <div className="card-actions justify-between mt-2">
            <div className="badge badge-outline p-3 text-lg">
              $ {item.price}
            </div>
            <div className="badge badge-outline cursor-pointer hover:bg-pink-500    p-3 hover:text-white duration-300 text-lg">
              buy now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
