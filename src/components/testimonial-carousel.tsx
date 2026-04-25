import { useState } from 'react';
import { TestimonialCard } from './testimonial-card';

const testimonials = [
  {
    logo: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fce4d440c22a0820a493ccdae7ac260851c9d1a1e.png%3Fcrop=center&height=132&v=1700733322&width=132?generation=1777105277366838&alt=media",
    name: "Broadsheet",
    description: "Lifestyle Publication covering Local Culture & Entertainment",
    quote: "\"The impossibly light and fluffy LeTAO cheesecake is a cult favourite in Japan\"",
    link: "https://www.broadsheet.com.au/melbourne/food-and-drink/article/first-look-melt-your-mouth-japanese-cheesecakes-and-swirly-soft-serves-letaos-first-aussie-store"
  },
  {
    logo: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F48b2d24a33e225abe9b0d7c5280f14194b5c1013.jpg%3Fcrop=center&height=132&v=1702307417&width=132?generation=1777105277141349&alt=media",
    name: "Urbanlist",
    description: "Online Platform offering City & Lifestyle Guides.",
    quote: "\"There's an artisan level of craft to the texture and balance of flavours in every cheesecake\"",
    link: "https://www.theurbanlist.com/melbourne/a-list/letao-cheesecake-melbourne"
  },
  {
    logo: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fce4d440c22a0820a493ccdae7ac260851c9d1a1e.png%3Fcrop=center&height=132&v=1700733322&width=132?generation=1777105277366838&alt=media",
    name: "Broadsheet",
    description: "Lifestyle Publication covering Local Culture & Entertainment",
    quote: "The cult-followed fluffy favourites – which all star Hokkaido milk",
    link: "https://www.broadsheet.com.au/sydney/food-and-drink/article/now-open-letao-sydney-george-street-japanese-cheesecake"
  }
];

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="m-auto relative w-full">
      <div className="overflow-hidden w-full h-[180px]">
        <div 
          key={activeIndex}
          className="relative h-full animate-slide-in-right"
        >
          <TestimonialCard {...testimonials[activeIndex]} />
        </div>
      </div>
      <div>
        <div className="flex gap-2 mt-[25px] ml-[66.5px]">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-[9px] h-[9px] rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-[rgb(25,_25,_25)]' : 'bg-[rgb(25,_25,_25)] opacity-[0.36] hover:opacity-60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
