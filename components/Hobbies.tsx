'use client'

import { Image } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";

interface HobbiesBaseProps {
    id: string,
}

const _travel = "travel"
const _hiking = "hiking"
const _photography = "photography"

const observerOptions = { root: null, rootMargin: '0px', threshold: 0.9 };
const IsVisible = (ref: any) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, observerOptions);

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}

const Hobbies = ({ id }: HobbiesBaseProps) => {
    const travel = useRef(null);
    const travelVisible = IsVisible(travel);
    const hiking = useRef(null);
    const hikingVisible = IsVisible(hiking);
    const photography = useRef(null);
    const pgVisible = IsVisible(photography);

    return (
        <div id={id} className="pt-20 pb-14 px-8 text-black">
            <div className="font-bold text-3xl mb-10 ps-8 pb-8 text-center">HOBBIES</div>
            <div className="grid grid-cols-2 gap-4">
                <div className="h-[70vh] col-span-1">
                    <div className={travelVisible ? "" : "hidden"}>
                        <Image
                            loading="lazy"
                            alt="Moo"
                            className="object-cover w-screen rounded-none"
                            src="IMG_1243.jpg"
                        ></Image>
                    </div>
                    <div className={hikingVisible ? "" : "hidden"}>
                        <Image
                            loading="lazy"
                            alt="Moo"
                            className="object-cover w-screen rounded-none"
                            src="DSC06343.ARW.jpg"
                        ></Image>
                    </div>
                    <div className={pgVisible ? "" : "hidden"}>
                        <Image
                            loading="lazy"
                            alt="Moo"
                            className="object-cover w-screen rounded-none"
                            src="IMG_2939.jpg"
                        ></Image>
                    </div>
                </div>
                <div id="hobbies_body" className="h-[70vh] col-span-1 overflow-y-scroll scroll-contain no-scrollbar space-y-[25vh] snap-y">
                    <div ref={travel} className="ms-4 snap-start">
                        <div className="text-6xl font-semibold sticky -top-[0.025px] start-0 pb-3 bg-neutral-50 block">Avid Traveler</div>
                        <div className="text-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis urna. Morbi quis commodo odio aenean sed adipiscing diam. Quisque id diam vel quam elementum pulvinar etiam non. Suspendisse sed nisi lacus sed viverra. Nisl rhoncus mattis rhoncus urna. Et netus et malesuada fames ac turpis egestas. Nunc sed blandit libero volutpat sed cras ornare arcu. Suscipit tellus mauris a diam maecenas sed. Non odio euismod lacinia at quis risus sed. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Nunc mi ipsum faucibus vitae aliquet nec. Arcu vitae elementum curabitur vitae nunc sed. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. In pellentesque massa placerat duis ultricies. Lectus mauris ultrices eros in cursus. Magna fermentum iaculis eu non. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Diam vel quam elementum pulvinar etiam non.

                            Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam pellentesque nec nam aliquam sem. Ut tristique et egestas quis ipsum suspendisse. Lectus sit amet est placerat in. Justo donec enim diam vulputate. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Enim facilisis gravida neque convallis a cras. Ut sem nulla pharetra diam sit. Mi sit amet mauris commodo quis imperdiet massa. Vulputate mi sit amet mauris. Facilisis gravida neque convallis a cras semper. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Lobortis elementum nibh tellus molestie nunc. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Amet mattis vulputate enim nulla aliquet porttitor lacus.</div>
                    </div>
                    <div ref={hiking} className="ms-4 snap-start">
                        <div className="text-6xl font-semibold sticky -top-[0.025px] start-0 pb-3 bg-neutral-50 block">Daring Hiker</div>
                        <div className="text-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Vitae ultricies leo integer malesuada nunc. Bibendum est ultricies integer quis auctor. Donec enim diam vulputate ut pharetra sit amet. Ac tincidunt vitae semper quis lectus nulla. Aliquet nibh praesent tristique magna. Condimentum lacinia quis vel eros donec ac odio. Habitasse platea dictumst quisque sagittis purus. Nulla porttitor massa id neque aliquam. At urna condimentum mattis pellentesque id nibh tortor. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.

                            Massa massa ultricies mi quis. Nulla facilisi nullam vehicula ipsum a arcu. Non arcu risus quis varius quam quisque id diam. Bibendum at varius vel pharetra. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. A cras semper auctor neque vitae tempus quam pellentesque nec. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Auctor elit sed vulputate mi sit. Nec dui nunc mattis enim ut. Scelerisque eleifend donec pretium vulputate sapien nec. Eget nunc scelerisque viverra mauris in. A lacus vestibulum sed arcu non odio euismod lacinia at. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Urna et pharetra pharetra massa. Nullam non nisi est sit amet facilisis magna etiam. Lacus vestibulum sed arcu non odio euismod lacinia at.</div>
                    </div>
                    <div ref={photography} className="ms-4 snap-start">
                        <div className="text-6xl font-semibold sticky -top-[0.025px] start-0 pb-3 bg-neutral-50 block">Aspiring Photographer</div>
                        <div className="text-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget. Sem fringilla ut morbi tincidunt. Sit amet purus gravida quis blandit. Sit amet justo donec enim diam vulputate ut pharetra sit. Quisque non tellus orci ac auctor augue mauris. Risus feugiat in ante metus dictum at tempor commodo. Risus nec feugiat in fermentum posuere urna nec. Enim neque volutpat ac tincidunt. Nec tincidunt praesent semper feugiat nibh. Sit amet massa vitae tortor condimentum lacinia quis. Amet tellus cras adipiscing enim. Integer vitae justo eget magna. Faucibus nisl tincidunt eget nullam non nisi est. Accumsan in nisl nisi scelerisque eu.

                            Ac turpis egestas maecenas pharetra. Nunc sed blandit libero volutpat sed. Tellus orci ac auctor augue mauris augue neque. Magna etiam tempor orci eu lobortis elementum. Vitae auctor eu augue ut lectus arcu. A arcu cursus vitae congue. Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Semper viverra nam libero justo. Sagittis orci a scelerisque purus. Lectus nulla at volutpat diam ut venenatis tellus in.</div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Hobbies