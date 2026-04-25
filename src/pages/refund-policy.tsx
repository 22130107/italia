import { CompleteFooter } from '../components/complete-footer';

export function RefundPolicyPage() {
  return (
    <main role="main" className="flex flex-col grow w-full min-h-screen">
      <div className="grow shrink-[0] px-6 lg:px-[100px] py-12 lg:py-20 max-w-[1200px] mx-auto w-full">
        {/* Breadcrumb */}
        <div className="text-[13px] text-gray-500 mb-12 hidden lg:block">
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-black">Refund policy</span>
        </div>

        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[32px] font-bold mb-12 tracking-wide text-center">Refund policy</h1>

          <div className="flex flex-col gap-8 text-[14px] leading-relaxed text-gray-800">
            <p>Thank you for purchasing with LeTAO.</p>
            
            <p>
              We aim to do everything possible to satisfy our customers. If you received a damaged or defective product we will gladly organise an exchange, free of charge or refund by returning the original products.
            </p>

            <p>
              Please request an exchange or refund within 48 hours of receiving your LeTAO product. Include your order number and any supporting information about the defect, including a photo if possible.
            </p>

            <p>
              On receipt of your email, we will review your complaint and contact you about organising a free exchange or refund.
            </p>

            <p className="font-bold text-black mt-4">Delivery Errors & Damages</p>

            <p>
              Upon receiving it, kindly inspect your order and contact us immediately if you have received the wrong item or it is damaged in some way. If you receive the wrong item so that we can evaluate the issue and make it right.
            </p>

            <p>
              If you have any questions, feel free to get in contact via our Online Chat, call us on <a href="tel:0404761888" className="underline hover:text-black">0404 76 1888</a> or email us at <a href="mailto:enquiries@LeTAOaustralia.com" className="underline hover:text-black">enquiries@LeTAOaustralia.com</a>.
            </p>
          </div>
        </div>
      </div>

      <CompleteFooter />
    </main>
  );
}
