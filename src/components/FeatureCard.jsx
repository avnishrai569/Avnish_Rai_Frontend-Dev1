import React from 'react';

export const FeatureCard = ({ title, description, icon, className }) => {
  return (
    <div className={`flex overflow-hidden relative flex-col items-start self-stretch bg-teal-950 bg-opacity-70 min-h-[504px] min-w-[240px] rounded-[56px_16px_16px_16px] ${className}`}>
      <div className="flex absolute inset-0 z-0 flex-col px-7 pt-24 pb-80 max-w-full border border-solid border-cyan-950 rounded-[56px_16px_16px_16px] w-[280px] max-md:px-5 max-md:pb-24">
        {icon}
      </div>
      <div className="flex overflow-hidden absolute bottom-8 left-2/4 z-0 flex-col px-3.5 pt-px pb-4 max-w-full text-center -translate-x-2/4 h-[203px] translate-y-[0%] w-[232px]">
        <h3 className="self-center text-2xl font-medium tracking-tight leading-7 text-white">
          {title}
        </h3>
        <p className="mt-7 text-base leading-6 text-cyan-200 text-opacity-70">
          {description}
        </p>
      </div>
    </div>
  );
};