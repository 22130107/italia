import { useNavigate } from 'react-router';

export function AddToCartButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate('/cart')}
      className="font-semibold overflow-hidden relative text-center h-[55px] ml-[10px] mr-[10px] mb-[20px] bg-[rgb(25,_25,_25)] text-black leading-[53px] pt-0 pr-[25px] pb-0 pl-[25px] grow-[10] after:absolute after:text-center after:w-full after:h-0 after:left-0 after:bottom-0 after:bg-[rgb(221,_29,_29)] after:content-[&quot;&quot;] after:z-[0]"
    >
      <span className="block relative text-center w-full left-0 top-0 text-white z-[9]">Add to cart</span>
      <span className="block absolute text-center w-full left-0 top-0 translate-y-[100%] z-[9]">
        <div className="inline fill-none overflow-hidden relative text-center w-6 top-[9px]">
          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fad2c103edd2da53d10e3c30677f66903ca379e5d.svg?generation=1777116974283769&alt=media" className="inline w-6" />
        </div>
      </span>
    </button>
  );
}
