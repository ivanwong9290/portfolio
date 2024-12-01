"use client";
import {
  SiBootstrap,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiDotnet,
  SiElastic,
  SiFastapi,
  SiJavascript,
  SiNextdotjs,
  SiOpencv,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiTypescript,
  SiRos,
  SiAnaconda,
  SiJenkins,
  SiGit,
  SiJira,
  SiLinux,
} from "react-icons/si";
import { FaBolt, FaDatabase } from "react-icons/fa6";
import { TbChartScatter3D } from "react-icons/tb";
import SlideLeft from "@/components/SlideLeft";

export default function Skills() {
  const iconSize: number = 30;
  const delay_timer = 250;
  const skills = [
    {
      category: "Languages",
      skills: [
        { name: "Python", icon: <SiPython size={iconSize} /> },
        { name: "C#", icon: <SiCsharp size={iconSize} /> },
        { name: "C++", icon: <SiCplusplus size={iconSize} /> },
        { name: "Javascript", icon: <SiJavascript size={iconSize} /> },
        { name: "Typescript", icon: <SiTypescript size={iconSize} /> },
      ],
    },
    {
      category: "Front-end",
      skills: [
        { name: "React", icon: <SiReact size={iconSize} /> },
        { name: "Next.js", icon: <SiNextdotjs size={iconSize} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={iconSize} /> },
        { name: "CSS", icon: <SiCss3 size={iconSize} /> },
        { name: "Bootstrap", icon: <SiBootstrap size={iconSize} /> },
      ],
    },
    {
      category: "Back-end/Database",
      skills: [
        { name: "ASP.NET", icon: <SiDotnet size={iconSize} /> },
        { name: "FastAPI", icon: <SiFastapi size={iconSize} /> },
        { name: "Elasticsearch", icon: <SiElastic size={iconSize} /> },
        { name: "SQL", icon: <FaDatabase size={iconSize} /> },
        { name: "gRPC", icon: <FaBolt size={iconSize} /> },
      ],
    },
    {
      category: "Robotics",
      skills: [
        { name: "OpenCV", icon: <SiOpencv size={iconSize} /> },
        { name: "Pytorch", icon: <SiPytorch size={iconSize} /> },
        { name: "Tensorflow", icon: <SiTensorflow size={iconSize} /> },
        { name: "ROS", icon: <SiRos size={iconSize} /> },
        { name: "PCL", icon: <TbChartScatter3D size={iconSize} /> },
      ],
    },
    {
      category: "Dev Ops",
      skills: [
        { name: "Anaconda", icon: <SiAnaconda size={iconSize} /> },
        { name: "Jenkins", icon: <SiJenkins size={iconSize} /> },
        { name: "Git", icon: <SiGit size={iconSize} /> },
        { name: "Atlassian Jira", icon: <SiJira size={iconSize} /> },
        { name: "Linux", icon: <SiLinux size={iconSize} /> },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col space-y-12 lg:flex-row lg:space-x-40 max-w-7xl mb-16 items-center justify-between"
      id="skills"
    >
      <div className="flex flex-col">
        <p className="text-4xl md:text-6xl lg:text-8xl font-semibold tracking-tight uppercase text-left">
          Skills
        </p>
        <p className="text-gray-600 hidden lg:block text-xl mt-4 text-center max-w-2xl">
          A selection of technologies and tools I’ve honed over the years
        </p>
      </div>

      <div className="flex flex-col space-y-8">
        {skills.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-start w-full pb-4 pe-4 border-b-1.5 border-r-1.5 border-gray-500"
          >
            <SlideLeft delay={delay_timer + index * 100}>
              <>
                <p className="text-xl md:text-2xl font-semibold uppercase tracking-wider mb-4">
                  {section.category}
                </p>
                <div className="grid gap-2 grid-cols-3 md:flex md:space-x-8">
                  {section.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col space-y-2 text-sm md:text-md font-light tracking-wide items-center justify-center"
                    >
                      {skill.icon}
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </>
            </SlideLeft>
          </div>
        ))}
      </div>
    </div>
  );
}
