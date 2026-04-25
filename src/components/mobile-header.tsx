import { useState } from 'react';
import { Link } from 'react-router';
import { SidebarHeader } from './sidebar-header';
import { Sidebar } from './sidebar';

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <header className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-[100]">
        <div className="flex items-center">
          <SidebarHeader />
        </div>
        <div className="flex items-center gap-5">
          <button className="p-1 text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <Link to="/cart" className="p-1 relative text-black flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute top-[11px] text-[10px] font-medium">0</span>
          </Link>
          <button className="p-1 text-black" onClick={() => setIsMenuOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[1000]">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-[80%] max-w-[300px] bg-white animate-slide-in-right shadow-xl">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
            <div className="p-4">
              {/* Reuse sidebar content here or create a simplified mobile menu */}
              <Sidebar isMobile onMenuClose={() => setIsMenuOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
