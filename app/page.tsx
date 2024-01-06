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
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url('/images/background.jpg')",
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
              , pursuing a B.Tech degree in Electronics and Communication
              Engineering. I am always open to opportunities in which I can
              harness my skills and would{" "}
              <span className="text-purple-900 dark:text-purple-200">
                love to collaborate on projects.
              </span>
            </span>
            <Link href="/about" className="text-2xl">
              <Button className="text-white bg-purple-500 border-0 py-2 px-4  rounded text-lg mt-10 sm:mt-0">
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
        <div className="">
          <h1 className="text-3xl text-center my-10">QUICK PROJECTS</h1>
          <QuickProjects />
        </div>
      </>
      {/* quick projects list */}

      {/* connect with me */}
      <>
        <div className="flex justify-center items-center mx-auto">
          <div className="text-center my-10 mt-20">
            <h1 className="text-3xl">CONNECT WITH ME</h1>
            <p className="text-purple-900 dark:text-purple-200">
              Feel free to connect with me on
            </p>
            <ul className="flex justify-center items-center flex-row flex-wrap gap-4 mt-2">
              <li className="social-icons">
                <Link
                  href="https://github.com/siddhartha-up80"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-3xl"
                >
                  <AiFillGithub />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://twitter.com/siddhartha_up80"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-3xl"
                >
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://www.linkedin.com/in/siddhartha-singh-work"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-3xl"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://www.instagram.com/sid_up80"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colou text-3xl"
                >
                  <AiFillInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
      {/* connect with me */}
    </>
  );
}
