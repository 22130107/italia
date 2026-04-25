import { ProductBreadcrumb } from './product-breadcrumb';
import { StorePickupInfo } from './store-pickup-info';
import { ProductDescription } from './product-description';
import { QuantitySelector } from './quantity-selector';
import { AddToCartButton } from './add-to-cart-button';

interface ProductInfoPanelProps {
  name: string;
  price: string;
  description: string;
}

export function ProductInfoPanel({ name, price, description }: ProductInfoPanelProps) {
  return (
    <div className="lg:sticky w-full lg:w-[40%] lg:top-0 max-w-[600px] min-h-auto lg:min-h-[639.2px] pt-8 lg:pt-[50px] px-6 lg:px-[66.5px] pb-12 lg:pb-[50px] order-2 lg:order-1">
      <div>
        <ProductBreadcrumb productName={name} />
      </div>

      <h1 className="font-medium mb-[27.5px] text-[27.5px] leading-[33px]">{name}</h1>

      <div>
        <div className="font-medium mb-[57.6px] text-[18px] leading-[18px]">
          <span>{price}</span>
          <span className="line-through ml-[10px] opacity-[0.54]" style={{"textDecoration":"line-through"}}></span>
          <span className="block mt-[14.4px] text-[14.4px] leading-[14.4px] opacity-[0.66]"></span>
        </div>
        <form className="mb-[30px]"></form>
      </div>

      <div className="mb-[24px]"></div>

      <StorePickupInfo />

      <ProductDescription description={description} />

      <div>
        <div className="inline">
          <a className="block mt-[30px] mb-[15px]">
            <span>
              <div className="inline fill-none overflow-hidden w-6 h-6">
                <img src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F7c25b461bd82971575340e09e70927cd6bac17ab.svg?generation=1777116974011775&alt=media" className="inline w-6 h-6" />
              </div>
            </span>{' '}
            <span className="relative top-[-5px] ml-[10px]">Share</span>
          </a>
        </div>
      </div>

      <div>
        <form>
          <div>
            <div className="flex flex-wrap relative w-[calc(100%+20px)] ml-[-10px]">
              <QuantitySelector />
              <AddToCartButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
