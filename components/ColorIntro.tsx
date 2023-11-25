"use client"

import React, { useState, useEffect } from "react";

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
    <div
      className="h-[88vh] flex justify-center items-center -mt-16"
      style={{
        backgroundColor,
        transition: "background-color 5s ease-in-out", // Smooth transition over 1 second
      }}
    >
      <span
        className="w-[48vw] text-4xl leading-relaxed flex font-semibold"
        style={{
          color: textColor,
          transition: "color 8s ease-in-out", // Smooth transition over 1 seconds",
        }}
      >
        Siddhartha Singh, Next.js Maestro, Full-Stack Sorcerer, and Innovation
        Alchemist
      </span>
      
    </div>
  );
};

export default ColorIntro;