import { ProductImageGallery } from '../components/product-detail/product-image-gallery';
import { ProductInfoPanel } from '../components/product-detail/product-info-panel';
import { RelatedProductsCarousel } from '../components/product-detail/related-products-carousel';
import { CompleteFooter } from '../components/complete-footer';

const productImages = [
  {
    url: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F97dc864c2b49f7af2cab42721d9c856f2b7d5adb.jpg%3Fv=1733245010&width=1080?generation=1777116974054070&alt=media",
    alt: "Cheese Cookies"
  },
  {
    url: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbd04ba6ac8d401a6f2b61a87908a8bb8ae9dc954.gif%3Fv=1759891601&width=640?generation=1777116974082321&alt=media",
    alt: "Cheese Cookies"
  },
  {
    url: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F5b8a6222c54ed446b5a51cc9ca2e969d7be3c5f1.png%3Fv=1759891942&width=1080?generation=1777116974054051&alt=media",
    alt: "Cheese Cookies"
  },
  {
    url: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F4083c099c0c81a9de60648e88bcaa7943e8e2d8c.png%3Fv=1759892295&width=1080?generation=1777116974049709&alt=media",
    alt: "Cheese Cookies"
  },
  {
    url: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0341a8851ef2ee9fa031c3c85c6c7147347497f8.png%3Fv=1759892295&width=1080?generation=1777116974037308&alt=media",
    alt: "Cheese Cookies"
  }
];

export function ProductDetailPage() {
  return (
    <main role="main" className="flex flex-col grow w-0 basis-[0%] min-h-[639.2px]">
      <div className="grow shrink-[0]">
        <section className="border-b-[0.8px]" style={{"borderBottomColor":"rgba(25, 25, 25, 0.08)"}}>
          <div className="flex flex-col lg:flex-row items-start relative z-[99]">
            <ProductImageGallery images={productImages} />
            <ProductInfoPanel
              name="Cheese Cookies"
              price="$19.99"
              description="Our luxurious Langue de Chat-style butter cookies with an indulgent Cheese flavor. The cookies are similar to the base of our Double"
            />
          </div>
        </section>

        <RelatedProductsCarousel />
      </div>

      <CompleteFooter />
    </main>
  );
}
