import React from 'react';

const navItems = [
  { label: 'Features', width: '77px' },
  { label: 'Why Us', width: '59px' },
  { label: 'Tokenomics', width: '95px' },
  { label: 'Roadmap', width: '87px' }
];

export default function Navigation() {
  return (
    <nav className="flex absolute top-6 left-2/4 z-0 flex-col items-center max-w-full text-base font-medium tracking-normal leading-8 -translate-x-2/4 text-cyan-200 text-opacity-70 translate-y-[0%] w-[655px]">
      <div className="flex flex-col w-full bg-teal-950 bg-opacity-70 rounded-[48px]">
        <div className="flex flex-col justify-center px-16 py-4 w-full border border-solid border-cyan-950 rounded-[48px] max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden gap-10 justify-between items-center">
            {navItems.map((item, index) => (
              <div key={index} className="self-stretch my-auto" style={{ width: item.width }}>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}