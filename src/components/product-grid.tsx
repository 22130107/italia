import { ProductCard } from './product-card';

const products = [
  {
    name: "Cheese Cookies",
    price: "$19.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F78ad1938517f99dd6bb2e331a0ecba61b70ec8db.jpg%3Fcrop=center&height=504&v=1733245010&width=420?generation=1777105277114440&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb5f7c92d0d2a9275d93d48e60fef38efaf15dcb6.gif%3Fcrop=center&height=504&v=1759891601&width=420?generation=1777105277145131&alt=media",
    url: "/products/letao-otaru-rue-ironai-fromage-cookie-%E5%B0%8F%E6%A8%BD%E8%89%B2%E5%86%85%E9%80%9A%E3%82%8A%E3%83%95%E3%83%AD%E3%83%9E%E3%83%BC%E3%82%B8%E3%83%A5"
  },
  {
    name: "Chocolat Double",
    price: "$43.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F7a1ce7246cc8055476ae0ec373e844653ecc00ef.png%3Fcrop=center&height=504&v=1729787289&width=420?generation=1777105277131647&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc739e852e334fcf230b053ce6ac3cc0a878fdd8e.gif%3Fcrop=center&height=504&v=1743578242&width=420?generation=1777105277153870&alt=media",
    url: "/products/chocolate-double-%E3%82%B7%E3%83%A7%E3%82%B3%E3%83%A9%E3%83%89%E3%82%A5%E3%83%BC%E3%83%96%E3%83%AB"
  },
  {
    name: "Chocolate Darjeeling-infused Cookies",
    price: "$19.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F43d7c0e0d001b53f1dba787440c735886373f51c.png%3Fcrop=center&height=504&v=1729788672&width=420?generation=1777105277123498&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F40c4397e825e774f55068ec3a37044649f954387.png%3Fcrop=center&height=504&v=1759892890&width=420?generation=1777105277350657&alt=media",
    url: "/products/thenoir-chocolate-fromage-cookies"
  },
  {
    name: "Floraison De Myrtilles",
    price: "$48.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fee583d32c0e1fe7e010e2f09516db8503dfc286f.jpg%3Fcrop=center&height=504&v=1741095422&width=420?generation=1777105277436800&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F7b2aafc61c2aa6678ce1097bbc472b6077126701.gif%3Fcrop=center&height=504&v=1743578402&width=420?generation=1777105277432708&alt=media",
    url: "/products/floraison-de-myrtilles-blueberry"
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
    name: "Milk Cheese Cookie",
    price: "$19.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe6688a7c5154e830fc2375069a2282f973b7477b.png%3Fcrop=center&height=504&v=1733244964&width=420?generation=1777105277427252&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F445b639957bc7d045ff19f9a0849023be6077735.gif%3Fcrop=center&height=504&v=1759891532&width=420?generation=1777105277463347&alt=media",
    url: "/products/milk-fromage-cookie"
  },
  {
    name: "Pêche Blanche Earl Grey - MEL & SYD Only",
    price: "$48.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe93ec7b4fdd702e8fef7b5395d6d0dd608432189.jpg%3Fcrop=center&height=504&v=1743431258&width=420?generation=1777105277594548&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F8edda597d1d8520260bf2a0822f4ded5260a486c.gif%3Fcrop=center&height=504&v=1743578230&width=420?generation=1777105277732424&alt=media",
    url: "/products/peche-blanche-earl-grey"
  },
  {
    name: "Strawberry Double Hokkaido Ichigo",
    price: "$44.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0cf24a7c22585860cbccee8b995b6a58ef9db036.jpg%3Fcrop=center&height=504&v=1743489973&width=420?generation=1777105277727791&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ff58426c6aa19555b9e2c2ab26709437a9d2b4a46.gif%3Fcrop=center&height=504&v=1743754017&width=420?generation=1777105277750936&alt=media",
    url: "/products/strawberry-double-seasonal-limited"
  },
  {
    name: "Sylvie - New Arrival",
    price: "$49.99",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fcbfa98fbff41a00c3364c0e79dcd1aa611c27e83.jpg%3Fcrop=center&height=504&v=1774843632&width=420?generation=1777105277728434&alt=media",
    hoverImage: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb3b4ecdba497183b23ce3d87e863bc274fe9ef45.gif%3Fcrop=center&height=504&v=1775561026&width=420?generation=1777105277739986&alt=media",
    url: "/products/sylvie"
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
  }
];

export function ProductGrid() {
  return (
    <div className="px-4 lg:px-[66.5px] mb-[50px]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[42px]">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
