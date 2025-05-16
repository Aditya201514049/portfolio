import React from "react";
import Image from "next/image";

// Map of technology names to their proper devicon paths with fallbacks
const techIconMap = {
  react: { path: "react/react-original", color: true },
  nodejs: { path: "nodejs/nodejs-original", color: true },
  express: { path: "express/express-original", color: false },
  mongodb: { path: "mongodb/mongodb-original", color: true },
  nextjs: { path: "nextjs/nextjs-original", color: false },
  firebase: { path: "firebase/firebase-plain", color: true },
};

// Images for logos that can't be found in devicon
const specialLogos = {
  shadcn: "https://ui.shadcn.com/favicon.ico",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain-wordmark.svg",
  daisyui: "https://raw.githubusercontent.com/saadeghi/daisyui/master/src/docs/static/images/daisyui-logo/favicon-192.png"
};

const WorkCard = ({ img, name, description, onClick, techStack, githubUrl }) => {
  // Function to handle GitHub link click without triggering the parent card click
  const handleGitHubClick = (e) => {
    if (githubUrl) {
      e.stopPropagation(); // Prevent the parent card's onClick from firing
      window.open(githubUrl, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto">
        <Image
          alt={name}
          src={`/images/${img}`}
          width={500} // Set the desired width
          height={300} // Set the desired height
          objectFit="cover"
          className="hover:scale-105 transition-all ease-out duration-300"
        />
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      
      {techStack && techStack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {/* GitHub repository link if available */}
          {githubUrl && (
            <div className="relative group">
              <div 
                className="w-12 h-12 flex items-center justify-center rounded-md p-1.5 bg-white dark:bg-gray-800 shadow-sm cursor-pointer"
                onClick={handleGitHubClick}
              >
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub Repository"
                  width={40}
                  height={40}
                  className="transition-all duration-300 hover:scale-110 dark:invert"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                GitHub Repo
              </span>
            </div>
          )}
          {techStack.map((tech, index) => {
            // Check if we have a special logo for this tech
            if (specialLogos[tech]) {
              return (
                <div key={index} className="relative group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md p-1.5 bg-white dark:bg-gray-800 shadow-sm">
                    <img 
                      src={specialLogos[tech]}
                      alt={tech}
                      width={40}
                      height={40}
                      className="transition-all duration-300 hover:scale-110"
                    />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {tech.charAt(0).toUpperCase() + tech.slice(1)}
                  </span>
                </div>
              );
            }
            
            const iconInfo = techIconMap[tech] || { path: `${tech}/${tech}-original`, color: true };
            const iconSuffix = iconInfo.color ? "-colored" : "";
            const techIconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconInfo.path}${iconSuffix}.svg`;
            
            return (
              <div key={index} className="relative group">
                <div className="w-12 h-12 flex items-center justify-center rounded-md p-1.5 bg-white dark:bg-gray-800 shadow-sm">
                  <img 
                    src={techIconUrl}
                    alt={tech}
                    width={40}
                    height={40}
                    className="transition-all duration-300 hover:scale-110"
                    onError={(e) => {
                      // Try without color suffix
                      const nonColoredUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconInfo.path}.svg`;
                      e.target.src = nonColoredUrl;
                      
                      // Add another error handler to try plain version
                      e.target.onerror = () => {
                        const plainVersion = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-plain.svg`;
                        e.target.src = plainVersion;
                        
                        // Try original version
                        e.target.onerror = () => {
                          const originalVersion = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;
                          e.target.src = originalVersion;
                          
                          // Final fallback to devicon logo
                          e.target.onerror = () => {
                            e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                            e.target.onerror = null; // Prevent infinite loop
                          };
                        };
                      };
                    }}
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WorkCard;
