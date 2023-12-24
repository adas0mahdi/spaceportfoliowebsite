import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="Projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/KodeShop.png"
          title="KodeShop"
          description="Shop smart with KodeShop! Electronics, fashion, and more all in one place. Secure transactions, quick orders, and top-notch support. Elevate your shopping now!"
        />
        <ProjectCard
          src="/Website-1.png"
          title="Kodeledger"
          description="Master your finances with KodeLedger! Simplify bookkeeping, track transactions seamlessly, and achieve financial clarity effortlessly. Empower your success today!"
        />
        <ProjectCard
          src="/Portfolio-1.png"
          title="Portfolio"
          description="Dive into my space-themed portfolio! Explore Galaxy Explorer, read Nebula Blog, and discover stellar tech skills. Elevate your digital universe!"
        />
      </div>
    </div>
  );
};

export default Projects;