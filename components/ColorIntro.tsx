"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { DiCode } from "react-icons/di";

const ColorIntro = () => {
  const [backgroundColor, setBackgroundColor] = useState("#69359c"); // Initial background color
  const [textColor, setTextColor] = useState("#ffffff"); // Initial text color

  useEffect(() => {
    const colorChangeInterval = setInterval(() => {
      const randomColor = getRandomColor();
      setBackgroundColor(randomColor);
      setTextColor(getTextColor(randomColor));
    }, 2000); // Change color every 2 seconds (adjust as needed)

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(colorChangeInterval);
  }, []); // Empty dependency array means this effect runs once after the initial render

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getTextColor = (bgColor: any) => {
    const rgb = parseInt(bgColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    // Calculate luminance (perceived brightness)
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    // Determine text color based on luminance
    return luminance > 200 ? "#000000" : "#ffffff";
  };

  return (
    <>
      <div
        className="min-h-screen flex justify-center items-center -mt-16 opacity-40"
        style={{
          backgroundColor,
          transition: "background-color 3s ease-in-out", // Smooth transition over 1 second
        }}
      ></div>
      <span
        className="md:w-[48vw] md:text-5xl text-4xl leading-relaxed flex font-semibold pl-5 pr-1 absolute md:top-1/2 md:left-1/3 md:-translate-x-1/2 md:-translate-y-1/2 top-32  left-3 right-3"
        style={{
          color: textColor,
          transition: "color 8s ease-in-out", // Smooth transition over 1 seconds",
        }}
      >
        <div className="flex min-w-[80vw] items-center justify-between flex-col md:flex-row">
          <div className="flex flex-col justify-center w-full md:space-y-6 space-y-4">
            <span className="leading-relaxed !opacity-100 max-w-[40rem]">
              Siddhartha Singh, Next.js Enthusiast, Full-Stack Apprentice, and
              Innovation Sorcerer
            </span>

            <Link href="#projects">
              <Button className="w-full md:w-1/3 rounded-md bg-black/40 text-white font-semibold dark:bg-white dark:text-black">
                View Projects{" "}
                <span className="ml-1">
                  <DiCode className="text-4xl" />
                </span>
              </Button>
            </Link>
          </div>

          <span className="!opacity-100">
            <Image
              height={600}
              width={600}
              src={"/images/introimage.svg"}
              alt=""
              className="w-[400px] mt-10"
            />
          </span>
        </div>
      </span>
    </>
  );
};

export default ColorIntro;
