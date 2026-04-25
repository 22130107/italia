interface ProductDescriptionProps {
  description: string;
}

export function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div className="mb-[30px]">
      <div className="overflow-hidden relative max-h-[100px]">
        <div>
          <p className="mb-[22.5px]">
            <span>{description}</span>
          </p>
        </div>
        <div className="absolute w-full h-[50px] left-0 bottom-0 content-[&quot;&quot;]" style={{"backgroundImage":"linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 10%, rgba(255, 255, 255, 0))"}}></div>
      </div>
      <a className="inline-block italic mt-[5px] border-[rgb(25,_25,_25)] leading-[16.5px] border-b-[0.8px]" style={{"textDecoration":"none"}}>
        Show more
      </a>
    </div>
  );
}
