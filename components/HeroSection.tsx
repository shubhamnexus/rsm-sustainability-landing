'use client';

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-green-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left: Text Content (60%) */}
          <div className="w-full md:basis-3/5 max-w-2xl flex flex-col justify-center animate-fadeIn">
            <h1 className="text-[2.4rem] md:text-[2.8rem] leading-tight mb-3">
              <span className="text-[#3F9C35] font-bold inline-block hover:text-[#2E7D32] transition-colors duration-300">
                The Sustainability Toolkit:
              </span>
            </h1>
            <div className="text-[2.6rem] md:text-[3rem] leading-tight mb-1 text-[#5A5A5A]">
              Empowering Businesses for
            </div>
            <div className="text-[2.6rem] md:text-[3rem] leading-tight mb-6 text-[#5A5A5A]">
              Positive Change
            </div>
            <p className="text-gray-600 text-base md:text-lg mb-8">
              Empowering organizations to build expertise, drive change, and lead with impact. Designed for forward-thinking companies ready to turn sustainability into strategic advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://rsmacademy-sa.com/courses/36"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3.5 rounded-lg min-w-[180px] font-medium transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 inline-block text-center"
              >
                Explore Program Details
              </a>
              <a 
                href="https://rsmacademy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-3.5 rounded-lg sm:ml-8 min-w-[180px] font-medium transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 inline-block text-center"
              >
                Enroll Now
              </a>
            </div>
          </div>
          {/* Right: Video Only (40%) */}
          <div className="w-full md:basis-3/5 flex justify-end items-center pr-0 md:pr-8">
            <video
              src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/RSM-Hero.webm"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen"
              className="object-cover w-full h-auto max-w-[140%] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 