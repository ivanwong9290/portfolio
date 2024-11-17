"use client";
import { Image, Link, Tooltip } from "@nextui-org/react";
import NextImage from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

import SlideUp from "@/components/SlideUp";
import { siteConfig } from "@/config/site";

export default function Landing() {
  return (
    <section className="h-screen flex items-center justify-center" id="home">
      <div className="grid grid-cols-6 lg:grid-cols-12 max-w-7xl items-center justify-items-center">
        <div className="col-span-6 lg:col-span-7 order-2 lg:order-1">
          <div className="flex-col my-8">
            <SlideUp>
              <>
                <div className="font-semibold text-2xl lg:text-4xl xl:text-5xl">
                  👋🏻 Hey there, I&apos;m Ivan Wong
                </div>
              </>
            </SlideUp>
            <SlideUp delay={1000}>
              <>
                <div className="text-slate-500 text-md xl:text-xl mt-4">
                  Web Developer, Software Engineer, Roboticist
                </div>
                <div className="text-slate-500 mt-8 xl:text-lg">
                  📍 Boston, MA
                </div>
              </>
            </SlideUp>
            <SlideUp delay={2000}>
              <>
                <div className="flex gap-4 justify-center mt-8">
                  <Tooltip className="p-2" content="Github">
                    <Link
                      isExternal
                      href={siteConfig.links.github}
                      title="Github"
                    >
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
                    <Link
                      isExternal
                      href={siteConfig.links.email}
                      title="E-Mail"
                    >
                      <Mail size={30} />
                    </Link>
                  </Tooltip>
                </div>
              </>
            </SlideUp>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-5 order-1 lg:order-2">
          <div className="rounded-full overflow-hidden drop-shadow-2xl">
            <Image
              isBlurred
              alt="NextUI hero Image"
              as={NextImage}
              className="max-w-full max-h-full object-cover"
              height={400}
              quality={100}
              src="/images/portrait.jpg"
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
