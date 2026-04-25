import { Link } from 'react-router';

export function CartButton() {
  return (
    <div>
      <Link
        to="/cart"
        className="block lg:absolute relative w-9 h-9 lg:top-[30px] lg:right-[30px] mt-[40px] lg:mt-[40px] p-[5px] group"
      >
        <span className="flex h-7">
          <div className="fill-none overflow-hidden w-6">
            <img 
              src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F9efe59293ec508bf2e45bc3bf1e8bbb2f0607c47.svg?generation=1777104934762107&alt=media" 
              className="block size-full"
              alt="Cart"
            />
          </div>
        </span>
        <span className="block font-semibold absolute text-center w-6 h-6 left-[5px] top-[17px] text-[11.5px] leading-[11.5px] transition-colors duration-200 group-hover:text-[rgb(221,_29,_29)]">
          0
        </span>
      </Link>
    </div>
  );
}
