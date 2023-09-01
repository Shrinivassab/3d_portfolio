import React from "react";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {services} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const ServiceCard = ({index, title, icon}) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]'
            >
                With over 8 years of hands-on experience, I am a highly skilled front-end developer and software
                engineer proficient in a wide array of technologies, from HTML/5, CSS, and JavaScript (ES6) to Angular,
                React, GraphQL, and NodeJS. My expertise shines in crafting user-friendly, cross-browser compliant
                websites and dynamic single-page applications. I excel in Angular and React, creating custom modules,
                components, services, and implementing state-based architecture with NgRx and Apollo Cache. Guiding
                teams with SOLID principles, I ensure codebase maintainability and scalability. My data visualization
                skills encompass D3.js, HighCharts, e-Charts, and Three.js, where I've built solution-driven dashboards
                with various chart types. I'm also well-versed in testing, documentation, version control systems, and
                automation using Jenkins. My dedication to staying updated with industry trends makes me a valuable
                asset in delivering innovative web applications that consistently exceed user expectations.
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
