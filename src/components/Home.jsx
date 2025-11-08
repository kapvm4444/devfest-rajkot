import React from "react";
import BackgroundText from "./ui/BackgroundText.jsx";
import CtaMainContent from "./CtaMainContent.jsx";
import { BackgroundLines } from "./ui/BackgroundLines.jsx";
import { BackgroundBeams } from "./ui/BackgroundBeam.jsx";

const Home = () => {
  return (
    <>
      {/*Desktop View*/}
      <div className="relative min-h-screen hidden md:block">
        {/*Background*/}
        <div className="fixed inset-0 z-0">
          <BackgroundText text={"DevFest"} duration={0.5} />
        </div>

        {/*Main Content*/}
        <div className="relative z-20 pointer-events-none">
          <CtaMainContent />
        </div>
      </div>

      {/*Mobile View*/}
      <div className="relative min-h-screen block md:hidden">
        {/*<div className="absolute inset-0 z-0">
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4" />
        </div>*/}
        {/*Background*/}
        <div className="relative z-20 pointer-events-none">
          {/*Main Content*/}
          <CtaMainContent />
          <BackgroundBeams />
        </div>
      </div>
    </>
  );
};

export default Home;
