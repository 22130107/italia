export function NewsletterForm() {
  return (
    <div className="w-[45%] mb-[100px]">
      <h4 className="font-medium uppercase mb-[50px] text-[13.75px] leading-[17.875px]">
        be the first to know
      </h4>
      <div className="w-full mt-[-10px] text-[13px] leading-[13px]">
        <form>
          <div className="relative">
            <input 
              type="email" 
              aria-label="Enter your email" 
              placeholder="Enter your email" 
              className="inline-block overflow-clip align-middle w-full h-[45px] bg-black/0 border-[rgba(25,_25,_25,_0.36)]/36 border-[0.8px] pt-0 pr-5 pb-0 pl-5"
              style={{ textDecoration: "none" }}
            />
            <button 
              aria-label="Submit" 
              className="items-center flex h-full absolute text-center top-0 right-5 bg-black/0 text-black text-[13.3333px] leading-[normal]"
              style={{ fontFamily: "Arial" }}
            >
              <span className="block text-center h-[21px]">
                <span className="block overflow-hidden relative text-center w-6 h-[34px] top-[-5px] right-0">
                  <div className="fill-none overflow-hidden absolute text-center w-[34px] h-[11px] top-[10px] right-0">
                    <img 
                      src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ff86dac2eb18382d793122f23ce50ce45ca3705d9.svg?generation=1777104935082467&alt=media" 
                      className="block size-full"
                      alt="Submit"
                    />
                  </div>
                </span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
