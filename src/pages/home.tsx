import { HeroSlide } from '../components/hero-slide';
import { CompleteFooter } from '../components/complete-footer';

export function HomePage() {
  return (
    <main role="main" className="flex flex-col grow w-0 basis-[0%] min-h-[639.2px]">
      <div className="grow shrink-[0]">
        <HeroSlide
          imageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc9a2ede26f61999bf655a9b80300c81a2becce9f.png%3Fv=1774916889&width=1860?generation=1777104934783575&alt=media"
          mobileImageUrl="/1.jpg"
          subtitle="Bathroom - Kitchen"
          title="RENOVATION"
          buttonText="Renovation Quote"
          buttonHref="/collections"
          layout="joined-top"
        />

        <HeroSlide
          imageUrl="https://letaoaustralia.com/cdn/shop/files/Artboard_3_0c62a92d-d611-44ca-8d01-52177ec21a1c.png?v=1709804448&width=1860"
          mobileImageUrl="/2.jpg"
          subtitle="PLOMBIRY"
          title="OUR SERVICE"
          layout="split"
        />

        <HeroSlide
          imageUrl="https://letaoaustralia.com/cdn/shop/files/4_f97a91e2-99f3-4589-a9c0-1515b494de5a.jpg?v=1751442526&width=1860"
          mobileImageUrl="/3.jpg"
          buttonText="CATEGORY"
          buttonHref="/collections"
        />

        <HeroSlide
          imageUrl="https://letaoaustralia.com/cdn/shop/files/6X03CPQL42K-65c97125bf0d58.63575884-lg.jpg?v=1765212511&width=1860"
          mobileImageUrl="/1.jpg"
          buttonText="ABOUT US"
          buttonHref="/collections"
        />

        <HeroSlide
          imageUrl="https://letaoaustralia.com/cdn/shop/files/Corp_Gifting_50fb889d-4d8f-42c3-a52b-a10b5571e09d.png?v=1757046837&width=1860"
          mobileImageUrl="/2.jpg"
          buttonText="CONTACT US"
          buttonHref="/collections"
        />
      </div>

      <CompleteFooter />
    </main>
  );
}
