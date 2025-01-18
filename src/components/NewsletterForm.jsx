import React from 'react';

export const NewsletterForm = () => {
  return (
    <form className="flex gap-1 py-px pr-1.5 pl-px w-full rounded-2xl border border-solid border-stone-50 border-opacity-40 min-h-[54px] max-md:max-w-full">
      <label htmlFor="workEmail" className="sr-only">Work Email</label>
      <input
        type="email"
        id="workEmail"
        className="flex overflow-hidden flex-1 shrink justify-center px-5 py-4 text-base tracking-normal text-gray-200 rounded-2xl basis-0 min-w-[240px]"
        placeholder="What's your work email?"
        required
      />
      <button
        type="submit"
        className="flex relative justify-center items-start px-6 py-3 my-auto text-base font-medium tracking-tight leading-5 text-center text-white rounded-xl bg-teal-200 bg-opacity-0 max-md:px-5"
      >
        <span className="z-0 my-auto">Get Started</span>
        <div className="flex absolute inset-0 z-0 shrink-0 self-start h-11 rounded-xl border border-solid border-teal-200 border-opacity-20 w-[135px]" />
      </button>
    </form>
  );
};