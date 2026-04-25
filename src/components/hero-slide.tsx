import { Link } from 'react-router';

interface HeroSlideProps {
  imageUrl: string;
  mobileImageUrl?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  height?: string;
  layout?: 'split' | 'joined-top' | 'joined-center';
}

export function HeroSlide({
  imageUrl,
  mobileImageUrl,
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  height = "h-[511.36px]",
  layout = 'joined-center'
}: HeroSlideProps) {
  const isInternalLink = !!buttonHref?.startsWith('/');
  const buttonClassName = "inline-block font-semibold text-left h-[55px] bg-[rgb(25,_25,_25)] border-transparent border-[1.6px] text-white leading-[53px] px-8 transition-all duration-200 hover:bg-white hover:text-black group";

  const buttonContent = (
    <span className="flex items-center gap-2 uppercase tracking-widest text-[14px]">
      {buttonText}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );

  return (
    <div className="overflow-hidden">
      <div className={`flex overflow-auto relative ${height}`}>
        <div className="size-full relative shrink-[0]">
          <div className="size-full">
            <div className="flex flex-col h-full overflow-x-auto overflow-y-hidden">
              <div className="flex h-full relative after:flex after:h-px after:w-0 after:content-[''] after:shrink-[0]">
                <div className="size-full overflow-hidden relative shrink-[0]">
                  {/* Top Text Container */}
                  <div className={`flex size-full justify-center absolute text-center left-0 top-0 z-[9] lg:hidden
                    ${layout === 'joined-center' ? 'items-center' : 'items-start pt-20 pt-[80px]'}`}>
                    <div className="relative text-center z-[9] w-full max-w-[95%]">
                      {subtitle && <p className="!text-white text-[14px] uppercase tracking-[0.5em] mb-4" style={{ fontFamily: "'Cinzel', serif" }}>{subtitle}</p>}
                      {description && <p className="!text-white text-[10px] uppercase tracking-[0.1em] mb-4 opacity-80">{description}</p>}
                      {layout !== 'split' && title && (
                        <h2 className="!text-white text-[80px] leading-[0.9] uppercase tracking-[0.05em]" style={{ fontFamily: "'Cinzel', serif" }}>{title}</h2>
                      )}
                    </div>
                  </div>

                  {/* Bottom Text Container (only for split layout) */}
                  {layout === 'split' && title && (
                    <div className="items-end flex size-full justify-center absolute text-center left-0 top-0 pb-20 z-[9] lg:hidden">
                      <div className="relative text-center z-[9] w-full max-w-[98%]">
                        <h2 className="!text-white text-[160px] leading-[0.7] uppercase tracking-[0.02em]" style={{ fontFamily: "'Cinzel', serif" }}>{title}</h2>
                      </div>
                    </div>
                  )}

                  {buttonText && buttonHref && (
                    <div className="items-end flex size-full justify-start absolute left-0 top-0 p-10 lg:p-[100px] z-[9]">
                      <div className="text-left">
                        {isInternalLink ? (
                          <Link to={buttonHref} className={buttonClassName}>
                            {buttonContent}
                          </Link>
                        ) : (
                          <a href={buttonHref} className={buttonClassName}>
                            {buttonContent}
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="h-full relative">
                    <div>
                      <figure className="bg-center bg-no-repeat bg-cover size-full overflow-hidden absolute left-0 top-0 bg-[rgba(25,_25,_25,_0.03)]/3 z-[0]">
                        <img
                          src={imageUrl}
                          className={`block ${mobileImageUrl ? 'hidden lg:block' : ''} size-full max-w-full object-cover overflow-clip absolute align-bottom left-0 top-0`}
                          alt=""
                        />
                        {mobileImageUrl && (
                          <img
                            src={mobileImageUrl}
                            className="block lg:hidden size-full max-w-full object-cover overflow-clip absolute align-bottom left-0 top-0"
                            alt=""
                          />
                        )}
                      </figure>
                    </div>
                    <span className="block size-full absolute left-0 top-0 bg-black/36 opacity-[0]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[50%] bottom-[25px] z-[9]"></div>
        </div>
      </div>
    </div>
  );
}
