"use client";

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
import { FaArrowRight } from "react-icons/fa";

export default function QuickProjects() {
  return (
    <div className="md:max-w-[85vw] md:px-8 px-2 mx-auto">
      <div className="container mx-auto space-y-12">
        <Card className="flex flex-col overflow-hidden rounded-md lg:flex-row hover:shadow-xl hover:shadow-purple-600">
          <CardBody className="flex md:flex-row flex-col md:px-12 py-12 px-4">
            <Image
              height={600}
              width={600}
              src="/images/inatorsui.png"
              alt=""
              className="h-full object-top object-cover rounded-md"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase">Next.js 14</span>
              <h3 className="text-3xl font-bold">Inators UI</h3>
              <p className="my-6">
                Inators UI is a frontend components library for developers and
                designers to make creating nextjs client side as well as server
                side interfaces easier. Based on Tailwind and Shadcn/ui for just
                copy and use, with more than 150+ components to choose from.
              </p>
              <Link
                href="https://inatorsui.vercel.app"
                target="_blank"
                className="text-sm w-max"
              >
                <Button className="self-start text-white bg-black border-0 py-4 px-10 font-semibold rounded text-lg">
                  View Now
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>

        <Card className="flex flex-col overflow-hidden rounded-md lg:flex-row hover:shadow-xl hover:shadow-purple-600">
          <CardBody className="flex md:flex-row-reverse flex-col-reverse md:px-12 py-12 px-4">
            <Image
              height={600}
              width={600}
              src="/images/chatagram.png"
              alt=""
              className="h-full object-top object-cover rounded-md"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase">Next.js 13.4</span>
              <h3 className="text-3xl font-bold">Chatagraminator</h3>
              <p className="my-6">
                A Multiuser Next.js 13.4 app-directory based application,
                incorporating the Open-AI API to create and share posts within a
                community feed. With a secure Google authentication using Next
                Auth, providing multiple login options.
              </p>
              <Link
                href="https://chatagraminator.vercel.app"
                target="_blank"
                className="text-sm w-max"
              >
                <Button className="self-start text-white bg-black border-0 py-4 px-10 font-semibold rounded text-lg">
                  View Now
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>

        <Card className="flex flex-col overflow-hidden rounded-md lg:flex-row hover:shadow-xl hover:shadow-purple-600">
          <CardBody className="flex md:flex-row flex-col md:px-12 py-12 px-4">
            <Image
              height={600}
              width={600}
              src="/images/swarnalehenga.png"
              alt=""
              className="h-full object-top object-cover rounded-md"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase">Next.js 13.1</span>
              <h3 className="text-3xl font-bold">Swarna-Lehenga</h3>
              <p className="my-6">
                A feature-rich e-commerce website using Next.js 13.1, featuring
                functionalities like Add to Cart, Filtering, and Content
                Management System. With next.js server-side rendering from
                Next.js 13.1 pages directory, ensuring an optimal user
                experience and strong SEO performance.
              </p>
              <Link
                href="https://swarnalehenga.vercel.app"
                target="_blank"
                className="text-sm w-max"
              >
                <Button className="self-start text-white bg-black border-0 py-4 px-10 font-semibold rounded text-lg">
                  View Now
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="flex justify-end mt-6  text-sm">
        <Link href={"/projects"}>
          <Button className="text-white bg-black border-0 py-2 px-4 font-semibold rounded  md:mt-10 sm:mt-0">
            View All Projects
            <FaArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
