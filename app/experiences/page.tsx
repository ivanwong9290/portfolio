"use client";
import { Link, Chip } from "@nextui-org/react";
import React from "react";

import SlideUp from "@/components/SlideUp";
import SlideLeft from "@/components/SlideLeft";

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Magna Electronics",
      type: "Full-time",
      duration: "Jan 2022 - Present",
      description: `Build, maintain, and style internal search-based application for drive data collections. Spearhead React front-end framework transition while working closely to maintain existing C# back-end server. Enable flexible data searchability using multimodal AI and Elasticsearch. Responsible for Jenkins CI/CD pipeline for drive data upload and metadata extractions.`,
      skills: [
        "Javascript/Typescript",
        "React",
        "HTML",
        "CSS",
        "C#",
        "Python",
        "Elasticsearch",
        "SQL",
        "Artificial Intelligence",
        "Jenkins",
      ],
    },
    {
      id: 2,
      title: "Graduate Research Assistant",
      company: "CMU Robotics Institute",
      type: "Full-time",
      duration: "May 2021 - Dec 2021",
      description: `Researched computer vision and point cloud trimming methods to identify apples in a low-light environment to be used in agricultural robotics. Tracked detected apples using a combination of onboard kinematics, photogrammetry, and Kalman filters.`,
      skills: [
        "Python",
        "OpenCV",
        "ROS",
        "PCL",
        "Linux",
        "Photogrammetry",
        "Kalman Filter",
      ],
    },
    {
      id: 3,
      title: "Manipulator Planning",
      company: "Carnegie Mellon University",
      type: "Class Project",
      duration: "Oct 2021 - Dec 2021",
      description: `Designed a planning algorithm using A* search to return an optimal set of procedures to achieve a manipulation goal while meeting physical and environmental constraints.`,
      skills: ["C++", "Robot Dynamics", "Motion Planning", "A* Search"],
    },
    {
      id: 4,
      title: "MoonRanger Project",
      company: "CMU Robotics Institute",
      type: "School Organization",
      duration: "Aug 2020 - May 2021",
      description: `Collaborated with mechanical engineers to design the wheel module of a moon rover in SolidWorks. Provided stress analysis in ANSYS and participated in-person sand testings to observe rover behavior.`,
      skills: ["ANSYS", "SolidWorks", "Mechanical Design"],
    },
    {
      id: 5,
      title: "Vehicle & Drone Control Systems",
      company: "Carnegie Mellon University",
      type: "Class Project",
      duration: "Aug 2020 - Dec 2020",
      description: `Coded multiple controller algorithms such as PID, LQR and EKF to simulate vehicle control over a test course. Implemented an adaptive controller algorithm that simulated the control of a drone with a defect motor.`,
      skills: ["Control Theory", "Vehicle Dynamics", "Extended Kalman Filters"],
    },
  ];

  const [experienceIndex, setExperienceIndex] = React.useState(0);
  const delay_timer = 250;

  return (
    <div
      className="min-h-screen flex flex-col space-y-12 max-w-7xl mb-16 items-center lg:items-start justify-center"
      id="experiences"
    >
      <p className="text-4xl md:text-6xl lg:text-8xl font-semibold tracking-tight uppercase text-left">
        Experiences
      </p>
      <div className="flex flex-col space-y-8 space-x-0 lg:flex-row lg:space-x-24 lg:space-y-0 w-full">
        <div className="flex flex-col">
          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-col items-start">
              <SlideLeft delay={delay_timer + index * 100}>
                <Link
                  isBlock
                  className="text-md lg:text-2xl font-semibold uppercase tracking-wider mb-2 lg:mb-4 text-nowrap"
                  color="foreground"
                  underline="focus"
                  onClick={() => setExperienceIndex(index)}
                >
                  0{experience.id} {experience.title}
                </Link>
              </SlideLeft>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center lg:items-start pt-8 border-t-1 lg:pt-0 lg:ps-8 lg:border-l-1 lg:border-t-0 border-current">
          <SlideUp delay={250}>
            <>
              <p className="text-xl lg:text-3xl font-semibold tracking-wide">
                {experiences[experienceIndex].title}
              </p>
              <p className="text-md lg:text-lg tracking-wide opacity-50">
                {experiences[experienceIndex].company} {"• "}
                {experiences[experienceIndex].type}
              </p>
              <p className="text-md lg:text-lg tracking-wide opacity-50">
                {experiences[experienceIndex].duration}
              </p>
              <p className="text-sm lg:text-md font-light text-left tracking-wide mt-10 mb-4">
                {experiences[experienceIndex].description}
              </p>
              <div className="flex flex-row gap-2 flex-wrap">
                {experiences[experienceIndex].skills.map((skill, index) => (
                  <Chip key={index} className="text-nowrap">
                    {skill}
                  </Chip>
                ))}
              </div>
            </>
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
