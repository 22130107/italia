interface ProductImage {
  url: string;
  alt: string;
}

interface ProductImageGalleryProps {
  images: ProductImage[];
}

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
  return (
    <section className="flex flex-col w-full lg:grow lg:w-0 lg:basis-[0%] order-1 lg:order-2">
      <div className="w-full overflow-hidden">
        <div className="flex lg:block overflow-x-auto lg:overflow-y-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth touch-pan-x">
          {images.map((image, index) => (
            <div key={index} className="flex-none w-full min-w-full snap-center overflow-hidden relative">
              <figure className="relative bg-[rgba(25,_25,_25,_0.03)]/3 aspect-square lg:aspect-auto lg:pt-[912.5px]">
                <img
                  alt={image.alt}
                  src={image.url}
                  className="block size-full max-w-full object-cover overflow-clip absolute align-bottom left-0 top-0 pointer-events-none"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute lg:fixed w-auto lg:w-[21px] left-1/2 lg:left-auto lg:right-[25px] bottom-6 lg:bottom-[319.6px] -translate-x-1/2 lg:translate-x-0 lg:translate-y-1/2 bg-[rgba(25,_25,_25,_0.1)]/10 p-2 lg:pt-1 lg:pr-[6px] lg:pb-[10px] lg:pl-[6px] z-[9] rounded-full lg:rounded-[1.3125rem]">
        <div className="flex lg:flex-col gap-2 lg:gap-0">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-[8px] h-[8px] lg:w-[9px] lg:h-[9px] lg:mt-[6px] text-black rounded-full ${index === 0 ? 'bg-[rgb(25,_25,_25)]' : 'bg-white'}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
