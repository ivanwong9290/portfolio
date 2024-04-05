import { Card, CardHeader, CardBody, CardFooter, Button, Image } from "@nextui-org/react";
import { buildClassName } from "../Utils";
import { MouseEventHandler } from "react";

interface Project {
    name: string,
    key: number,
    isJob: boolean,
    position: string,
    dark_mode: boolean,
    cover: string,
    onclick: MouseEventHandler
}

const ExperienceCard = ({ name, isJob, position, dark_mode, cover, onclick }: Project) => {
    return (
        <div>
            <Card isPressable className="inline-block col-span-12 sm:col-span-4 h-[40vh] my-4 rotate-90" onClick={onclick}>
                <CardHeader className="absolute z-10 flex-col top-1 items-start">
                    <h4 className={buildClassName([(dark_mode ? "text-gray-700" : "text-gray-400"), "font-medium text-medium"])}>{(isJob ? "FULL-TIME" : "PROJECT")}</h4>
                </CardHeader>
                <Image
                    isZoomed
                    isBlurred
                    removeWrapper
                    alt={name}
                    className="z-0 w-full h-full object-cover"
                    src={cover}
                ></Image>
                <CardFooter className="absolute z-10 flex-col bottom-1 items-start">
                    <h3 className={buildClassName([(dark_mode ? "text-black" : "text-white"), "font-bold text-large"])}>{name}</h3>
                    <h4 className={buildClassName([(dark_mode ? "text-gray-700" : "text-gray-400"), "font-medium text-medium"])}>{position}</h4>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ExperienceCard