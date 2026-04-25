import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { MobileHeader } from './components/mobile-header';
import { AnnouncementBar } from './components/announcement-bar';
import { Sidebar } from './components/sidebar';
import { HomePage } from './pages/home';
import { CollectionsPage } from './pages/collections';
import { LocationPage } from './pages/location';
import { ShippingPolicyPage } from './pages/shipping-policy';
import { RefundPolicyPage } from './pages/refund-policy';
import { ProductDetailPage } from './pages/product-detail';
import { CartPage } from './pages/cart';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="text-black text-[16px] leading-[normal]" style={{ fontFamily: '"Times New Roman"', textDecoration: "none" }}>
      <div className="bg-white text-[rgb(25,_25,_25)] text-[15px] leading-[25.5px]" style={{ fontFamily: "Jost, sans-serif" }}>
        {isHomePage && (
          <div className="lg:hidden">
            <AnnouncementBar />
          </div>
        )}

        <MobileHeader />
        <Sidebar />

        <div className="flex lg:before:relative lg:before:w-[20%] lg:before:content-[''] lg:before:max-w-[360px] lg:before:min-w-60 lg:before:z-[-1] lg:before:shrink-[0]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/locations" element={<LocationPage />} />
            <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}