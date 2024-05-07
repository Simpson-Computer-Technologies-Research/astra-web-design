"use client";

import Image from "next/image";
// import framer motion
import { motion } from "framer-motion";
// rocket icon from react icons
import { FaRocket } from "react-icons/fa";
// external link icon from react icons
import { AiOutlineLink } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Image
        src="/p-waves.jpg"
        alt="P-Waves"
        className="fixed top-0 left-0 z-0 brightness-[0.2]"
        layout="fill"
        objectFit="cover"
      />

      <nav className="fixed z-[100] top-0 left-0 w-screen h-auto flex justify-between items-center py-7 px-10">
        <h1 className="text-2xl text-white">
          Astra{" "}
          <mark className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Web
          </mark>
        </h1>
        <div className="flex flex-row gap-20">
          <a href="/" className="text-white hover:text-gray-400">
            Home
          </a>
          <a href="/" className="text-white hover:text-gray-400">
            About
          </a>
          <a href="/" className="text-white hover:text-gray-400">
            Contact
          </a>
        </div>
      </nav>

      <main className="parent flex min-h-screen relative flex-col items-center justify-center p-24">
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="text-9xl font-bold text-white w-full max-w-4xl text-center">
            Welcome to the{" "}
            <mark className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Future
            </mark>
          </h1>
          <p className="text-xl text-white mt-4 text-center">
            We&apos;re redesigning the{" "}
            <mark className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              future
            </mark>{" "}
            of web development.
          </p>
        </div>

        {/** Buttons */}
        <div className="flex flex-row gap-4 mt-8 relative z-[100]">
          <a
            href="/"
            className="bg-gradient-to-r from-purple-400 to-blue-500 text-white p-px rounded-xl hover:from-purple-500 hover:to-blue-600"
          >
            <p className="bg-slate-950 text-center flex gap-4 flex-row justify-center items-center w-full h-full rounded-xl px-7 py-3">
              <AiOutlineLink className="text-xl" />
              Learn More
            </p>
          </a>
          <a
            href="/"
            className="bg-gradient-to-r from-purple-400 to-blue-500 text-white p-px rounded-xl hover:from-purple-500 hover:to-blue-600"
          >
            <p className="bg-slate-950 text-center flex gap-4 flex-row justify-center items-center w-full h-full rounded-xl px-7 py-3">
              <FaRocket className="text-xl" />
              Our Mission
            </p>
          </a>
        </div>
      </main>

      <div className="fixed z-50 bottom-0 left-0 w-screen h-auto flex justify-center items-center py-7 px-10">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear()} Astra Web. All rights reserved.
        </p>
      </div>

      {/**
       * Framer motion div that moves a bunch of white stars around the screen
       * when the mouse moves over the parent div.
       */}
      <motion.div
        className="fixed z-50 top-0 left-0 w-screen h-screen"
        onMouseMove={(e) => {
          const x = e.pageX;
          const y = e.pageY;
          const parent = e.currentTarget;
          const children = parent.children;

          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const dx = x - (child as HTMLElement).offsetLeft;
            const dy = y - (child as HTMLElement).offsetTop;

            // move to the direction of the mouse slightly
            (child as HTMLElement).style.transform = `translate(${
              dx / 100
            }px, ${dy / 100}px)`;
          }
        }}
        onMouseLeave={(e) => {
          const parent = e.currentTarget;
          const children = parent.children;

          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            (child as HTMLElement).style.transform = "translate(0, 0)";
          }
        }}
        // make the parent div interactive
        whileHover={{ scale: 1.1 }}
        animate={{ scale: 1 }}
      >
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-30 rounded-full"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
          />
        ))}
      </motion.div>
    </>
  );
}
