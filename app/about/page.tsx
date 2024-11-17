"use client";
import React from "react";
// import { Image } from "@nextui-org/react";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import SlideUp from "@/components/SlideUp";

export default function About() {
  const [currentImage, setCurrentImage] = React.useState<number>(-1);
  const sectionRefs = React.useRef<HTMLDivElement[]>([]);
  const scrollableRef = React.useRef<HTMLDivElement>(null);

  const data: { image: string; title: string; description: string }[] =
    siteConfig.about;

  // Transition for image index state based on intersection observer
  React.useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement,
          );

          if (index !== -1) {
            setCurrentImage(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0.5,
    });

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section
      className="flex min-h-screen flex-col md:flex-row md:space-x-16"
      id="about"
    >
      {/* Left sticky image section */}
      <div className="sticky top-16 md:top-0 z-10 h-[45vh] w-full md:w-1/2 md:h-[calc(100vh+4rem)] flex items-center justify-center drop-shadow-2xl">
        {data.map((src, index) => (
          <div
            key={index}
            className={`md:absolute w-full md:h-[calc(100vh-4rem)] transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              fill
              alt="Scrolling image"
              className="rounded-none object-cover"
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={src.image}
            />
          </div>
        ))}
      </div>

      {/* Right scrollable text section */}
      <div ref={scrollableRef} className="h-1/2 md:w-1/2 md:min-h-screen">
        {data.map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) sectionRefs.current[index] = el;
            }}
            className="flex flex-col h-[60vh] mb-24 md:mb-0 md:h-[calc(100vh+4rem)] space-y-6 justify-end md:justify-center"
          >
            <SlideUp delay={250}>
              <p className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                {src.title}
              </p>
            </SlideUp>
            <SlideUp delay={250}>
              <p className="text-slate-400 text-sm md:text-lg text-left">
                {src.description}
              </p>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
}
