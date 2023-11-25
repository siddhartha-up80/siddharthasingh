"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { DiJavascript1, DiReact, DiCss3, DiHtml5 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const TechStack = () => {
  const list = [
    {
      title: "HTML",
      img: DiHtml5,
    },
    {
      title: "CSS",
      img: DiCss3,
    },
    {
      title: "JavaScript",
      img: DiJavascript1,
    },
    {
      title: "React",
      img: DiReact,
    },
    {
      title: "Next.js",
      img: TbBrandNextjs,
    },
    {
      title: "TypeScript",
      img: SiTypescript,
    },
    {
      title: "TailwindCSS",
      img: SiTailwindcss,
    },
    {
      title: "Mongodb",
      img: DiMongodb,
    },
    {
      title: "NodeJs",
      img: FaNodeJs,
    },
    {
      title: "Express",
      img: SiExpress,
    },
    {
      title: "Github",
      img: FaGithub,
    },
    {
      title: "Vercel",
      img: IoLogoVercel,
    },
  ];

  return (
    <>
      {/* skills */}
      <div className="w-[75vw] mx-auto my-10">
        {" "}
        <div className="text-2xl text-center my-10">SKILLS I USE</div>
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <span className="w-full object-cover h-[140px] flex justify-center items-center">
                  <item.img size={80} /> {/* Render the icon dynamically */}
                </span>
              </CardBody>
              <CardFooter className="text-small justify-center">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* skills */}
    </>
  );
};

export default TechStack;
