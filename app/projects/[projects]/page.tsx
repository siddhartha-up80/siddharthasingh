import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import list from "../list";
import Link from "next/link";

const Page = ({ params, searchParams }: any) => {
  const info = list.find((inator) => inator.slug === params.projects);

  //   console.log(info);

  return (
    <div className="mx-auto py-5">
      <section className="body-font overflow-hidden mx-auto w-full">
        <div className="px-5 md:py-24 mx-auto">
          <div className="lg:w-full mx-auto flex md:flex-row flex-col">
            <Link
              href={info?.link || "/projects"}
              className="flex justify-center items-center"
            >
              <Image
                height={900}
                width={900}
                alt="ecommerce"
                className="md:min-w-[40vw] md:max-w-[50vw] object-cover object-top rounded aspect-video"
                src={
                  info?.img ||
                  "https://source.unsplash.com/random/800x500/?project"
                }
              />
            </Link>

            <div className="lg:w-1/2 w-full lg:pl-10 mt-6 md:mt-0">
              <h2 className="text-sm title-font  tracking-widest">
                {info?.type}
              </h2>
              <h1 className=" text-3xl title-font font-medium mb-1">
                {info?.title}
              </h1>

              <p className="leading-relaxed mt-5">{info?.details}</p>

              <div className="flex mt-5">
                <span className="font-semibold text-xl ">{info?.tech}</span>
              </div>
              <div className="mt-6 md:mt-0">
                <Link href={info?.link || "/projects"}>
                  <Button className="text-white bg-black border-0 py-2 px-8  rounded text-lg md:mt-10 sm:mt-0 w-full font-semibold">
                    View
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
