import Image from "next/image"

interface CardProps {
    imagePath: string
    cardTitle: string
    cardContents: string
}

const ContentRightCard = ({ imagePath, cardTitle, cardContents }: CardProps) => {
    return (
        <>
            <div className="max-w-lg w-full lg:max-w-full lg:flex">
                <div className="h-72 lg:h-auto lg:w-2/5 flex-none bg-cover rounded-xl text-center overflow-hidden relative">
                    <Image
                        className="flex items-center rounded-s"
                        src={imagePath}
                        alt="About Me Picture"
                        style={{ objectFit: "cover" }}
                        fill>
                    </Image>
                </div>
                <div className=" ms-8 flex flex-col justify-between leading-normal">
                    <div>
                        <div className="text-black font-bold text-xl mb-4">{cardTitle}</div>
                        <p className="text-neutral-500 text-base">{cardContents}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentRightCard;
