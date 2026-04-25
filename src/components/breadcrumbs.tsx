import { Link } from 'react-router';

export function Breadcrumbs() {
  return (
    <nav
      aria-label="breadcrumbs"
      role="navigation"
      className="flex flex-wrap mt-[-5px] mb-[46.8px] text-[13px] gap-[0px_11px] leading-[13px] pt-[2px] pr-0 pb-0 pl-0 z-[9]"
    >
      <span className="block leading-[19.5px] shrink-[0]">
        <Link to="/">Home</Link>
      </span>
      <span className="block leading-[19.5px] shrink-[0] opacity-[0.36]">/</span>
      <span className="block leading-[19.5px] shrink-[0]">
        <Link to="/collections">Collections</Link>
      </span>
      <span className="block leading-[19.5px] shrink-[0] opacity-[0.36]">/</span>
      <span className="block leading-[19.5px] shrink-[0] opacity-[0.66]">Products</span>
    </nav>
  );
}
