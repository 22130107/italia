import { FooterColumn } from './footer-column';
import { NewsletterForm } from './newsletter-form';
import { SocialLinks } from './social-links';

const aboutLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/locations", label: "Locations" },
  { href: "/collections", label: "Order Online" },
  { href: "/shipping-policy", label: "Shipping & Delivery" },
];

const servicesLinks = [
  { href: "/shipping-policy", label: "Delivery Policy" },
  { href: "/refund-policy", label: "Return & Refund" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <div>
      <div>
        <div className="flex flex-wrap justify-between bg-white pt-[50px] pr-[66.5px] pb-0 pl-[66.5px]">
          <div className="flex w-[45%] mb-[100px]">
            <FooterColumn title="About AquaTALK" links={aboutLinks} />
            <FooterColumn title="Services" links={servicesLinks} />
          </div>
          <NewsletterForm />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
