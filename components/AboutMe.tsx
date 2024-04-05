import ContentRightCard from "./ui/ContentRightCard";
import ContentLeftCard from "./ui/ContentLeftCard";

interface AboutMeProps {
  id: string;
  aboutMePicPath: string;
}

const cardContent: { title: string; content: any } = {
  title: "ABOUT IVAN",
  content:
    "I am currently a software engineer working in the autonomous vehicle space. I first began my engineering career as a mechanical engineer, then pursued in the field of robotics at Carnegie Mellon University, and finally landed at my current role focusing on building web applications to increase robustness of autonomous vehicle technology, helping passengers and pedestrians to feel safer everyday. As an engineer, I enjoy seeking new challenges and learning new technologies to overcome them. My current interest lies in application & algorithm design to simplify robotics advancement.",
};

const AboutMe = ({ id, aboutMePicPath }: AboutMeProps) => {
  return (
    <>
      <div id={id} className="py-24">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <ContentLeftCard
              imagePath={aboutMePicPath}
              cardTitle={cardContent.title}
              cardContents={cardContent.content}
            ></ContentLeftCard>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
