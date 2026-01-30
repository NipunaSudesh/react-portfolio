import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  des,
  src,
  git,
  live,
  tech = [],
}) {
  return (
    <div
      className="relative h-[480px] rounded-xl
      bg-gradient-to-br from-[#0f172a] to-[#1e293b]
      shadow-md hover:shadow-xl transition-all duration-300
      overflow-hidden flex flex-col w-full"
    >
      {/* IMAGE */}
      <div className="h-48 w-full overflow-hidden flex-shrink-0">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover
          transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="px-4 py-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white mb-1">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="text-[13px] text-gray-300 leading-relaxed
          max-h-[100px] overflow-y-auto pr-1"
        >
          {des}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-1 mt-1">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-[11px] px-2 py-[2px] rounded-full
              bg-white text-designColor
              border border-designColor/30"
            >
              {item}
            </span>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-2  pt-4 absolute bottom-4 left-4 right-4">
          {git && (
            <a
              href={git}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2
              py-2 text-xs rounded-md bg-black/60 text-gray-200
              hover:bg-black hover:text-designColor transition font-semibold"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2
              py-2 text-xs rounded-md bg-designColor text-white
              hover:bg-designColor/80 transition font-semibold"
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
