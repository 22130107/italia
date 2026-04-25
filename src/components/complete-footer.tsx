export function CompleteFooter() {
  return (
    <footer className="bg-white px-6 py-16 lg:px-[100px] border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto text-left">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Column 1: About */}
          <div className="col-span-1">
            <h4 className="font-bold uppercase mb-8 text-[12px] lg:text-[14px] tracking-widest text-black">About AquaTalk</h4>
            <div className="flex flex-col gap-4">
              <a href="/about" className="text-[13px] lg:text-[14px] text-gray-800 hover:text-black w-fit border-b border-black pb-0.5">Our Story</a>
              <a href="/locations" className="text-[13px] lg:text-[14px] text-gray-800 hover:text-black w-fit border-b border-black pb-0.5">Locations</a>
              <a href="/collections" className="text-[13px] lg:text-[14px] text-gray-800 hover:text-black w-fit border-b border-black pb-0.5">Order Online</a>
              <a href="/shipping-policy" className="text-[13px] lg:text-[14px] text-gray-800 hover:text-black w-fit border-b border-black pb-0.5">Shipping & Delivery</a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="col-span-1">
            <h4 className="font-bold uppercase mb-8 text-[12px] lg:text-[14px] tracking-widest text-black">Services</h4>
            <div className="flex flex-col gap-4">
              <a href="/shipping-policy" className="text-[13px] lg:text-[14px] text-gray-800 hover:text-black w-fit border-b border-black pb-0.5">Delivery Policy</a>
              <a href="/refund-policy" className="text-[13px] lg:text-[14px] text-gray-800 hover:text-black w-fit border-b border-black pb-0.5">Return & Refund</a>
              <a href="/privacy-policy" className="text-[13px] lg:text-[14px] text-gray-800 hover:text-black w-fit border-b border-black pb-0.5">Privacy Policy</a>
            </div>
          </div>

          {/* Column 3 & 4: Newsletter & Socials */}
          <div className="col-span-2 flex flex-col gap-12">
            <div>
              <h4 className="font-bold uppercase mb-8 text-[14px] tracking-widest text-black">be the first to know</h4>
              <div className="relative border border-black/30 w-full max-w-[450px]">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full h-[55px] px-4 bg-transparent outline-none text-[14px]"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase mb-6 text-[14px] tracking-widest text-black">Follow us</h4>
              <div className="flex gap-6 items-center">
                <a href="#" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity">
                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fa13d1a212f9cba853b2f394c8793ea1f346bef8b.svg?generation=1777105278001615&alt=media" alt="Facebook" className="w-full h-full" />
                </a>
                <a href="#" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity">
                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F5ed308b1feef17968e86f0076ff3137692952512.svg?generation=1777105278007149&alt=media" alt="Instagram" className="w-full h-full" />
                </a>
                <a href="#" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity">
                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fab2951941c77bc56304bd20d057a28a2a5821e66.svg?generation=1777105277988044&alt=media" alt="TikTok" className="w-full h-full" />
                </a>
                <span className="text-[12px] font-bold bg-black text-white px-2 py-1 rounded-sm cursor-pointer hover:bg-gray-800 transition-colors">
                  小红书
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F8fcd93d36167b7ecb4c76800ccc1978eba79db64.svg?generation=1777105277997393&alt=media" alt="AMEX" className="h-5 grayscale hover:grayscale-0 transition-all" />
            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F7086cb096dfded22131400a592e758cb592ebacd.svg?generation=1777105277997792&alt=media" alt="Mastercard" className="h-5 grayscale hover:grayscale-0 transition-all" />
            <div className="h-5 w-10 bg-[#5A31F4] flex items-center justify-center rounded text-white text-[9px] font-bold uppercase tracking-tighter">shop</div>
            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F087535684f2bd9a1e82d1e3b5fbce64c911bd7ff.svg?generation=1777105278002828&alt=media" alt="Visa" className="h-5 grayscale hover:grayscale-0 transition-all" />
          </div>
          
          <p className="text-[12px] text-gray-500 text-center md:text-right">
            © 2026 AquaTalk. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Call Us Button */}
      <div className="fixed bottom-6 right-6 z-[100] group">
        <a href="tel:+61000000000" className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl shadow-2xl hover:scale-105 transition-all active:scale-95">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.21-2.21a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span className="font-bold text-[16px]">Call Us</span>
        </a>
      </div>
    </footer>
  );
}
