export function StorePickupInfo() {
  return (
    <div className="inline">
      <div className="mb-[38px]">
        <div className="flex text-left mt-[38px]">
          <div role="presentation" className="overflow-hidden text-left w-3 h-3 mt-[2px] mr-[4px]">
            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F7bdf6fab4d0ca88dfcc20a64e8c41b9c61380286.svg?generation=1777116974153973&alt=media" className="block size-full" />
          </div>
          <div className="text-left ml-[5px]">
            <p className="text-left leading-[19.5px]">
              Pickup available at <strong className="font-bold text-left">Melbourne 238 Swanston Street Store</strong>
            </p>
            <p className="text-left mt-[12px] text-[13px] leading-[13px]">Usually ready in 1 hour</p>
            <p className="text-left mt-[18px] text-[13px] leading-[13px]">
              <button aria-haspopup="dialog" className="inline-block text-center bg-black/0 border-[rgb(25,_25,_25)] text-[13.3333px] leading-[normal] border-b-[0.8px]" style={{"textDecoration":"none"}}>
                Check availability at other stores
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
