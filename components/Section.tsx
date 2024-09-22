import React from 'react';

interface SectionProps {
  backgroundImageClass: string; // Pass the Tailwind background image class
  header: string;
  miniHeader: string;
  button1Text: string;
  button2Text: string;
}

const Section: React.FC<SectionProps> = ({
  backgroundImageClass,
  header,
  miniHeader,
  button1Text,
  button2Text,
}) => {
  return (
    <div
      className={`h-screen w-full relative bg-cover bg-center flex flex-col justify-between text-center text-white ${backgroundImageClass}`}
    >
      {/* Header Section */}
      <div className="flex-grow flex items-center justify-center -mt-56 md:-mt-24">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-100">{header}</h1>
          <p className="text-md md:text-lg font-semibold mt-2 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white">
            {miniHeader}
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="mb-10 space-x-0 space-y-4 md:space-x-4 md:space-y-0 max-w-5xl justify-center mx-auto z-10 flex flex-col md:flex-row">
        <button className="bg-blue-500 text-white min-w-[250px] py-2 px-6 rounded-lg hover:bg-gray-800 transition">
          {button1Text}
        </button>
        <button className="bg-white min-w-[250px] text-black py-2 px-6 rounded-lg hover:bg-gray-300 transition">
          {button2Text}
        </button>
      </div>
    </div>
  );
};

export default Section;
