"use client";
import React from "react";
import NextImage from "next/image";
import { Button, Image, Link, Tooltip } from "@nextui-org/react";
import { Github, Linkedin, Mail } from "lucide-react";

import SlideUp from "@/components/SlideUp";
import { siteConfig } from "@/config/site";

export default function Thanks() {
  function scrollToTop() {
    window.scrollTo({ top: 0 });
  }

  return (
    <section className="h-screen flex flex-col space-y-16 md:flex-row md:space-x-16 items-center justify-center">
      <SlideUp>
        <>
          <div className="font-semibold text-2xl lg:text-4xl xl:text-5xl">
            Thanks for stopping by!
          </div>
          <div className="flex gap-4 justify-center my-6">
            <Tooltip className="p-2" content="Github">
              <Link isExternal href={siteConfig.links.github} title="Github">
                <Github size={30} />
              </Link>
            </Tooltip>
            <Tooltip className="p-2" content="LinkedIn">
              <Link
                isExternal
                href={siteConfig.links.linkedin}
                title="LinkedIn"
              >
                <Linkedin size={30} />
              </Link>
            </Tooltip>
            <Tooltip className="p-2" content="E-Mail">
              <Link isExternal href={siteConfig.links.email} title="E-Mail">
                <Mail size={30} />
              </Link>
            </Tooltip>
          </div>
          <Button radius="full" size="lg" onClick={() => scrollToTop()}>
            <p className="text-sm md:text-medium lg:text-lg">Back to Top</p>
          </Button>
        </>
      </SlideUp>
      <div className="drop-shadow-2xl rotate-[5deg] hover:rotate-0 transition-transform duration-700 ease-in-out">
        <Image
          isBlurred
          alt="NextUI hero Image"
          as={NextImage}
          className="m-2 max-w-full max-h-full object-cover"
          height={350}
          quality={100}
          src="/images/travel_3.jpg"
          width={400}
        />
      </div>
    </section>
  );
}
