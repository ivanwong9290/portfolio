import { Image } from "@nextui-org/react";

interface CardProps {
    imagePath: string;
    cardTitle: string;
    cardContents: string;
}

const ContentLeftCard = ({ imagePath, cardTitle, cardContents }: CardProps) => {
    return (
        <>
            <div className="max-w-lg w-full lg:max-w-full lg:flex">
                <div className="me-8 flex flex-col justify-between leading-normal">
                    <div>
                        <div className="text-black font-bold text-3xl mb-4">{cardTitle}</div>
                        <p className="text-neutral-500 text-base">{cardContents}</p>
                    </div>
                </div>
                <div className="h-72 lg:h-auto lg:w-2/5 flex-none bg-cover rounded-xl text-center overflow-hidden relative">
                    <Image
                        className="flex items-center"
                        src={imagePath}
                        alt="About Me Picture"
                        style={{ objectFit: "cover" }}
                    ></Image>
                </div>
            </div>
        </>
    );
};

export default ContentLeftCard;
