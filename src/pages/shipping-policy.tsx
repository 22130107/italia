import { CompleteFooter } from '../components/complete-footer';

export function ShippingPolicyPage() {
  return (
    <main role="main" className="flex flex-col grow w-full min-h-screen">
      <div className="grow shrink-[0] px-6 lg:px-[100px] py-12 lg:py-20 max-w-[1200px] mx-auto w-full">
        {/* Breadcrumb */}
        <div className="text-[13px] text-gray-500 mb-12 hidden lg:block">
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-black">Shipping policy</span>
        </div>

        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[32px] font-bold mb-12 tracking-wide text-center">Shipping policy</h1>

          <div className="flex flex-col gap-6 text-[14px] leading-relaxed text-gray-800">
            <p className="font-bold text-black">Important Update: Delivery & Fuel Surcharge</p>
            
            <p>To our wonderful LeTAO family,</p>
            
            <p>Due to the ongoing surge in global fuel prices and rising logistics costs, we've had to make the difficult decision to add a temporary AUS5.99 fuel surcharge.</p>
            
            <p className="font-bold text-black mt-4">Key Changes to Delivery Fees:</p>
            <ul className="list-disc pl-6 flex flex-col gap-4">
              <li>
                <span className="font-bold text-black">Orders over $80 (Metro):</span> Instead of being completely free, a temporary AU$5.99 fuel surcharge will now apply.
              </li>
              <li>
                <span className="font-bold text-black">Orders under $80 (Metro):</span> The standard $15 delivery fee remains unchanged (the $5.99 surcharge does NOT apply to these orders).
              </li>
              <li>
                <span className="font-bold text-black">In-Store Pickup:</span> Always FREE, 12 PM - 10 PM, 365 days a year.
                <ul className="list-[circle] pl-8 mt-2 flex flex-col gap-2">
                  <li>Melbourne: 238 Swanston Street, Melbourne, Victoria</li>
                  <li>Sydney: 501 George Street, New South Wales.</li>
                </ul>
              </li>
            </ul>

            <p className="mt-4">
              Please note that this is a temporary measure. We are closely monitoring the situation and are committed to removing this surcharge as soon as fuel prices stabilise.
            </p>

            <p>
              We sincerely appreciate your continued support and understanding as we navigate these challenging times together.
            </p>

            <p className="font-bold text-black mt-6">Delivery Information (NSW, VIC, QLD)</p>
            <ul className="list-disc pl-6 flex flex-col gap-4">
              <li>
                <span className="font-bold text-black">Metro Areas:</span>
                <ul className="list-[circle] pl-8 mt-2 flex flex-col gap-2">
                  <li>Orders over $80: AU$5.99 Fuel Surcharge (Next-day delivery available for orders placed before 2 PM).</li>
                  <li>Orders below $80: AU$15 Standard Delivery Fee (No additional fuel surcharge).</li>
                </ul>
              </li>
              <li>
                <span className="font-bold text-black">Remote Suburban Areas:</span> Pricing varies by postcode. Please enter your postcode on the Cart Page to view applicable rates.
              </li>
              <li>
                <span className="font-bold text-black">Availability:</span> Monday to Friday (No deliveries on Weekends or Public Holidays).
              </li>
              <li>
                <span className="font-bold text-black">Advanced Booking:</span> You can select a delivery date up to 21 days in advance.
              </li>
              <li>
                <span className="font-bold text-black">Daily Slots:</span> Delivery slots are limited. We recommend placing your order as early as possible to secure your preferred date.
              </li>
              <li>
                <span className="font-bold text-black">ETA Text:</span> You will receive a text message with an Estimated Time of Arrival (ETA) once your order is on its way.
              </li>
              <li>
                <span className="font-bold text-black">Window:</span> Standard delivery is between 9 AM and 7 PM.
              </li>
              <li>
                <span className="font-bold text-black">Delays:</span> On rare occasions, high volume or traffic may extend the delivery window beyond 7 PM. If you haven't received an ETA, it will be sent when the driver is on route.
              </li>
              <li>
                <span className="font-bold text-black">Changes:</span> If you cannot receive your order, please contact us before 2 PM at least one day prior to your scheduled date.
              </li>
              <li>
                <span className="font-bold text-black">Missed Delivery:</span> If we are not notified in time and delivery fails, a $10 re-delivery fee may apply.
              </li>
            </ul>

            <p className="font-bold text-black mt-6">Need Support?</p>
            <p>Our team is available 7 days a week, 12 PM - 9 PM:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Live Chat: Available on our website.</li>
              <li>Email: enquiries@LeTAOaustralia.com</li>
              <li>Phone: 0404 761 888</li>
            </ul>

            <p className="mt-6 italic">
              Thank you for choosing LeTAO Australia! Follow us on Instagram @LeTAO_australia for updates and sweet inspirations.
            </p>
          </div>
        </div>
      </div>

      <CompleteFooter />
    </main>
  );
}
