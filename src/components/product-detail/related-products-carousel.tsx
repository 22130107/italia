import { RelatedProductCard } from './related-product-card';

const relatedProducts = [
  {
    name: "Milk Cheese Cookie",
    price: "$19.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe6688a7c5154e830fc2375069a2282f973b7477b.png%3Fcrop=center&height=504&v=1733244964&width=420?generation=1777105277427252&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F445b639957bc7d045ff19f9a0849023be6077735.gif%3Fcrop=center&height=504&v=1759891532&width=420?generation=1777105277463347&alt=media",
    url: "/products/milk-fromage-cookie"
  },
  {
    name: "Chocolat Double",
    price: "$43.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F7a1ce7246cc8055476ae0ec373e844653ecc00ef.png%3Fcrop=center&height=504&v=1729787289&width=420?generation=1777105277131647&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc739e852e334fcf230b053ce6ac3cc0a878fdd8e.gif%3Fcrop=center&height=504&v=1743578242&width=420?generation=1777105277153870&alt=media",
    url: "/products/chocolate-double"
  },
  {
    name: "Chocolate Darjeeling-infused Cookies",
    price: "$19.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F43d7c0e0d001b53f1dba787440c735886373f51c.png%3Fcrop=center&height=504&v=1729788672&width=420?generation=1777105277123498&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F40c4397e825e774f55068ec3a37044649f954387.png%3Fcrop=center&height=504&v=1759892890&width=420?generation=1777105277350657&alt=media",
    url: "/products/thenoir-chocolate-fromage-cookies"
  },
  {
    name: "Fromage Double",
    price: "$43.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F7c15608a05d9337d635dc720ee5269c4b2d202ee.png%3Fcrop=center&height=504&v=1729787607&width=420?generation=1777105277453226&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fde15d5bc768e397e0d5d77a5d30e04e8dd112621.gif%3Fcrop=center&height=504&v=1743578260&width=420?generation=1777105277437237&alt=media",
    url: "/products/fromage-double"
  },
  {
    name: "Jersey Milk Roll",
    price: "$33.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0d24ed164fecc6f7ca3a2aa2e67bf22f3fe6a132.png%3Fcrop=center&height=504&v=1729788775&width=420?generation=1777105277427464&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F4b35129e883b4df549f203b3c19b4c110f693a2a.gif%3Fcrop=center&height=504&v=1743598770&width=420?generation=1777105277496719&alt=media",
    url: "/products/jersey-milk-roll"
  },
  {
    name: "Yuki Akari",
    price: "$48.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F00351ae59a3801848f79c1242c91f662f727f56d.png%3Fcrop=center&height=504&v=1729786527&width=420?generation=1777105277742748&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fec62a147db84f5aecc41b9267a5db271c23efc5a.gif%3Fcrop=center&height=504&v=1743600105&width=420?generation=1777105277767399&alt=media",
    url: "/products/yuki-akari-year-of-the-dragon-limited"
  },
  {
    name: "Yuki Ichigo",
    price: "$48.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F8ce3feb1285158f9c51a89598a97daa9ee372dc5.jpg%3Fcrop=center&height=504&v=1743488803&width=420?generation=1777105277766437&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F63af4529ff2ff9ab0f943eb6899dbacc86e34efa.gif%3Fcrop=center&height=504&v=1743815532&width=420?generation=1777105277791266&alt=media",
    url: "/products/yuki-ichigo"
  },
  {
    name: "Strawberry Double Hokkaido Ichigo",
    price: "$44.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0cf24a7c22585860cbccee8b995b6a58ef9db036.jpg%3Fcrop=center&height=504&v=1743489973&width=420?generation=1777105277727791&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ff58426c6aa19555b9e2c2ab26709437a9d2b4a46.gif%3Fcrop=center&height=504&v=1743754017&width=420?generation=1777105277750936&alt=media",
    url: "/products/strawberry-double-seasonal-limited"
  }
];

export function RelatedProductsCarousel() {
  const doubledProducts = [...relatedProducts, ...relatedProducts];

  return (
    <div className="overflow-hidden">
      <div className="pt-[50px] pr-0 pb-[50px] pl-0">
        <div className="pt-0 pr-[66.5px] pb-0 pl-[66.5px]">
          <span className="block font-medium mb-[32.0833px] text-[22.9167px] leading-[29.7917px]">
            You may also like
          </span>
          <div className="relative w-full">
            <div className="w-full overflow-hidden">
              <div className="flex animate-auto-scroll">
                {doubledProducts.map((product, index) => (
                  <div key={index} className="flex-none w-[280px] lg:w-[350px]">
                    <RelatedProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
