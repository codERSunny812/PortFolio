import {
  mobile,
  backend,
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
  carrent,
  jobit,
  inkSync,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Programmer",
    icon: backend,
  },
  // {
  //   title: "Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JWT",
    icon: jwt,
  },
  // {
  //   name: "NextAuth",
  //   icon: nextauth,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const projects = [
  // project 1
  {
    name: "Stellar Pins",
    description:
      "A Pinterest-like web application built with nodejs , expressjs , mongoDB and ejs",
    features: [
      "Users can upload a profile photo, view their uploaded posts, and see their saved favorite posts in their profile section.",
      "Displays a feed of posts from other users, allowing users to explore new content.",
      "Users can upload posts with images and captions from the create page, which will be displayed in the feed.",
    ],
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Ejs",
        color: "orange-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: inkSync,
    source_code_link: "https://github.com/codERSunny812/StellarPins.git",
    live_link: "https://stellarpins.onrender.com/",
  },
  // project 2
  {
    name: "Stellar Chat",
    description:
      "A dynamic full-stack Chat  application with Reactjs , Nodejs, MongoDB and Socket.io",
    features: [
      "Create personalized accounts and securely log in.",
      "Engage in text-based communication with instant message delivery.",
      "MongoDB ensures the persistence of user data and chat history.",
      "User can upload a picture during the registration in the app and that picture will be shown as the profile picture of the app.",
      "The User can upload any picture as his/her Status and also also see the status of the people who loggedIn into the app and upload any status.",
      "Initiate video calls directly within the app.",
      "User can make audio call with his friend with in the app.",
    ],
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
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/codERSunny812/StellarChat.git",
    live_link: "https://chat-kro-two.vercel.app/",
  },
  // project 3
  {
    name: "Stellar connect",
    description: "Stellar connect is a feature-rich social networking platform designed to connect professionals and facilitate networking opportunities.",
    features: [
      "Implemented Email verification and using OTP user authentication and login/signup functionality using JWT for secure access to the platform.",
      "Students can browse and purchase courses. Instructors can create new courses, edit existing courses, and delete courses they have created.",
      "Integrated MongoDB database to store user information, course data, and progress tracking.",
      "Employed RESTful API principles for seamless communication between the frontend and backend systems.",
      "Razorpay payment integration.",
      "PWA (Progressive Web App) support.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ant design",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "orange-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/codERSunny812/Stellar-connect.git",
    live_link: "https://stellar-chat-mx37.vercel.app/",
  },
  // project 4
  {
    name: "Stellar code",
    description:
      "This is a web application built with ReactJS, Chakra UI, Lottie, Tailwind, and Supabase for authentication.",
    features: [
      "New users can sign up on the home screen and Existing users can log in directly.",
      "Users must fill out all the required fields to enable the login button, Incorrect password triggers a Toastify message.",
      "Displays a list of LeetCode questions with a status indicator (cross for unsolved, tick for solved).",
      "Detailed information about each question, including type and difficulty level.",
      "YouTube modal for viewing solution videos.",
      "Stopwatch to track the time spent on each question."

    ],
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: tracker,
    source_code_link: "https://github.com/codERSunny812/StellarCode.git",
    live_link:
      "https://stellarcodes.vercel.app/",
  },
  // project 5
  {
    name: "Stellar Eats",
    description:
      "This is a food website which is basically shows the data of all the nearby restaurant in form of cards",
    features: [
      "Browse nearby restaurants",
      "View Restaurant menu and details",
      "Cart Management",
      "User authentication",
      "Responsive design for various device",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: socialSphere,
    source_code_link: "https://github.com/codERSunny812/StellarEats.git",
    live_link: "https://stellareats.vercel.app/",
  },
];



export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: sengersunny448@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/sushil812/",
  },
  {
    name: "github",
    url: "https://github.com/codERSunny812",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/theamiable_sunny/",
  },
  {
    name: "twitter",
    url: "https://x.com/codeerasunny",
  },
];


// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export {
  services,
  technologies,
  //  experiences,
  //  testimonials,
  projects,
};
