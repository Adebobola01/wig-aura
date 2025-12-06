const ShopCard = ({
  imgUrl,
  price,
  name,
}: {
  imgUrl: string;
  price: number;
  name: string;
}) => {
  return (
    <div className="flex flex-col bg-[#2a2516] rounded-xl overflow-hidden group border border-transparent hover:border-primary/50 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
          data-alt={`${name} image`}
          src={imgUrl}
        />
        <div className="absolute inset-0 bg-black/20 hidden group-hover-block transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)]">
          <button className="hidden group-hover-block w-full cursor-pointer items-center justify-center rounded-lg h-11 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em]">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-white text-lg font-bold leading-tight">{name}</h3>
        <p className="text-primary text-base font-semibold mt-1">${price}</p>
      </div>
    </div>
  );
};

export default ShopCard;
