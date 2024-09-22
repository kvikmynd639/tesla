import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-5 md:px-0 text-center space-y-2">
        <div className='relative mx-auto text-xs justify-center max-w-xl flex flex-col space-y-5'>
            <p className='text-xs'>1 Price before estimated savings is $46,630, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $6,000 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible. Terms apply.</p>
            <p>2 Price before estimated savings is $44,130, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $5,000 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Model 3 Rear-Wheel Drive and leases not eligible for the Federal Tax Credit. Terms apply.</p>
            <p> Price before estimated savings is $81,630, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $6,500 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible. Terms apply.</p>
            <p>4 Price before estimated savings is $76,630, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $6,500 in gas savings estimated over five years and state incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible. Terms apply.</p>
        </div>
        <ul className="flex flex-wrap justify-center space-x-4">
          <li>
            <a href="#" className="hover:underline">
              Privacy & Legal
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              News
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Locations
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              © Tesla 2024
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
