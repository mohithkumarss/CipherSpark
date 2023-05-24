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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Time Line",
  },
  {
    id: "contact",
    title: "Register",
  },
];

const services = [
  {
    title: "Software Development",
    icon: web,
  },
  {
    title: "Robotics",
    icon: mobile,
  },
  {
    title: "A - I - M - L",
    icon: backend,
  },
  {
    title: "Internet of Things",
    icon: creator,
  },
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Registrations",
    company_name: "Online & Offline",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "May 24. 2023 - June 20. 2023",
    points: [
      "The registrations for Cipher Spark starts from 24rd of May, 2023 and it will be open till 20th of June, 2023.",
      "All Teams are requested to register in the given time period for participation.",
    ],
  },
  {
    title: "Round One - Ideation",
    company_name: "Online",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 21. 2023 - June 22. 2023",
    points: [
      "This round will be held on Google-Meet/ Zoom. It is required by the participants to present their idea along with tech-stack in a form of PPT using the template provided after registration.",
    ],
  },
  {
    title: "Round Two - Implementation",
    company_name: "Offline",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "June 24. 2023 - June 25. 2023",
    points: [
      "This round is where participants bring their ideas to a reality in 24 hours! This round will be held at APS College of Engineering campus and requirements such as Food, Internet and Snacks will be provided.",
    ],
  },
  {
    title: "Results",
    company_name: "Offline",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 25. 2023",
    points: [
      "Results will be announced after the evaluation of points awarded.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
