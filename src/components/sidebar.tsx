import { SidebarHeader } from './sidebar-header';
import { CartButton } from './cart-button';
import { MainNav } from './main-nav';
import { SecondaryNav } from './secondary-nav';
import { SearchForm } from './search-form';

interface SidebarProps {
  isMobile?: boolean;
  onMenuClose?: () => void;
}

export function Sidebar({ isMobile }: SidebarProps) {
  return (
    <div className={`${isMobile ? 'block' : 'hidden lg:block'}`}>
      <div className={`${isMobile ? 'relative' : 'h-full fixed w-[20%] left-0 top-0 max-w-[360px] min-w-60'} z-[999]`}>
        <div 
          className={`flex flex-col ${isMobile ? 'h-auto' : 'size-full'} overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative bg-[rgb(242,_242,_242)] z-[99999] border-r-[0.8px]`}
          style={{ borderRightColor: "rgba(25, 25, 25, 0.08)" }}
        >
          <div className={`flex flex-col flex-1 ${isMobile ? 'pt-10' : 'pt-[120px]'} pr-0 pb-0 pl-0 z-[9] shrink-0`}>
            <SidebarHeader />
            {!isMobile && <CartButton />}
            <div className="mb-[60px]">
              <MainNav />
              <SecondaryNav />
            </div>
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
}
