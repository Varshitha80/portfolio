import { useState } from "react";
import { SiLeetcode, SiHackerrank, SiHackerearth , SiCodewars } from "react-icons/si";

export default function CodingProfiles() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
      {/* Toggle Button */}
      <button
  onClick={() => setIsOpen(!isOpen)}
  className={`h-20 w-12 flex items-center justify-center bg-gray-800/80 backdrop-blur-md shadow-lg 
    hover:bg-purple-900 transition-all duration-500 ease-in-out z-50 relative 
    ${isOpen ? "translate-x-[-16rem] rounded-l-lg" : "translate-x-0 rounded-l-lg"}`}
>
  <span className="text-gray-300 text-xs font-bold tracking-tight whitespace-nowrap transform -rotate-90 origin-center w-full text-center py-20">
    HACK HUB
  </span>
</button>
      {/* Profiles Panel */}
      <div
        className={`absolute right-0 bg-gray-800/80 backdrop-blur-lg shadow-lg border-l border-gray-700/30 
          transform transition-transform duration-500 ease-in-out overflow-hidden
          ${isOpen ? "translate-x-0 w-64 h-auto px-5 py-4 opacity-100" : "translate-x-full w-0 h-0 opacity-0"}`}
      >
        <h3 className="text-lg font-bold text-purple-400 mb-2">
          Competitive Coding
        </h3>

        <div className="flex flex-col gap-4">
          <a
            href="https://leetcode.com/u/Varshi-148/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <SiLeetcode className="text-2xl text-[#FFA116] transition-transform group-hover:scale-125" />
            <span className="text-gray-300 group-hover:text-purple-300 transition-colors">
              LeetCode Solutions
            </span>
          </a>

          <a
            href="https://www.hackerrank.com/profile/varshithavemula"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <SiHackerrank className="text-2xl text-[#2EC866] transition-transform group-hover:scale-125" />
            <span className="text-gray-300 group-hover:text-purple-300 transition-colors">
              HackerRank Skills
            </span>
          </a>

          <a
            href="https://www.hackerearth.com/@varshitha163/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <SiHackerearth className="text-2xl text-green-500 transition-transform group-hover:scale-125" />
            <span className="text-gray-300 group-hover:text-purple-300 transition-colors">
              HackerEarth Skills
            </span>
          </a>

          <a
            href="https://www.codewars.com/users/Varshithavemula"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <SiCodewars className="text-2xl text-[#B1361E] transition-transform group-hover:scale-125" />
            <span className="text-gray-300 group-hover:text-purple-300 transition-colors">
              Code Wars Challenges
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
