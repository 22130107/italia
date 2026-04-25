export function QuantitySelector() {
  return (
    <div className="grow relative h-[55px] ml-[10px] mr-[10px] mb-[20px] border-[rgba(25,_25,_25,_0.14)]/14 border-[0.8px] min-w-[85px]">
      <button className="pointer-events-none absolute text-center w-3 h-3 left-3 top-[21px] bg-black/0 text-black text-[13.3333px] leading-[normal] z-[9] opacity-[0.16]" style={{"fontFamily":"Arial"}}>
        <div className="fill-none overflow-hidden pointer-events-none absolute text-center w-6 h-6 left-[-6px] top-[-6px]">
          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0731744e484ad0bdf93e40dc3bd9036115914591.svg?generation=1777116974027200&alt=media" className="block size-full" />
        </div>
      </button>
      <input
        type="number"
        value="1"
        className="block overflow-clip absolute text-center align-middle w-full h-[55px] top-0 bg-black/0 leading-[55px] pt-0 pr-[26px] pb-0 pl-[26px]"
      />
      <button className="absolute text-center w-3 h-3 top-[21px] right-3 bg-black/0 text-black text-[13.3333px] leading-[normal] z-[9] opacity-[0.36]" style={{"fontFamily":"Arial"}}>
        <div className="fill-none overflow-hidden absolute text-center w-6 h-6 left-[-6px] top-[-6px]">
          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F1f97588ce86218f6f2f093c9f77cd4af68501a4f.svg?generation=1777116974230094&alt=media" className="block size-full" />
        </div>
      </button>
    </div>
  );
}
