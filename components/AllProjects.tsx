"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import Link from "next/link";
import Image from "next/image";

const AllProjects = () => {
 const list = [
   {
     title: "Inators UI",
     img: "https://source.unsplash.com/random/800x500/?reactjs",
     description:
       "UI components library based on shadcn-ui and tailwind for developers and designers to make creating nextjs client side as well as server side interfaces easier.",
     link: "https://chatagraminator.vercel.app/",
   },{
     title: "Chatagraminator",
     img: "/images/chatagram.png",
     description:
       "An innovative post-sharing platform powered by OpenAI. Unleashing the possibilities of Next.js 13 App Router",
     link: "https://chatagraminator.vercel.app/",
   },
   {
     title: "SwarnaLehenga",
     img: "https://source.unsplash.com/random/800x800/?saree",
     description:
       "An Indian Ethnic wear E-commerce web-app crafted with the brilliance of Next.js 13 Pages Directory.",
     link: "https://swarnalehenga.vercel.app/",
   },
   {
     title: "Blissinator",
     img: "https://source.unsplash.com/random/800x500/?stress,rejection",
     description:
       "Mental Health Counselling website powered by the magic of Next.js 13 App router",
     link: "https://blissinator.vercel.app/",
   },
   {
     title: "Inator",
     img: "https://source.unsplash.com/random/800x500/?coding",
     description:
       "A personal projects portfolio website that pushes the boundaries of design and technology with Next.js 13 App Router.",
     link: "https://siddharthasingh.vercel.app/",
   },
  //  {
  //    title: "Managinator",
  //    img: "https://source.unsplash.com/random/800x500/?students,girl",
  //    description:
  //      "A student personal information web-app crafted with the brilliance of React.",
  //    link: "https://managinator.vercel.app/",
  //  },
   {
     title: "Cryptoinator",
     img: "https://source.unsplash.com/random/800x500/?Crypto,currency",
     description:
       "Cryptocurrency web-app designed with React.",
     link: "https://cryptoinator.vercel.app/",
   },
   {
     title: "Plagiarisminator",
     img: "https://source.unsplash.com/random/800x500/?text,books",
     description:
       "Plagiarism checker web-app meticulously crafted with the power of React.",
     link: "https://plagiarisminator.vercel.app/",
   },
   {
     title: "Ainator",
     img: "https://source.unsplash.com/random/800x500/?notes,text",
     description:
       "A Note-taking ai powerd web-app that leverages chatgpt api for note-taking. ",
     link: "https://ainator.vercel.app/",
   },
 ];


  return (
    <>
      {/* Projects */}
      <div className="max-w-[90vw] mx-auto my-10">
        <div className="text-2xl text-center my-10">ALL OF MY PROJECTS</div>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-4 h-max">
          {list.map((item, index) => (
            <Card className="w-full flex justify-between  max-w-[40rem] shadow-lg hover:shadow-xl hover:shadow-purple-600" key={index}>
              <CardHeader floated={false} color="blue-gray">
                <Image src={item.img} alt={item.title} height={500} width={500} className="h-[15rem] object-cover object-top"/>
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {item.title}
                  </Typography>
                </div>
                <Typography color="gray">{item.description}</Typography>
              </CardBody>
              <CardFooter className="pt-3">
                <Link href={item.link} target="_blank">
                  <Button size="lg" fullWidth={true}>
                    View Live
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Projects */}
    </>
  );
};

export default AllProjects;
