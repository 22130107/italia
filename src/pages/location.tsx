import { CompleteFooter } from '../components/complete-footer';

export function LocationPage() {
  return (
    <main role="main" className="flex flex-col grow w-full min-h-screen">
      <div className="grow shrink-[0] px-6 lg:px-[100px] py-12 lg:py-20 max-w-[1200px] mx-auto w-full">
        {/* Breadcrumb */}
        <div className="text-[13px] text-gray-500 mb-12">
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-black">Location</span>
        </div>

        <h1 className="text-[32px] font-bold mb-16 tracking-wide">Location</h1>

        <div className="flex flex-col gap-12 text-center text-[14px] leading-relaxed max-w-[800px] mx-auto">
          {/* Head Office */}
          <div>
            <h3 className="font-bold underline mb-4">Australian Head Office</h3>
            <p>Level 5/447 Collins Streeet, Melbourne, Victoria, Australia 3000.</p>
            <p className="mt-4">ABN: 51 326 053 663</p>
          </div>

          {/* Boutique Store */}
          <div>
            <h3 className="font-bold underline mb-4">Australian Boutique Store</h3>
            <p>501 George Street, Sydney, NSW, Australia, 3000</p>
            <p className="mt-4">Monday to Sunday 12pm to 10pm</p>
            
            <p className="mt-8">238 Swanston Street, Melbourne, Victoria, Australia 3000</p>
            <p className="mt-4">Monday to Sunday 12pm to 10pm</p>

            <p className="mt-8 font-bold">Open as usual during the holidays.</p>
          </div>

          {/* Distribution Center */}
          <div>
            <h3 className="font-bold underline mb-4">Online Order Distribution Center</h3>
            <p>Melbourne: 6 Chifley Drive, Moorabbin Airport VIC 3194, Australia</p>
            <p className="mt-4">Sydney: 457 Waterloo Rd, Greenacre NSW 2190, Australia</p>
          </div>

          {/* Production R&D */}
          <div>
            <h3 className="font-bold underline mb-4">Production - R&D</h3>
            <p>JP Headquarter: KCC Co., Ltd. 1007-90, Izumisawa, Chitose-city, Hokkaido, Japan</p>
            <p className="mt-4">JP Production Factory: ＜小樽洋菓子舗ルタオ＞株式会社 1007-111, Izumisawa, Chitose-city, Hokkaido, Japan</p>
          </div>

          {/* Global Shops */}
          <div>
            <h3 className="font-bold underline mb-4">Global Shops</h3>
            <p>LeTAO Global Shops: Japan, Korea, Thailand, Singapore, China <a href="#" className="underline">Learn More</a></p>
          </div>
        </div>
      </div>

      <CompleteFooter />
    </main>
  );
}
