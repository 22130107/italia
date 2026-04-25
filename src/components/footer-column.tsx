interface FooterLink {
  href: string;
  label: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="w-[50%]">
      <h4 className="font-medium uppercase mb-[50px] text-[13.75px] leading-[17.875px]">
        {title}
      </h4>
      <div className="text-[13px] leading-[13px]">
        {links.map((link) => (
          <span key={link.href} className="block mb-[15px] leading-[19.5px]">
            <a 
              href={link.href} 
              className="border-[rgb(25,_25,_25)] border-b-[0.8px]"
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}
