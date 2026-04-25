import { Link } from 'react-router';

export function SidebarHeader() {
  return (
    <div className="lg:mt-[10px] lg:mb-[60px] lg:px-[42.4625px]">
      <Link to="/" className="flex items-center h-full">
        <span className="text-[22px] font-medium tracking-tight text-black whitespace-nowrap">
          AquaTalk
        </span>
      </Link>
    </div>
  );
}
