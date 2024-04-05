'use client'

import { useState } from 'react';
import ExperienceCard from "./ui/ExperienceCard"

interface ExperienceBaseProps {
    id: string
}

interface ExperienceProps {
    name: string,
    isJob: boolean,
    position: string,
    cover: string,
    dark_mode: boolean,
    body: string
}

const experiences: ExperienceProps[] = [
    {
        name: "Magna",
        isJob: true,
        position: "Software Engineer",
        cover: "NR_Traffic_Jam_Assist-01.jpg",
        dark_mode: true,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "CMU Robotics Institute",
        isJob: true,
        position: "Graduate Research Assistant",
        cover: "F008.png",
        dark_mode: false,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget magna fermentum iaculis eu. Ac felis donec et odio pellentesque. Urna id volutpat lacus laoreet non. Adipiscing commodo elit at imperdiet dui accumsan sit. Nunc consequat interdum varius sit amet. Nisi scelerisque eu ultrices vitae auctor. Ut lectus arcu bibendum at varius vel. Pellentesque massa placerat duis ultricies. Nam aliquam sem et tortor consequat. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Semper risus in hendrerit gravida rutrum quisque non. Nisl pretium fusce id velit ut tortor pretium viverra."
    },
    {
        name: "Symbolic Planning for Manipulation",
        isJob: false,
        position: "Carnegie Mellon University",
        cover: "AStar.png",
        dark_mode: true,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium. Felis imperdiet proin fermentum leo vel. Felis bibendum ut tristique et egestas quis ipsum. Sed augue lacus viverra vitae. Ut sem nulla pharetra diam sit amet nisl suscipit. Velit sed ullamcorper morbi tincidunt. Nunc congue nisi vitae suscipit tellus mauris a. Sed odio morbi quis commodo odio aenean sed. Ac odio tempor orci dapibus ultrices in. Massa sed elementum tempus egestas sed sed risus. Cursus risus at ultrices mi tempus imperdiet. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non."
    },
    {
        name: "MoonRanger Project",
        isJob: false,
        position: "Carnegie Mellon University",
        cover: "moonranger2.jpg",
        dark_mode: false,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim. Varius morbi enim nunc faucibus. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Tristique senectus et netus et malesuada fames ac turpis. A pellentesque sit amet porttitor eget dolor morbi non arcu. Vulputate sapien nec sagittis aliquam malesuada bibendum. Vitae suscipit tellus mauris a diam maecenas sed. Faucibus pulvinar elementum integer enim neque volutpat ac. Sem viverra aliquet eget sit amet tellus. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Sollicitudin nibh sit amet commodo. Facilisis sed odio morbi quis commodo odio aenean sed. Volutpat ac tincidunt vitae semper quis lectus. Arcu non sodales neque sodales ut etiam. Vitae elementum curabitur vitae nunc sed velit dignissim. Morbi blandit cursus risus at ultrices. Mattis molestie a iaculis at erat pellentesque adipiscing commodo."
    },
    {
        name: "Vehicle & Drone Control Systems",
        isJob: false,
        position: "Carnegie Mellon University",
        cover: "LCS.png",
        dark_mode: false,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac habitasse platea. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. In fermentum et sollicitudin ac orci. Orci nulla pellentesque dignissim enim sit. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Feugiat in ante metus dictum. Justo nec ultrices dui sapien eget mi. Fermentum iaculis eu non diam phasellus vestibulum. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Egestas sed sed risus pretium quam vulputate dignissim. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Consectetur a erat nam at lectus."
    }
]


const Experiences = ({ id }: ExperienceBaseProps) => {
    const [experienceIndex, setExperienceIndex] = useState(0);
    return (
        <div id={id} className="py-20 h-[55vh]">
            <div className="text-black font-bold text-3xl mb-10 ps-8 pt-3 text-center">EXPERIENCES</div>
            <div className="pt-5 absolute w-[40vh] h-[98vw] origin-top-left -rotate-90 translate-y-[40vh] overflow-y-scroll no-scrollbar">
                {experiences.map((element: ExperienceProps, index) => {
                    return (<ExperienceCard
                        name={element.name} key={index} isJob={element.isJob} cover={element.cover} dark_mode={element.dark_mode} position={element.position} onclick={() => setExperienceIndex(index)}
                    ></ExperienceCard>)
                })}
            </div>
            <div className="text-black text-large translate-y-[40vh] px-8 py-8">
                {experiences[experienceIndex].body}
            </div>
        </div>
    )
}

export default Experiences