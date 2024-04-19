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
              className="h-full object-top object-fill aspect-video rounded-md"
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
              src="/images/nextinator.png"
              alt=""
              className="h-full object-top object-fill rounded-md aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase">Next.js 14</span>
              <h3 className="text-3xl font-bold">Next Inator</h3>
              <p className="my-6">
                Next Inator is a web app built in Next.js 14, it is an open-ai
                based custom data based AI chat web-app, powered by open-ai api
                and pinecone vector database. Users can add their own data, and
                chat with the data, to get personalized responses. It is a great
                tool for content creators, marketers, students, and anyone who
                wants to get personalized responses from ai chatbots.
              </p>
              <Link
                href="https://nextinator.vercel.app"
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
              src="/images/ethnicinator.png"
              alt=""
              className="h-full object-top object-fill rounded-md aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase">Next.js 14</span>
              <h3 className="text-3xl font-bold">Ethnic Inator</h3>
              <p className="my-6">
                A feature-rich indian ethnic wear e-commerce website using
                Next.js 14, featuring functionalities like Add to Cart,
                Filtering, and Content Management System and payment system
                using stripe. With next.js server-side components from Next.js
                14 app router, ensuring an optimal user experience and strong
                SEO performance.
              </p>
              <Link
                href="https://ethnicinator.vercel.app"
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
              src="/images/optiflowinator.png"
              alt=""
              className="h-full object-top object-fill rounded-md aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase">Next.js 14</span>
              <h3 className="text-3xl font-bold">Optiflow Inator</h3>
              <p className="my-6">
                Optiflowinator is a Multiuser Next.js 14 app-directory based
                application, incorporating the Open-AI API to create, optimize
                and share code posts within a community feed. With a secure
                Google authentication using Next Auth, providing multiple login
                options.
              </p>
              <Link
                href="https://optiflowinator.vercel.app"
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
