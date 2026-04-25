import { Link } from 'react-router';

interface RelatedProductCardProps {
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  url: string;
}

export function RelatedProductCard({ name, price, image, hoverImage, url }: RelatedProductCardProps) {
  return (
    <div className="overflow-hidden relative w-full p-[21px] shrink-[0]">
      <Link to={url} className="block overflow-hidden relative">
        <div className="overflow-hidden relative bg-[rgba(25,_25,_25,_0.03)]/3 pt-[287.288px] pr-0 pb-0 pl-0">
          <figure className="bg-center bg-no-repeat bg-cover size-full overflow-hidden absolute left-0 top-0 bg-[rgba(25,_25,_25,_0.03)]/3 z-[0]">
            <img
              alt={name}
              src={image}
              className="block size-full max-w-full object-cover overflow-clip absolute align-bottom left-0 top-0 z-[7]"
            />
          </figure>
          <div className="z-[8] opacity-[0]">
            <figure className="bg-center bg-no-repeat bg-cover size-full overflow-hidden absolute left-0 top-0 bg-[rgba(25,_25,_25,_0.03)]/3 z-[0]">
              <img
                alt={name}
                src={hoverImage}
                className="block size-full max-w-full object-cover overflow-clip absolute align-bottom left-0 top-0 z-[7]"
              />
            </figure>
          </div>
        </div>
        <div className="relative min-h-[105px] pt-[18px] pr-0 pb-0 pl-0">
          <span className="inline-block font-semibold text-[16px] leading-[16px]" style={{"textDecoration":"none"}}>
            <span className="bg-no-repeat bg-[position:0%_18px] bg-size-[0%_1px] leading-[19.2px] pt-0 pr-0 pb-[3px] pl-0" style={{"backgroundImage":"linear-gradient(to right, rgb(25, 25, 25), rgb(25, 25, 25))"}}>
              {name}
            </span>
          </span>
          <div>
            <div>
              <span>{price}</span>
              <span className="line-through ml-[10px] opacity-[0.54]" style={{"textDecoration":"line-through"}}></span>
              <span className="block font-medium text-[12px] leading-[20.4px] opacity-[0.66]"></span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
