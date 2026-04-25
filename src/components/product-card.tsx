interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  url: string;
}

export function ProductCard({ name, price, image, hoverImage, url }: ProductCardProps) {
  return (
    <div className="relative p-[21px] group cursor-pointer">
      <a href={url} className="block relative overflow-hidden">
        <div className="relative overflow-hidden bg-[rgba(25,_25,_25,_0.03)]/3 pt-[120%]">
          <figure className="absolute inset-0 z-0 overflow-hidden">
            <img
              alt={name}
              src={image}
              className="block size-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
          </figure>
          <div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            <figure className="size-full overflow-hidden">
              {hoverImage.endsWith('.mp4') ? (
                <video
                  src={hoverImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="block size-full object-cover"
                />
              ) : (
                <img
                  alt={name}
                  src={hoverImage}
                  className="block size-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              )}
            </figure>
          </div>
        </div>
        <div className="relative pt-[18px]">
          <h3 className="font-semibold text-[16px] transition-colors duration-300 group-hover:text-[rgb(221,_29,_29)]">
            <span className="relative inline-block pb-1">
              {name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[rgb(221,_29,_29)] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h3>
          <div className="mt-1">
            <span className="text-[15px] opacity-80">{price}</span>
          </div>
        </div>
      </a>
    </div>
  );
}
