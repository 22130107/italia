import { Link } from 'react-router';

export function CartPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 md:py-12 flex-1">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8 font-['Jost',sans-serif]">
        <Link to="/" className="hover:text-black">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-black">Cart</span>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-black font-['Jost',sans-serif]">Shopping Cart</h1>
      
      <p className="text-sm text-gray-600 mb-8 font-['Jost',sans-serif]">2 products in your cart</p>

      {/* Cart Items */}
      <div className="flex flex-col gap-8 mb-12 font-['Jost',sans-serif]">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-8 gap-4">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gray-100 shrink-0">
              <img src="/1.jpg" alt="Jersey Milk Roll" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">Jersey Milk Roll</h3>
              <p className="text-gray-600 mt-1">$22.99</p>
            </div>
          </div>
          <div className="flex items-center gap-6 self-start md:self-auto">
            <div className="border border-gray-300 flex items-center h-10 w-20 md:w-24">
              <input type="number" defaultValue="1" min="1" className="w-full text-center outline-none bg-transparent" />
            </div>
            <button className="text-gray-400 hover:text-black text-2xl transition-colors">
              &times;
            </button>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-8 gap-4">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gray-100 shrink-0">
              <img src="/2.jpg" alt="Cheese Cookies" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">Cheese Cookies</h3>
              <p className="text-gray-600 mt-1">$15.99</p>
            </div>
          </div>
          <div className="flex items-center gap-6 self-start md:self-auto">
            <div className="border border-gray-300 flex items-center h-10 w-20 md:w-24">
              <input type="number" defaultValue="1" min="1" className="w-full text-center outline-none bg-transparent" />
            </div>
            <button className="text-gray-400 hover:text-black text-2xl transition-colors">
              &times;
            </button>
          </div>
        </div>
      </div>

      {/* Delivery Section */}
      <div className="flex flex-col items-center mb-12 font-['Jost',sans-serif]">
        <h3 className="text-sm font-semibold mb-4 text-black">Local Delivery</h3>
        <div className="flex border border-gray-300 overflow-hidden w-full max-w-md">
          <button className="flex-1 flex flex-col items-center justify-center py-6 border-r border-gray-300 hover:bg-gray-50 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            <span className="text-xs">Local Express Delivery</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center py-6 hover:bg-gray-50 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="text-xs">Pick up</span>
          </button>
        </div>
      </div>

      {/* Special Instructions */}
      <div className="mb-12 font-['Jost',sans-serif]">
        <textarea 
          placeholder="Special instructions for the seller" 
          className="w-full border border-gray-300 p-4 h-32 outline-none focus:border-black resize-none text-sm placeholder:text-gray-500"
        ></textarea>
      </div>

      {/* Total & Checkout */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-gray-100 pt-8 font-['Jost',sans-serif]">
        <div className="mb-6 md:mb-0">
          <p className="text-xl text-black mb-2">Total: <span className="font-bold">$38.98</span></p>
          <p className="text-sm text-gray-500">Tax included. <Link to="/shipping-policy" className="underline underline-offset-4">Shipping</Link> calculated at checkout.</p>
        </div>
        <button className="bg-[#191919] text-white px-12 py-4 font-semibold hover:bg-black transition-colors w-full md:w-auto">
          Checkout
        </button>
      </div>
    </div>
  );
}
