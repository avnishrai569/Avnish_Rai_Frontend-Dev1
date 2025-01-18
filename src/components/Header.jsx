import React from 'react';

export const Header = () => {
  return (
    <header className="flex flex-col items-end px-20 max-md:pl-5">
      <nav className="flex z-0 gap-6 items-center text-base font-medium absolute top-8 right-[70px]">
        <a href="/login" className="self-stretch py-3.5 my-auto tracking-normal leading-6 text-white min-h-[48px]">
          Log in
        </a>
        <a href="/whitepaper" className="overflow-hidden self-stretch px-6 py-3 my-auto tracking-tight leading-5 text-center whitespace-nowrap bg-cyan-100 rounded-xl shadow-[0px_1px_4px_rgba(55,197,229,0.12)] text-teal-950 w-[140px] max-md:px-5">
          Whitepaper
        </a>
      </nav>
      <nav className="flex absolute top-6 left-2/4 z-0 flex-col items-center max-w-full text-base font-medium tracking-normal leading-8 -translate-x-2/4 text-cyan-200 text-opacity-70 translate-y-[0%] w-[655px]">
        <div className="flex flex-col w-full bg-teal-950 bg-opacity-70 rounded-[48px]">
          <div className="flex flex-col justify-center px-16 py-4 w-full border border-solid border-cyan-950 rounded-[48px] max-md:px-5 max-md:max-w-full">
            <div className="flex overflow-hidden gap-10 justify-between items-center">
              <a href="#features" className="self-stretch my-auto w-[77px]">Features</a>
              <a href="#why-us" className="self-stretch my-auto w-[59px]">Why Us</a>
              <a href="#tokenomics" className="self-stretch my-auto w-[95px]">Tokenomics</a>
              <a href="#roadmap" className="self-stretch my-auto w-[87px]">Roadmap</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};