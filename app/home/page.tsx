"use client";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

import SlideUp from "@/components/SlideUp";

export default function Landing() {
  return (
    <section id="home">
      <div className="grid grid-cols-6 lg:grid-cols-12 max-w-7xl items-center justify-items-center lg:mt-24">
        <div className="col-span-6 lg:col-span-7 order-2 lg:order-1">
          <div className="flex-col my-8">
            <SlideUp>
              <>
                <div className="font-semibold text-2xl lg:text-4xl xl:text-5xl">
                  👋🏻 Hey there, I&apos;m Ivan Wong
                </div>
              </>
            </SlideUp>
            <SlideUp delay={2000}>
              <>
                <div className="text-slate-500 text-md xl:text-xl mt-4">
                  Web Developer, Software Engineer, Roboticist
                </div>
                <div className="text-slate-500 mt-8 xl:text-lg">
                  📍 Boston, MA
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
              className="object-cover"
              height={300}
              quality={100}
              src="/images/portrait.jpg"
              width={300}
            />
          </div>
        </div>
      </div>
    </section >
  );
}
