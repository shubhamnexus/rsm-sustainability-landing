"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ESGKnowledgeSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative px-8 pt-8 pb-20 bg-[#192334] overflow-hidden rounded-[24px] mx-[160px] mt-[16px] mb-[48px]"
    >
      
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/Frame%201171275922.png" // Replace with provided background image link
          alt="Background"
          fill
          className="object-cover object-center opacity-30 rounded-[24px]"
          priority
        />
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Gain ESG Knowledge That Drives Individual and Business Impact
          </h2>
          <p className="text-white/80 max-w-4xl mx-auto text-base md:text-lg">
            Whether you're an individual professional looking to build ESG expertise, or an organization aiming to drive sustainable transformation
            — our training programs are designed to support your goals.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Upcoming Session Card */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start justify-between min-h-[220px] border border-white hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#27C26C]/10 text-[#27C26C] mr-3">
                <Image
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/div%20(3).png"
                  alt="Upcoming Session Icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </span>
              <span className="font-semibold text-lg text-gray-900">Upcoming Session</span>
            </div>
            <div className="mb-4">
              <div className="text-gray-700 font-medium mb-1">May 15-18, 2025</div>
              <div className="text-gray-500 text-sm">Limited seats available. Register early to secure your spot.</div>
            </div>
            <a
              href="https://rsmacademy-sa.com/courses/36"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#27C26C] hover:bg-[#1fa85a] text-white font-semibold px-6 py-2 rounded transition-all duration-300 text-sm inline-block text-center"
            >
              Explore Program Details
            </a>
          </motion.div>
          {/* Request a Custom Program Card */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start justify-between min-h-[220px] border border-white hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#009CDE]/10 text-[#009CDE] mr-3">
                <Image
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/div%20(5).png"
                  alt="Request a Custom Program Icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </span>
              <span className="font-semibold text-lg text-gray-900">Request a Custom Program</span>
            </div>
            <div className="mb-4">
              <div className="text-gray-700 text-sm mb-1">For customized training program for your organization, contact us at:</div>
              <a href="mailto:training@rsm-sa.com" className="text-[#27C26C] font-medium text-base">training@rsm-sa.com</a>
            </div>
            <a
              href="https://rsmacademy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#009CDE] hover:bg-[#007bb3] text-white font-semibold px-6 py-2 rounded transition-all duration-300 text-sm inline-block text-center"
            >
              Contact us Today
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 