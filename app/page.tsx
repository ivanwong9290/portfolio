'use client'

import { NextUIProvider } from "@nextui-org/react";
import { useState, useRef, useEffect } from "react";

import AboutMe from "@/components/AboutMe";
import Profile from "@/components/Profile";
import NavigationBar from "@/components/NavigationBar";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import Hobbies from "@/components/Hobbies";

import { calcPagePercentage } from "@/components/Utils";

const _home = "#"
const _about = "about"
const _skills = "skills"
const _exp = "experiences"
const _hobbies = "hobbies"

const navBarItemData: { name: string, route: string, description: string }[] = [
  { name: `${_home}`, route: `#`, description: "Home" },
  { name: `${_about}`, route: `#${_about}`, description: "About Me" },
  { name: `${_skills}`, route: `#${_skills}`, description: "Skills" },
  { name: `${_exp}`, route: `#${_exp}`, description: "Experiences" },
  { name: `${_hobbies}`, route: `#${_hobbies}`, description: "Hobbies" }
]

export default function Home() {
  // Used to track active sections for navigation bar
  const [activeSection, setActiveSection] = useState(`${_home}`);

  // Used to track vertical offset percentage of the page
  // const scrollPercentage = useRef(0);
  // const maxHeight = useRef(0);

  // Render effects
  useEffect(() => {
    // // Update percentage
    // maxHeight.current = document.documentElement.scrollHeight - window.innerHeight;
    // window.addEventListener('scroll', () => {
    //   scrollPercentage.current = calcPagePercentage(document.documentElement.scrollTop, maxHeight.current);
    // });

    // Update active section
    const sections = [
      document.getElementById(`${_home}`),
      document.getElementById(`${_about}`),
      document.getElementById(`${_skills}`),
      document.getElementById(`${_exp}`),
      document.getElementById(`${_hobbies}`)
    ]

    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.8 };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id == `${_home}`) {
            setActiveSection(`${_home}`);
          }
          if (entry.target.id == `${_about}`) {
            setActiveSection(`${_about}`);
          }
          if (entry.target.id == `${_skills}`) {
            setActiveSection(`${_skills}`);
          }
          if (entry.target.id == `${_exp}`) {
            setActiveSection(`${_exp}`);
          }
          if (entry.target.id == `${_hobbies}`) {
            setActiveSection(`${_hobbies}`);
          }
        }
      })
    }, observerOptions);

    sections?.forEach(section => {
      section && observer.observe(section);
    })
  }, [activeSection]);

  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center bg-neutral-50 pb-[50vh]">
        <NavigationBar logo="IVAN WONG" navItems={navBarItemData} activeSection={activeSection}></NavigationBar>
        <div className="w-full max-w-screen">
          <Profile id={_home} profilePicPath="/PXL_20231229_115108709.jpg"></Profile>
        </div>
        <div className="w-1/2 max-w-screen">
          <AboutMe id={_about} aboutMePicPath="/IMG_9641.jpg"></AboutMe>
          <Skills id={_skills}></Skills>
        </div>
        <div className="w-full max-w-screen">
          <Experiences id={_exp}></Experiences>
        </div>
        <div className="translate-y-[50vh]">
          <Hobbies id={_hobbies}></Hobbies>
        </div>
      </main>
    </NextUIProvider>
  );
}
