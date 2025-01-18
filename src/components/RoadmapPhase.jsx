import React from 'react';

export const RoadmapPhase = ({ phase, title, items, image, imagePosition = 'right' }) => {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-16 w-full max-md:px-5 max-md:max-w-full">
      <div className={`flex ${imagePosition === 'right' ? 'justify-between' : 'flex-row-reverse justify-between'} items-center px-14 max-w-full w-[1200px] max-md:px-5`}>
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[535px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="self-start px-3 py-1.5 text-xs font-medium tracking-normal leading-none uppercase rounded bg-neutral-100 text-zinc-800">
              Phase {phase}
            </div>
            <h3 className="mt-5 w-full text-4xl font-medium tracking-tighter leading-10 text-center text-white max-md:max-w-full">
              {title}
            </h3>
          </div>
          <div className="flex flex-col mt-12 max-w-full w-[476px] max-md:mt-10">
            {items.map((item, index) => (
              <div key={index} className="flex gap-3 items-start mt-5 first:mt-0">
                <div className="flex flex-col w-5 min-h-[20px]">
                  <div className="flex overflow-hidden flex-col w-5 min-h-[20px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/5a01b4cc8ca74f51b6159fb7fdcf99d7/f742f2889ef9fc938e835d3bfb1ee14331b5064142d3956685590c97a7ae887e?apiKey=5a01b4cc8ca74f51b6159fb7fdcf99d7&"
                      alt=""
                      className="object-contain w-full aspect-square"
                    />
                  </div>
                </div>
                <div className="text-xl tracking-normal leading-tight text-gray-200">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          loading="lazy"
          src={image}
          alt=""
          className="object-contain self-stretch my-auto max-w-xl aspect-[1.12] min-h-[512px] min-w-[240px] w-[576px] max-md:max-w-full"
        />
      </div>
    </div>
  );
};