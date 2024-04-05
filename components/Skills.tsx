'use client'

// Icons
import { SiCplusplus, SiCsharp, SiJavascript, SiNextdotjs, SiPython, SiTypescript, SiReact, SiVite, SiDotnet, SiBootstrap, SiTailwindcss, SiElastic, SiJenkins, SiTensorflow, SiPytorch, SiOpencv, SiRos, SiScikitlearn, SiAnsys, SiLinux, SiGit, SiAnaconda, SiJupyter, SiAtlassian, SiJquery } from "react-icons/si"
import { FaDatabase } from "react-icons/fa"
import { TbCircuitSwitchOpen } from "react-icons/tb";
import { GiRobotGrab } from "react-icons/gi";
import { ReactElement } from "react"

// UI
import ContentTab from "./ui/ContentTab"

interface SkillsProps {
    id: string,
}

interface LabeledIcons {
    label: string,
    react_icon: ReactElement
}

type IconTabMap = {
    [tab: string]: LabeledIcons[]
}

const iconSize: number = 36;

// List of all skill categories
const tabs: string[] = ["Languages", "Technologies", "Robotics", "Modeling", "Others"];

/* Based on the categories (outer list, needs to match tabs.length), keep a list of icons in that category 
Didn't initialize as a map because TypeScript dictionary keys can only be strings, not variables. 
This is crucial because I want to keep all category strings in tabs to reduce the usage of magic strings. */
const skills: LabeledIcons[][] = [
    [
        // Languages
        { label: "Python", react_icon: <SiPython size={iconSize}></SiPython> },
        { label: "C++", react_icon: <SiCplusplus size={iconSize}></SiCplusplus> },
        { label: "C#", react_icon: <SiCsharp size={iconSize}></SiCsharp> },
        { label: "JavaScript", react_icon: <SiJavascript size={iconSize}></SiJavascript> },
        { label: "TypeScript", react_icon: <SiTypescript size={iconSize}></SiTypescript> },
        { label: "SQL", react_icon: <FaDatabase size={iconSize}></FaDatabase> }
    ],
    [
        // Technologies
        { label: "React.js", react_icon: <SiReact size={iconSize}></SiReact> },
        { label: "Vite.js", react_icon: <SiVite size={iconSize}></SiVite> },
        { label: "Next.js", react_icon: <SiNextdotjs size={iconSize}></SiNextdotjs> },
        { label: "ASP.NET", react_icon: <SiDotnet size={iconSize}></SiDotnet> },
        { label: "jQuery", react_icon: <SiJquery size={iconSize}></SiJquery> },
        { label: "Bootstrap", react_icon: <SiBootstrap size={iconSize}></SiBootstrap> },
        { label: "TailwindCSS", react_icon: <SiTailwindcss size={iconSize}></SiTailwindcss> },
        { label: "Elasticsearch", react_icon: <SiElastic size={iconSize}></SiElastic> },
    ],
    [
        // Robotics
        { label: "Tensorflow", react_icon: <SiTensorflow size={iconSize}></SiTensorflow> },
        { label: "Pytorch", react_icon: <SiPytorch size={iconSize}></SiPytorch> },
        { label: "OpenCV", react_icon: <SiOpencv size={iconSize}></SiOpencv> },
        { label: "ROS", react_icon: <SiRos size={iconSize}></SiRos> },
        { label: "Scikit-learn", react_icon: <SiScikitlearn size={iconSize}></SiScikitlearn> }
    ],
    [
        // Modeling
        { label: "SolidWorks", react_icon: <GiRobotGrab size={iconSize}></GiRobotGrab> },
        { label: "ANSYS", react_icon: <SiAnsys size={iconSize}></SiAnsys> },
        { label: "Simulink", react_icon: <TbCircuitSwitchOpen size={iconSize}></TbCircuitSwitchOpen> }
    ],
    [
        // Others
        { label: "Linux", react_icon: <SiLinux size={iconSize}></SiLinux> },
        { label: "Git", react_icon: <SiGit size={iconSize}></SiGit> },
        { label: "Anaconda", react_icon: <SiAnaconda size={iconSize}></SiAnaconda> },
        { label: "Jupyter", react_icon: <SiJupyter size={iconSize}></SiJupyter> },
        { label: "Jira", react_icon: <SiAtlassian size={iconSize}></SiAtlassian> },
        { label: "Jenkins", react_icon: <SiJenkins size={iconSize}></SiJenkins> }
    ]
]

// Use the tabs array to build up a hashmap
const iconTabMap: IconTabMap = {}
for (let i = 0; i < tabs.length; i++) {
    iconTabMap[tabs[i].toLowerCase()] = skills[i];
}

const buildLabeledIcons = (labeledIcons: LabeledIcons[]): JSX.Element => {
    return (
        <>
            <div className="columns-3 justify-center items-center">
                {labeledIcons.map((items, index) => (
                    <div key={index} className="flex flex-col items-center px-6 py-4 break-inside-avoid-column">
                        <div className="mb-4">{items.react_icon}</div>
                        <div>{items.label}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

// Build up an interface that is acceptable by NextUI Tabs component
const skillTabs: { id: string; label: string; content: JSX.Element }[] = [];
tabs.forEach((tab: string) => {
    {
        skillTabs.push({
            id: tab.toLowerCase(),
            label: tab,
            content: buildLabeledIcons(iconTabMap[tab.toLowerCase()])
        })
    }
})

const Skills = ({ id }: SkillsProps) => {
    return (
        <>
            <div id={id} className="py-20 w-full h-[65vh]">
                <div className="text-black font-bold text-3xl mb-10">SKILLS</div>
                <div className="flex flex-col items-center justify-center">
                    <ContentTab id="skillstab" contents={skillTabs}></ContentTab>
                </div>
            </div>
        </>
    )
}

export default Skills