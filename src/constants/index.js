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
    portfolio,
    jobit,
    tripguide,
    threejs,
    fidelity,
    angular,
    sura,
    animeFace,
    node,
    graphAssociate,
    movieSite
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
    // {
    //     name: "Angular",
    //     icon: angular,
    // },
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
            "Shrini is wonderful to work with and has excellent command over the front-end frameworks. He is a highly motivated, knowledgeable, and Intelligent developer. In the years I have known him, I have sought his advice on various programming challenges and nuances in creating demo UI applications. So far, his counsel has made my demos better. ",
        name: "Sura Sundar",
        designation: "Business Intelligence Engineer",
        company: "Amazon",
        image: sura,
    },
    {
        testimonial:
            "\"I worked closely with Shrinivass at Nielsen for several years. His front-end development work was outstanding, surpassing the quality of others I've encountered. I highly recommend him for his enthusiasm, aptitude for learning, and consistent delivery of high-quality work.\"",
        name: "Bruce Katz",
        designation: "Staff Software Quality Assurance Engineer",
        company: "EF Education First",
        image: animeFace,
    },
    // {
    //     testimonial:
    //         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //     name: "Lisa Wang",
    //     designation: "CTO",
    //     company: "456 Enterprises",
    //     image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
];

const projects = [
    {
        name: "3D Portfolio",
        description:
            "An impressive 3D portfolio crafted with React, Three.js, and Tailwind CSS, offering a unique blend of web development and immersive 3D graphics. Explore my work and skills through an interactive journey that showcases creativity and technical expertise, redefining online portfolio presentation.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "three.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/Shrinivassab/3d_portfolio",
    },
    {
        name: "Full Stack Development Project",
        description:
            "Build a Full Stack Web Development project for movies(HTML, CSS, JavaScript, Node.js, MongoDB)",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            {
                name: "MongoDB",
                color: "pink-text-gradient",
            },
        ],
        image: movieSite,
        source_code_link: "https://shrinivassab.github.io/Movie_Site/",
    },
    {
        name: "Apollo Associate Cert.",
        description:
            "Having obtained this certification, I possess a solid foundational knowledge of GraphQL and the Apollo tool suite. My expertise encompasses schema design, deploying Apollo Server 4, and executing frontend queries with Apollo Client 3. ",
        tags: [
            {
                name: "GraphQL",
                color: "blue-text-gradient",
            },
            {
                name: "mutation",
                color: "green-text-gradient",
            },
            {
                name: "schema",
                color: "pink-text-gradient",
            },
        ],
        image: graphAssociate,
        source_code_link: "https://github.com/Shrinivassab/Shrinivassab-Apollo-Graph-Developer---Associate-Certification",
    },
];

export { services, technologies, experiences, testimonials, projects };
