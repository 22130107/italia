interface NavLink {
  href: string;
  label: string;
}

const policyLinks: NavLink[] = [
  { href: "/shipping-policy", label: "Delivery Policy" },
  { href: "/refund-policy", label: "Return & Refund" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function SecondaryNav() {
  return (
    <nav>
      <ul className="mt-[40px] text-[14px] leading-[14px]">
        {policyLinks.map((link) => (
          <li key={link.href} className="list-none">
            <a 
              href={link.href} 
              className="items-center flex justify-between group transition-colors duration-200 hover:text-[rgb(221,_29,_29)] pt-1 pr-[42.4625px] pb-1 pl-[42.4625px]"
            >
              <span className="block grow basis-[0%]">
                <span 
                  className="bg-no-repeat transition-[background-size] duration-200 bg-[position:0%_18px] bg-size-[0%_1px] group-hover:bg-size-[100%_1px] leading-[16.8px] pt-0 pr-0 pb-[3px] pl-0"
                  style={{ backgroundImage: "linear-gradient(to right, rgb(221, 29, 29), rgb(221, 29, 29))" }}
                >
                  {link.label}
                </span>
              </span>
              <span className="block h-6"></span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="mt-[40px] text-[14px] leading-[14px]">
        <li className="list-none">
          <a
            href="/login"
            className="items-center flex justify-between group transition-colors duration-200 hover:text-[rgb(221,_29,_29)] pt-0 pr-[42.4625px] pb-0 pl-[42.4625px]"
          >
            <span 
              className="bg-no-repeat block transition-[background-size] duration-200 bg-[position:0%_18px] bg-size-[0%_1px] group-hover:bg-size-[100%_1px] leading-[16.8px] pt-0 pr-0 pb-[3px] pl-0"
              style={{ backgroundImage: "linear-gradient(to right, rgb(221, 29, 29), rgb(221, 29, 29))" }}
            >
              Login
            </span>
          </a>
        </li>
      </ul>
      <div></div>
    </nav>
  );
}
