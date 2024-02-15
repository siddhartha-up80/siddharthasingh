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
import list from "@/app/projects/list";

const AllProjects = () => {
  return (
    <>
      {/* Projects */}
      <div className="max-w-[90vw] mx-auto my-10">
        <div className="text-2xl text-center my-10">ALL OF MY PROJECTS</div>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 h-max">
          {list.map((item, index) => (
            <Card
              className="w-full flex justify-between  max-w-[40rem] h-full shadow-lg hover:shadow-xl hover:shadow-purple-600"
              key={index}
            >
              <Link href={`/projects/${item.slug}`}>
                {" "}
                <CardHeader floated={false} color="blue-gray">
                  <Image
                    src={item.img}
                    alt={item.title}
                    height={500}
                    width={500}
                    className="h-[15rem] object-cover object-top"
                  />
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
              </Link>

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
