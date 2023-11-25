"use client"

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function QuickProjects() {
  return (
    <div className="md:max-w-[75vw] gap-4 grid grid-cols-12 grid-rows-2 px-8 mx-auto">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start bg-purple-900/80 text-white">
          <p className="text-tiny font-bold">Next.js 13.4 App Router</p>
          <h4 className=" font-medium text-large">BLISSINATOR</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover object-left"
          src="/images/blissinator.png"
        />
        <CardFooter className="absolute bg-purple bottom-0 z-10 justify-between">
          <Link target="_blank" href="https://blissinator.vercel.app/">
            <Button className="text-tiny bg-purple-900 text-white" size="sm">
              View Live
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start bg-purple-900/80 text-white">
          <p className="text-tiny   font-bold">Next.js 13 Pages Directory</p>
          <h4 className=" font-medium text-large">SWARNALEHENGA</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover object-left"
          src="/images/swarnalehenga.png"
        />
        <CardFooter className="absolute  bottom-0 z-10 justify-between">
          <Link target="_blank" href="https://swarnalehenga.vercel.app/">
            <Button className="text-tiny bg-purple-900 text-white" size="sm">
              View Live
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start bg-purple-900/80 text-white">
          <p className="text-tiny   font-bold">React 18</p>
          <h4 className=" font-medium text-large">PLAGIARISMINATOR</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover object-left"
          src="/images/plagiarisminator.png"
        />
        <CardFooter className="absolute  bottom-0 z-10 justify-between">
          <Link target="_blank" href="https://plagiarisminator.vercel.app/">
            <Button className="text-tiny bg-purple-900 text-white" size="sm">
              View Live
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start bg-purple-900/80 text-white">
          <p className="text-tiny   font-bold">Next.js 13.4 App Router</p>
          <h4 className="text-black font-medium text-2xl">CHATAGRAM</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover object-left"
          src="/images/chatagram.png"
        />
        <CardFooter className="absolute  bottom-0 z-10 justify-between">
          <Link target="_blank" href="https://chatagraminator.vercel.app">
            <Button className="text-tiny bg-purple-900 text-white" size="sm">
              View Live
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start bg-purple-900/80 text-white">
          <p className="text-tiny   font-bold">Next.js 14 App Router</p>
          <h4 className="/90 font-medium text-xl">
            SIDDHARTHA SINGH PORTFOLIO
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover object-left"
          src="/images/portfolio.png"
        />
        <CardFooter className="absolute  bottom-0 z-10">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny ">You are at home page</p>
              <p className="text-tiny ">View all of my projects now</p>
            </div>
          </div>
          <Link href="/projects">
            <Button className="bg-purple-900 text-white" size="sm">
              View All Projects
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
