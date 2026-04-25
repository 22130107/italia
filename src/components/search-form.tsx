export function SearchForm() {
  return (
    <div className="mt-auto pt-10 pr-[42.4625px] pb-[80px] pl-[42.4625px]">
      <form 
        role="search" 
        className="relative w-full bg-[rgb(242,_242,_242)]"
      >
        <input 
          type="search" 
          aria-label="Search..." 
          placeholder="Search..." 
          className="inline-block overflow-clip align-middle w-full h-[55px] bg-transparent border-[rgb(25,_25,_25)] text-[16px] leading-[16px] pt-[3px] pr-7 pb-0 pl-0 opacity-[0.66] border-b-[0.8px] outline-none"
          style={{ textDecoration: "none" }}
        />
        <button 
          aria-label="Submit" 
          className="absolute text-center w-[21px] h-[21px] top-[18px] right-0 bg-transparent text-black opacity-[0.66]"
        >
          <img 
            src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fee1dbadcf180e31f2fc0218f75876c311b270d56.svg?generation=1777104934761683&alt=media" 
            className="size-full"
            alt="Search"
          />
        </button>
      </form>
    </div>
  );
}
