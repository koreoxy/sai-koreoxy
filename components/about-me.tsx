"use client";

import { motion } from "framer-motion";

const AboutMe = () => {
  const headline =
    "Hello! I,m Saifullah, but feel free to call me Iful or Ipul. I,m a 23 year old web development enthusiast from Meulaboh, West Aceh,Indonesia. With 3 years of academic background in Computer Science at Teuku Umar University, my journey in programming began in 2020 with C++. Since then, my passion has evolved toward web development, where I now focus on building dynamic web applications using Next.js and Laravel.I,m always eager to learn and take on new challenges to sharpen my skills in creating efficient and user-friendly digital experiences.";
  const words = headline.split(" ");

  return (
    <div>
      {words.map((letter, index) => (
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
          animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 * index }}
          key={index}
          className="dark:text-white inline-block mr-1.5"
        >
          {letter === " " ? " " : letter}
        </motion.p>
      ))}
    </div>
  );
};

export default AboutMe;
