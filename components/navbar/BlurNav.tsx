"use client"

import { useState, useEffect } from "react";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/navbar/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  InstaIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/navbar/icons";

import { Logo } from "@/components/navbar/icons";

export const BlurNav = () => {


  // const [backgroundColor, setBackgroundColor] = useState("#000000"); // Initial background color
  // const [textColor, setTextColor] = useState("#ffffff"); // Initial text color

  // useEffect(() => {
  //   const colorChangeInterval = setInterval(() => {
  //     const randomColor = getRandomColor();
  //     setBackgroundColor(randomColor);
  //     setTextColor(getTextColor(randomColor));
  //   }, 2000); // Change color every 2 seconds (adjust as needed)

  //   // Clean up the interval to avoid memory leaks
  //   return () => clearInterval(colorChangeInterval);
  // }, []); // Empty dependency array means this effect runs once after the initial render

  // const getRandomColor = () => {
  //   const letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };

  // const getTextColor = (bgColor: any) => {
  //   const rgb = parseInt(bgColor.slice(1), 16);
  //   const r = (rgb >> 16) & 0xff;
  //   const g = (rgb >> 8) & 0xff;
  //   const b = (rgb >> 0) & 0xff;

  //   // Calculate luminance (perceived brightness)
  //   const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  //   // Determine text color based on luminance
  //   return luminance > 128 ? "#000000" : "#ffffff";
  // };



  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-purple-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="shadow-sm"
      // style={{
      //   backgroundColor,
      //   color: textColor,
      //   transition: "background-color color 8s ease-in-out", 
      //   // Smooth transition over 1 second
      // }}
    >
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <Logo />
          <p className="font-bold text-inherit">Siddhartha Singh</p>
        </NextLink>
      </NavbarBrand>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden lg:flex gap-8 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium font-semibold"
                )}
                color="foreground"
                href={item.href}
                target={item.target ? "_blank" : undefined}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            href={siteConfig.links.instagram}
            aria-label="Instagram"
          >
            <InstaIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "foreground"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "foreground"
                    : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
