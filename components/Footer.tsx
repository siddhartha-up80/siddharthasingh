import React from 'react'
import Link from 'next/link';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font bg-purple-900 dark:bg-black mt-10">
        <div className="container px-5 py-3 mx-auto flex items-center justify-between sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center"
          >
            <span className="">Fully Made by Siddhartha Singh</span>
          </Link>
          <span className="flex title-font font-medium">
            Made by using Next.js 14 App Router
          </span>
          <span className="inline-flex  sm:mt-0 mt-4 justify-center sm:justify-start">
            <ul className="flex justify-center items-center flex-row flex-wrap gap-4">
              <li className="social-icons">
                <Link
                  href="https://github.com/siddhartha-up80"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-xl"
                >
                  <AiFillGithub />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://twitter.com/siddhartha_up80"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-xl"
                >
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://www.linkedin.com/in/siddhartha-singh-work"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-xl"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://www.instagram.com/sid_up80"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colou text-xl"
                >
                  <AiFillInstagram />
                </Link>
              </li>
            </ul>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer