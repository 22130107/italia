import { PageHeader } from '../components/page-header';
import { HeroBanner } from '../components/hero-banner';
import { TestimonialCarousel } from '../components/testimonial-carousel';
import { ProductGrid } from '../components/product-grid';
import { CompleteFooter } from '../components/complete-footer';

export function CollectionsPage() {
  return (
    <main role="main" className="flex flex-col grow w-0 basis-[0%] min-h-[639.2px]">
      <div className="grow shrink-[0]">
        <div>
          <PageHeader />
        </div>

        <div className="mt-[66.5px]">
          <HeroBanner />
        </div>

        <div className="mt-[50px] mb-[50px]">
          <TestimonialCarousel />
        </div>

        <div className="mt-[66.5px]">
          <ProductGrid />
        </div>
      </div>

      <CompleteFooter />
    </main>
  );
}
