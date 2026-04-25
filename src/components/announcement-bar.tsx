export function AnnouncementBar() {
  return (
    <div className="inline">
      <a
        href="/shipping-policy"
        className="items-center flex justify-center w-full h-10 bg-white text-black pt-0 pr-10 pb-0 pl-[10px]"
      >
        <span className="block truncate text-center text-[13px] leading-[15.6px]">
          Next Day Delivery (SYD/MEL/BNE) · Store Pickup (SYD/MEL)
        </span>
      </a>
    </div>
  );
}
