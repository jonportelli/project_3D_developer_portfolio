import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  esgforum,
  decentraland,
  futurink,
  threejs,
  ut,
  mplogo,
  rivari,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "_about",
  },
  {
    id: "works",
    title: "_work",
  },
  {
    id: "contact",
    title: "_contact",
  },
];

const services = [
  
  {
    title: "UX / UI Design",
    icon: backend,
  },
  {
    title: "Prototyping",
    icon: creator,
  },
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "React JS App Development",
    icon: mobile,
  }
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Prisma / PlanetScale / Supabase / PostGres / U",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "After Effects",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Creative Frontend Developer",
    company_name: "Max Planck Society",
    icon: mplogo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Creating a cohesive set of unique React JS Components including; image galleries, video players, 3D model viewers. ",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive input into the design and iteration process.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "UnderScore Technology Ltd",
    icon: ut,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jonathan proved me wrong.",
    name: "Jane Pool",
    designation: "CEO",
    company: "FemtechConf",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jonathan does.",
    name: "Trevor Watts",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Jonathan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "The ESG Forum",
    description:
      "Live Event website with video streaming and real-time chat integration. User authentication with premium content features.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Web RTC Real-time streaming",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: esgforum,
    source_code_link: "https://esg-forum.com",
  },
  {
    name: "Futur Ink",
    description:
      "A no-code blogging platform allowing linked in users to sign in and post a blog post in minutes.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ssr",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: futurink,
    source_code_link: "https://futur.ink",
  },
  {
    name: "Finca Rivari",
    description:
      "A no-code blogging platform allowing linked in users to sign in and post a blog post in minutes.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ssr",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: rivari,
    source_code_link: "https://lahaci.netlify.app",
  },
  // {
  //   name: "Decentraland Villa",
  //   description:
  //     "A Metaverse VR Experience built in Unity using the DCL API, Features Live streaming video screens and a secret roof party !",
  //   tags: [
  //     {
  //       name: "react three fiber",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "unity",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "blender",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: decentraland,
  //   source_code_link: "https://fair-fox.surge.sh/",
  // }
];

export { services, technologies, experiences, testimonials, projects };
