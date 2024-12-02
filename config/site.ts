export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ivan Wong | Portfolio",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Experiences",
      href: "#experiences",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "About Me",
      href: "#about",
    },
  ],
  links: {
    github: "https://github.com/ivanwong9290",
    linkedin: "https://www.linkedin.com/in/iwong5/",
    email: "mailto:ivanwong9290@gmail.com",
  },
  about: [
    {
      image: "/images/cmu_robot.jpg",
      title: "A little bit about me",
      description: `I am currently a software engineer at Magna
      working in the autonomous vehicle space. I first began my
      engineering career as a mechanical engineer, then pursued in
      the field of robotics at Carnegie Mellon University, and
      finally landed at my current role focusing on building web
      applications to increase robustness of autonomous vehicle
      technology. I'm proud to help passengers and pedestrians
      to feel safer everyday. As an engineer, I enjoy seeking new
      challenges by learning new technologies and overcoming them. My
      passion lies in application & algorithm design to simplify
      robotics advancement.`,
    },
    {
      image: "/images/travel_1.JPG",
      title: "As an engineer, I love to...",
      description: `What I love about engineering is that it makes you a lifelong learner. 
      There's always some new technologies for us to tinker around with, watching how nascent ideas turn into robust paradigms.
      I thrive in my agile role as a full-stack engineer for our internal search-based application since there is always a new request waiting for me to
      help my colleagues by providing new ideas and ways to search for the data they need for their work. 
      `,
    },
    {
      image: "/images/BMP_8864.jpg",
      title: "Know me outside of work",
      description: `Having been to 4 continents and in search of my 20th country to visit, I'm a world traveler at heart! 
      I'm mostly curious about the stories that make up a country's culture, architecture, and food, all the while challenging my adaptation skills and learning about myself. 
      From the rugged peaks of Peru, the bustles in Asia, the grandeur of Europe, I love sharing my stories and experiences with my knack for photography. When I'm at home in Boston,
      I like a nice game of pickle ball, hiking, and snowboarding in the winter, but you'll most likely catch me racking up my steps count wandering around town.
      Oh, I'm also working on being quadrilingual, with French being my latest language!`,
    },
  ],
};
