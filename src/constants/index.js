import {
    mobile,
    apollo_professional,
    web,
    apollo_associate,
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
    patton_labs,
    nielsen,
    in4,
    carrent,
    jobit,
    tripguide,
    threejs,
    fidelity,
    angular
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Front End Developer",
        icon: web,
    },
    {
        title: "Full Stack Developer",
        icon: mobile,
    },
    {
        title: "Apollo Professional",
        icon: apollo_professional,
    },
    {
        title: "Apollo Associates",
        icon: apollo_associate,
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
        name: "Angular",
        icon: angular,
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
        title: "Full Stack Developer",
        company_name: "Fidelity",
        icon: fidelity,
        iconBg: "#383E56",
        date: "July 2020 - Present",
        points: [
            "Successfully led the modernization effort of the tech stack for a critical application (RPG) used by 3.5 million \n" +
            "customers annually, resulting in a high performant ad user-friendly experience.",
            "Led design reviews with peers and stakeholders, leveraging in-depth knowledge of emerging technologies \n" +
            "such as Nx, Angular, GraphQL, and Node.js to make informed decisions on tech stack selection. Successfully \n" +
            "implemented code migration, created slunk dashboard resulting in improved scalability of the application.",
            "Guided the team in Adopting SOLID principles, ensuring the maintainability and scalability of the codebase.",
            "Created new Schema design for the multi-goal API to fetch the data required to generate new goals.",
        ],
    },
    {
        title: "UI Developer / Software Engineer",
        company_name: "Nielsen",
        icon: nielsen,
        iconBg: "#E6DEDD",
        date: "June 2017 - June 2020",
        points: [
            "Developed new features, functionality, and customization of the existing features for the business-critical \n" +
            "single page application using Angular 2.",
            "Conducted requirements gathering and validation as a part of collaboration for the high-profile external web \n" +
            "app to address important UI/UX parts of the system's user interface before the active phase of development.",
            "Implemented Single Sign-On (SSO) based AuthO JWT authentication and maintained the session state\n" +
            "information throughout the application and third part software.",
            "Implemented Lazy loading to improve the performance of loading date from the backend.",
        ],
    },
    {
        title: "Front End Developer",
        company_name: "In4mation Insight",
        icon: in4,
        iconBg: "#383E56",
        date: "Jan 2017 - May 2017",
        points: [
            "Improved the effectiveness of business decisions using data and machine learning/predictive modeling.",
            "Developed flowcharts and design documents to illustrate requirements, and translated business requirements \n" +
            "into technical requirements.",
            "Standardized user account management practices and mitigated code duplicity, integrating third-party \n" +
            "services and external APIs as a part of the implementation of the high-profile online service",
            "Integrated Webpack with Bavel, EsLint and Prettier for code formatting, linting and Bower for build process.\n",
        ],
    },
    {
        title: "UI Consultant",
        company_name: "Patton Labs",
        icon: patton_labs,
        iconBg: "#E6DEDD",
        date: "Aug 2016 - Dec 2016",
        points: [
            "Analyzed UI components and configured index DB on Chrome browser to store resultant data on client-side.",
            "Designed CSS style sheet for application-wide usage.",
            "Served on Adobe Flex to HTML5 migration team to implement all existing features in HTML5.",
            "Translated business requirements into technical requirements.",
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
