export function ChatButton() {
  return (
    <div className="fixed h-[65px] right-4 bottom-4 z-[2147483647]">
      <div className="leading-[normal]" style={{"fontFamily":"-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""}}>
        <button className="items-center flex font-semibold justify-center max-w-fit text-center h-[60px] ml-[6px] mr-[6px] bg-black shadow-[rgba(0,0,0,0.15)_0px_0px_5px_0px] text-white text-[24px] leading-[32px] pt-0 pr-3 pb-0 pl-[3px] rounded-2xl" style={{"appearance":"button"}}>
          <div className="fill-none overflow-hidden text-center h-12 shrink-[0]">
            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fec5694bb7fb778d4057f975b6d70ff6493a1d9d6.svg?generation=1777105278058127&alt=media" className="block size-full" />
          </div>
          <span className="items-center flex ml-auto mr-auto overflow-hidden text-center whitespace-nowrap h-[30px] max-h-10">
            Chat
          </span>
          <span className="block font-bold absolute text-center w-[22px] h-[22px] top-[-7px] right-0 bg-[rgb(238,_47,_83)] text-[12px] leading-[22px] rounded-[1.875rem]">
            1
          </span>
        </button>
      </div>
    </div>
  );
}
