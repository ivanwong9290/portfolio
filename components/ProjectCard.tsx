import { useState } from "react";

type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="group relative h-full grid grid-cols-3 items-center transition-all duration-500">
      {/* Image Column */}
      <div
        className="col-span-3 overflow-hidden relative transition-all duration-500 group-hover:col-span-1"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Description Column */}
      <div
        className="col-span-0 bg-black text-white flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 group-hover: group-hover:col-span-2 transition-all duration-500"
      >
        <p className="text-xl">{project.description}</p>
      </div>
    </div>
  );
}
