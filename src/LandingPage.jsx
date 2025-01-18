import React from 'react';
import { Header } from './components/Header';
import { Logo } from './components/Logo';
import { NewsletterForm } from './components/NewsletterForm';
import { FeatureCard } from './components/FeatureCard';
import { RoadmapPhase } from './components/RoadmapPhase';

const roadmapData = [
  {
    phase: 1,
    title: "Kicking Off",
    items: [
      "Launch of EthAi: Officially",
      "Development of Core AI Agents",
      "User Onboarding Campaign",
      "Community Engagement Initiatives"
    ],
    image: "https://cdn.builder.io/api/v1/image/assets/5a01b4cc8ca74f51b6159fb7fdcf99d7/f595591f500991887f78fa7c002d6654c4082e0b74f1a32f78dee29a11688529?apiKey=5a01b4cc8ca74f51b6159fb7fdcf99d7&"
  },
  {
    phase: 2,
    title: "Bigger Insights",
    items: [
      "Introduction of Advanced AI Agents",
      "Strategic Partnerships",
      "User Interface Optimization",
      "Comprehensive Marketing Campaign"
    ],
    image: "https://cdn.builder.io/api/v1/image/assets/5a01b4cc8ca74f51b6159fb7fdcf99d7/18055b3fb4d06fb0fbd9d714434338415534758c04be5cf6e68b2e7146828e84?apiKey=5a01b4cc8ca74f51b6159fb7fdcf99d7&"
  },
  {
    phase: 3,
    title: "Full Power",
    items: [
      "Introduction of Enhanced Features",
      "API Integration for Data Access",
      "Launch of Community-Driven Initiatives",
      "Continuous Improvement and Updates"
    ],
    image: "https://cdn.builder.io/api/v1/image/assets/5a01b4cc8ca74f51b6159fb7fdcf99d7/238f016332fc1d36301d34a88aa10392a8258c4be3224468d317fab1e57bcdf6?apiKey=5a01b4cc8ca74f51b6159fb7fdcf99d7&"
  }
];

export const LandingPage = () => {
  return (
    <main className="flex flex-col items-end px-20 max-md:pl-5">
      <Header />
      <section className="flex overflow-hidden relative flex-col items-start w-full bg-white max-w-[1440px] max-md:max-w-full">
        <div className="flex z-0 flex-col self-stretch w-full bg-slate-950 min-h-[900px] max-md:max-w-full">
          {/* Rest of the existing JSX structure */}
        </div>
      </section>
      
      <section id="features" aria-label="Features">
        {/* Features section content */}
      </section>

      <section id="tokenomics" aria-label="Tokenomics">
        {/* Tokenomics section content */}
      </section>

      <section id="roadmap" aria-label="Roadmap" className="flex flex-col py-16 mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <h2 className="px-24 w-full text-4xl font-medium tracking-tighter leading-10 text-center text-white whitespace-nowrap max-md:px-5 max-md:max-w-full">
          Roadmap
        </h2>
        {roadmapData.map((phase, index) => (
          <RoadmapPhase
            key={index}
            phase={phase.phase}
            title={phase.title}
            items={phase.items}
            image={phase.image}
            imagePosition={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </section>

      <footer className="flex flex-col items-center px-16 mt-40 w-full bg-gray-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start pt-24 pr-14 pb-14 w-full max-w-[1308px] max-md:pr-5 max-md:max-w-full">
          <Logo />
          <div className="flex flex-col self-end mt-6 max-md:max-w-full">
            <h2 className="w-full text-4xl font-medium tracking-tighter leading-10 max-w-[480px] text-neutral-100 max-md:max-w-full">
              "Designed for traders of today, just like you."
            </h2>
            <div className="mt-10 w-full max-md:max-w-full">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};