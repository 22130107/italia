export function CompleteSidebar() {
  return (
    <div className="h-full fixed w-[20%] left-0 top-0 max-w-[360px] min-w-60 z-[999]">
      <div className="flex flex-col size-full overflow-x-hidden overflow-y-scroll relative bg-[rgb(242,_242,_242)] z-[99999] border-r-[0.8px]" style={{"borderRightColor":"rgba(25, 25, 25, 0.08)"}}>
        <div className="grow pt-20 pr-0 pb-0 pl-0 z-[9] shrink-[0]">
          <header className="lg:mt-[10px] lg:mb-[60px] lg:px-[42.4625px]">
            <div>
              <a href="/" className="flex items-center h-full">
                <span className="text-[20px] lg:text-[24px] font-bold tracking-tighter text-black uppercase whitespace-nowrap">
                  AquaTALK
                </span>
              </a>
            </div>
          </header>

          <div>
            <a href="/cart" className="block absolute w-9 h-9 top-[30px] right-[30px] p-[5px]">
              <span className="flex h-7">
                <div className="fill-none overflow-hidden w-6">
                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F607d6b998d391b463cb114f1fbb340654cd72122.svg?generation=1777105277113830&alt=media" className="block size-full" />
                </div>
              </span>
              <span className="block font-semibold absolute text-center w-6 h-6 left-[5px] top-[17px] text-[11.5px] leading-[11.5px]">0</span>
            </a>
          </div>

          <div className="mb-[60px]">
            <nav>
              <ul className="font-medium text-[19.0588px] leading-[19.0588px]">
                <li className="list-none">
                  <a href="/" className="items-center flex justify-between pt-2 pr-[42.4625px] pb-2 pl-[42.4625px]">
                    <span className="block grow basis-[0%]">
                      <span className="bg-no-repeat bg-[position:0%_23.0588px] bg-size-[0px_1px] leading-[22.8706px] pt-0 pr-0 pb-[3px] pl-0" style={{"backgroundImage":"linear-gradient(to right, rgb(221, 29, 29), rgb(221, 29, 29))"}}>Home</span>
                    </span>
                    <span className="block h-6"></span>
                  </a>
                </li>
                <li className="list-none">
                  <a href="/collections" className="items-center flex justify-between text-[rgb(221,_29,_29)] pt-2 pr-[42.4625px] pb-2 pl-[42.4625px]">
                    <span className="block grow basis-[0%]">
                      <span className="bg-no-repeat bg-[position:0%_23.0588px] bg-size-[100%_1px] leading-[22.8706px] pt-0 pr-0 pb-[3px] pl-0" style={{"backgroundImage":"linear-gradient(to right, rgb(221, 29, 29), rgb(221, 29, 29))"}}>Order Online</span>
                    </span>
                    <span className="block h-6"></span>
                  </a>
                </li>
                <li className="list-none">
                  <a href="/locations" className="items-center flex justify-between pt-2 pr-[42.4625px] pb-2 pl-[42.4625px]">
                    <span className="block grow basis-[0%]">
                      <span className="bg-no-repeat bg-[position:0%_23.0588px] bg-size-[0px_1px] leading-[22.8706px] pt-0 pr-0 pb-[3px] pl-0" style={{"backgroundImage":"linear-gradient(to right, rgb(221, 29, 29), rgb(221, 29, 29))"}}>Location</span>
                    </span>
                    <span className="block h-6"></span>
                  </a>
                </li>
              </ul>
            </nav>

            <nav>
              <ul className="mt-[40px] text-[14px] leading-[14px]">
                <li className="list-none">
                  <a href="/shipping-policy" className="items-center flex justify-between pt-1 pr-[42.4625px] pb-1 pl-[42.4625px]">
                    <span className="block grow basis-[0%]">
                      <span className="bg-no-repeat bg-[position:0%_18px] bg-size-[0%_1px] leading-[16.8px] pt-0 pr-0 pb-[3px] pl-0" style={{"backgroundImage":"linear-gradient(to right, rgb(221, 29, 29), rgb(221, 29, 29))"}}>Delivery Policy</span>
                    </span>
                    <span className="block h-6"></span>
                  </a>
                </li>
                <li className="list-none">
                  <a href="/refund-policy" className="items-center flex justify-between pt-1 pr-[42.4625px] pb-1 pl-[42.4625px]">
                    <span className="block grow basis-[0%]">
                      <span className="bg-no-repeat bg-[position:0%_18px] bg-size-[0%_1px] leading-[16.8px] pt-0 pr-0 pb-[3px] pl-0" style={{"backgroundImage":"linear-gradient(to right, rgb(221, 29, 29), rgb(221, 29, 29))"}}>Return &amp; Refund</span>
                    </span>
                    <span className="block h-6"></span>
                  </a>
                </li>
                <li className="list-none">
                  <a href="/privacy-policy" className="items-center flex justify-between pt-1 pr-[42.4625px] pb-1 pl-[42.4625px]">
                    <span className="block grow basis-[0%]">
                      <span className="bg-no-repeat bg-[position:0%_18px] bg-size-[0%_1px] leading-[16.8px] pt-0 pr-0 pb-[3px] pl-0" style={{"backgroundImage":"linear-gradient(to right, rgb(221, 29, 29), rgb(221, 29, 29))"}}>Privacy Policy</span>
                    </span>
                    <span className="block h-6"></span>
                  </a>
                </li>
              </ul>

              <ul className="mt-[40px] text-[14px] leading-[14px]">
                <li className="list-none">
                  <a href="/login" className="items-center flex justify-between pt-0 pr-[42.4625px] pb-0 pl-[42.4625px]">
                    <span className="bg-no-repeat block bg-[position:0%_18px] bg-size-[0%_1px] leading-[16.8px] pt-0 pr-0 pb-[3px] pl-0" style={{"backgroundImage":"linear-gradient(to right, rgb(221, 29, 29), rgb(221, 29, 29))"}}>Login</span>
                  </a>
                </li>
              </ul>
              <div></div>
            </nav>
          </div>

          <div className="pointer-events-none fixed w-full h-[695px] left-0 top-0 z-[99]">
            <div className="inline pointer-events-none">
              <form role="search" className="fixed w-[72%] bottom-10 ml-[14%] bg-[rgb(242,_242,_242)] z-[99]" style={{"pointerEvents":"all"}}>
                <div className="pointer-events-none absolute w-full h-[60px] left-0 bottom-[50px] content-[&quot;&quot;] z-[0]" style={{"backgroundImage":"linear-gradient(360deg, rgb(242, 242, 242), rgba(242, 242, 242, 0))"}}></div>
                <input type="search" aria-label="Search..." placeholder="Search..." className="inline-block overflow-clip align-middle w-full h-[55px] bg-black/0 border-[rgb(25,_25,_25)] text-[16px] leading-[16px] pt-[3px] pr-7 pb-0 pl-0 opacity-[0.66] border-b-[0.8px]" style={{"pointerEvents":"all","textDecoration":"none"}} />
                <button aria-label="Submit" className="absolute text-center w-[21px] h-[21px] top-[18px] right-0 bg-black/0 text-black text-[13.3333px] leading-[normal] opacity-[0.66]" style={{"fontFamily":"Arial","pointerEvents":"all"}}>
                  <span className="text-center" style={{"pointerEvents":"all"}}>
                    <div className="inline size-full overflow-hidden text-center" style={{"pointerEvents":"all"}}>
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F27048e4a2b04b74262e22d596b5aeff516ee9f8a.svg?generation=1777105277130125&alt=media" className="inline size-full" />
                    </div>
                  </span>
                </button>
                <div className="absolute w-full h-10 left-0 bottom-[-40px] bg-[rgb(242,_242,_242)] content-[&quot;&quot;]" style={{"pointerEvents":"all"}}></div>
              </form>
              <div className="flex flex-col-reverse justify-end min-h-full pointer-events-none fixed w-[400px] top-0 pt-[45px] pr-0 pb-0 pl-0 z-[98]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
