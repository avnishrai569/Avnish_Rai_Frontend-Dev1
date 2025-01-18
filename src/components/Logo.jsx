import React from 'react';

export const Logo = () => {
  return (
    <div className="flex gap-1.5 items-center mb-0 max-md:mb-2.5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/5a01b4cc8ca74f51b6159fb7fdcf99d7/4972f0100b1cb31c9337085a6fb2f5191daeb0edf665a8f4be43c1a82f42132c?apiKey=5a01b4cc8ca74f51b6159fb7fdcf99d7&"
        alt="EthAi Logo"
        className="object-contain shrink-0 self-stretch my-auto w-9 rounded-none aspect-square"
      />
      <div className="self-stretch my-auto text-2xl font-bold tracking-normal leading-none text-white">EthAi</div>
    </div>
  );
};