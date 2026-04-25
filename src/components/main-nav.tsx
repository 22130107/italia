import { Link, useLocation } from 'react-router';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Order Online" },
  { href: "/locations", label: "Location" },
];

export function MainNav() {
  const location = useLocation();

  return (
    <nav>
      <ul className="font-medium text-[19.0588px] leading-[19.0588px]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <li key={item.href} className="list-none">
              <Link
                to={item.href}
                className={`items-center flex justify-between group transition-colors duration-200 hover:text-[rgb(221,_29,_29)] ${isActive ? 'text-[rgb(221,_29,_29)]' : ''} pt-2 pr-[42.4625px] pb-2 pl-[42.4625px]`}
              >
                <span className="block grow basis-[0%]">
                  <span
                    className={`bg-no-repeat bg-[position:0%_23.0588px] transition-[background-size] duration-200 ${isActive ? 'bg-size-[100%_1px]' : 'bg-size-[0px_1px]'} group-hover:bg-size-[100%_1px] leading-[22.8706px] pt-0 pr-0 pb-[3px] pl-0`}
                    style={{ backgroundImage: "linear-gradient(to right, rgb(221, 29, 29), rgb(221, 29, 29))" }}
                  >
                    {item.label}
                  </span>
                </span>
                <span className="block h-6"></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
