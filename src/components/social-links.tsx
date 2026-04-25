interface SocialLink {
  href: string;
  iconUrl: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/LeTAOaustralia/",
    iconUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F177d159464fa4ba33f7a1a845dac98515734de4f.svg?generation=1777104935080838&alt=media",
    label: "Facebook"
  },
  {
    href: "https://www.instagram.com/letao_australia/",
    iconUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ff81b3e50a9e994d2ba0c4ae6bf3fec6c1addd5ad.svg?generation=1777104935086109&alt=media",
    label: "Instagram"
  }
];

export function SocialLinks() {
  return (
    <div className="w-[45%] mb-[100px]">
      <h4 className="font-medium uppercase mb-[50px] text-[13.75px] leading-[17.875px]">
        Follow us
      </h4>
      <div className="flex h-10 mt-[-10px] ml-[-9px]">
        {socialLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href} 
            className="items-center flex justify-center w-10 h-10"
          >
            <span className="block w-[23px] h-[23px]">
              <div className="inline overflow-hidden w-[23px] h-[23px]">
                <img 
                  src={link.iconUrl} 
                  className="inline w-[23px] h-[23px]"
                  alt={link.label}
                />
              </div>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
