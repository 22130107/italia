interface TestimonialCardProps {
  logo: string;
  name: string;
  description: string;
  quote: string;
  link: string;
}

export function TestimonialCard({ logo, name, description, quote, link }: TestimonialCardProps) {
  return (
    <div className="h-fit w-full shrink-[0]">
      <div className="pt-0 pr-[66.5px] pb-0 pl-[66.5px]">
        <div className="w-[80%]">
          <div className="flex mb-[45px]">
            <figure className="overflow-hidden relative w-[66px] h-[66px] mr-[25px] bg-[rgba(25,_25,_25,_0.03)]/3 rounded-[4.125rem]">
              <img
                src={logo}
                className="size-full max-w-full object-cover overflow-clip align-bottom aspect-[auto_66_/_66] rounded-[4.125rem]"
              />
            </figure>
            <div>
              <span className="block mb-[4.5px]">{name}</span>
              <span className="block text-[13px] leading-[13px]">{description}</span>
            </div>
          </div>
          <div className="font-medium text-[22.9167px] leading-[29.7917px]">
            <p>
              <a href={link} className="border-[rgb(25,_25,_25)] border-b-[0.8px]">
                {quote}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
