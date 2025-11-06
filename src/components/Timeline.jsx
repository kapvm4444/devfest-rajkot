import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Timeline = ({ data, className = "" }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    // Update height after a short delay to ensure content is rendered
    const timer = setTimeout(updateHeight, 100);

    return () => {
      window.removeEventListener("resize", updateHeight);
      clearTimeout(timer);
    };
  }, [data]);

  const scrollYProgress = useScrollYProgress();

  return (
    <div ref={ref} className={`relative max-w-8xl mx-auto ${className}`}>
      {data.map((item, index) => (
        <div key={index} className="flex justify-start pt-10 md:pt-40">
          <div className="flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-80">
            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-[#f9ab00] font-google-sans">
              {item.time.split(" - ")[0]}
            </h3>
          </div>

          <div className="relative pl-20 pr-4 md:pl-4 w-full">
            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#f9ab00] font-google-sans">
              {item.time.split(" - ")[0]}
            </h3>
            <div className="bg-[#f0f0f0] p-8 rounded-lg shadow-sm border border-gray-200 min-w-0 w-full max-w-6xl">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 font-google-sans">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed font-google-sans text-base md:text-lg">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div
        style={{
          height: height + "px",
        }}
        className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-300 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
      >
        <motion.div
          style={{
            height: scrollYProgress,
          }}
          className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#ea4335] via-[#4285f4] to-[#34a853] rounded-full"
        />
      </div>
    </div>
  );
};

const useScrollYProgress = () => {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollYProgress(`${Math.min(progress, 100)}%`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollYProgress;
};

export default Timeline;
