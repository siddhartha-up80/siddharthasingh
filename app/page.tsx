import ColorIntro from "@/components/ColorIntro";
import Image from "next/image";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import QuickProjects from "@/components/QuickProjects";

export default function Page() {
  return (
    <>
      {/* color changing intro */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url('/images/backgrond.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <ColorIntro />
      </div>
      {/* color changing intro */}

      {/* intro content */}
      <>
        <div className="flex justify-between items-center min-h-[90vh]  flex-col md:flex-row md:max-w-[80vw] mx-auto">
          <div className="min-w-[45vw] flex flex-col gap-10 p-10 flex-wrap">
            <span className="text-2xl leading-relaxed">
              A full-stack web developer, with a strong inclination towards
              challenging projects, designing and developing web applications.
              My Primary tech stack includes{" "}
              <span className="text-purple-900 dark:text-purple-200">
                Next.js, ReactJs, Tailwind, Node.js, Express.js & MongoDB.
              </span>
            </span>
            <span className="text-2xl leading-relaxed">
              I am a{" "}
              <span className="text-purple-900 dark:text-purple-200">
                final-year student at Vellore Institute of Technology, Bhopal
              </span>
              , pursuing Bachelor of Technology in ECE. I am always open to
              opportunities in which I can harness my skills and would{" "}
              <span className="text-purple-900 dark:text-purple-200">
                love to collaborate on projects.
              </span>
            </span>
            <Link href="/about" className="text-2xl">
              <Button className="text-white bg-black border-0 py-2 px-8  rounded text-lg md:mt-10 sm:mt-0">
                Read More
              </Button>
            </Link>
          </div>
          <div>
            <Image
              src="/images/welcome.jpeg"
              alt="siddhartha"
              className="md:max-w-[30vw] p-10  object-cover rounded-lg"
              height={500}
              width={500}
            />
          </div>
        </div>
      </>
      {/* intro content */}

      {/* quick projects list */}
      <>
        <div id="projects">
          <h1 className="text-3xl text-center my-10">QUICK PROJECTS</h1>
          <QuickProjects />
        </div>
      </>

      {/* quick projects list */}
    </>
  );
}
