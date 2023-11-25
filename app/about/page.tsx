import React from "react";
import Image from "next/image";
import TechStack from "@/components/TechStack";
import { ActivitiesTimeline } from "@/components/ActivitiesTimeline";

const About = () => {
  return (
    <>
      {/* intro content */}
      <>
        <div className="flex justify-between items-center flex-wrap md:flex-row max-w-[80vw] mx-auto">
          <div className="w-[45vw] flex flex-col gap-10 py-10 flex-wrap">
            <span className="text-2xl leading-relaxed">
              I am a final-year student at Vellore Institute of Technology,
              Bhopal, pursuing a B.Tech degree in Electronics and Communication
              Engineering.
            </span>
            <span className="text-2xl leading-relaxed">
              With a keen interest in web development, I have gained practical
              experience in designing and building websites.
              <span className="text-purple-900 dark:text-purple-200">
                I specialize in developing web applications using modern
                technologies such as React, Next.js, Tailwind CSS,
              </span>
              {" "}
              and many more.
            </span>
            <span className="text-2xl leading-relaxed">
              I enjoy turning ideas into functional and visually appealing web
              apps. I have gained considerable experience in various projects
              throughout my years of learning.
            </span>
          </div>

          <div>
            <Image
              src="/images/siddhartha.png"
              alt="siddhartha"
              className="w-[25vw] object-cover rounded-lg"
              height={500}
              width={500}
            />
          </div>
        </div>
      </>
      {/* intro content */}

      {/* skills section */}
      <>
      <TechStack/>
      </>
      {/* skills section */}
      
      {/* education timeline */}
      <>
      <ActivitiesTimeline/>
      </>
      {/* education timeline */}
    </>
  );
};

export default About;
