export function HeroBanner() {
  return (
    <div className="flex overflow-hidden h-[159.8px]">
      <div className="overflow-hidden relative w-full p-[66.5px]">
        <a href="/products/yuki-ichigo" className="overflow-hidden group">
          <div className="items-end flex h-full justify-start pointer-events-none relative text-left z-[99]">
            <div className="pointer-events-none text-left max-w-[50%]">
              <h3 className="font-medium pointer-events-none text-left text-[22.9167px] leading-[29.7917px]">
                <span className="bg-no-repeat pointer-events-none text-left bg-[position:0%_28.9167px] bg-size-[0%_2px] pt-0 pr-0 pb-[3px] pl-0" style={{"backgroundImage":"linear-gradient(to right, rgb(25, 25, 25), rgb(25, 25, 25))"}}>
                </span>
              </h3>
            </div>
          </div>
          <div className="size-full absolute left-0 top-0 z-[0] before:size-full before:absolute before:left-0 before:top-0 before:content-[&quot;&quot;] before:z-[9] before:opacity-[0.36]">
            <figure className="bg-center bg-no-repeat bg-cover size-full overflow-hidden absolute left-0 top-0 bg-[rgba(25,_25,_25,_0.03)]/3 z-[0]">
              <img
                src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc1c0a3d7eaaf0edf0b6090ac1bd75cd66f03bc42.png%3Fv=1772515919&amp;width=1860?generation=1777105277120012&amp;alt=media"
                className="block size-full max-w-full object-cover overflow-clip absolute align-bottom left-0 top-0 aspect-[auto_3840_/_2100] transition-transform duration-500 group-hover:scale-110"
              />
            </figure>
          </div>
        </a>
      </div>
    </div>
  );
}
