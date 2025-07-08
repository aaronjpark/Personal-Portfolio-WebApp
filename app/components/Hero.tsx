"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Large heading */}
        <motion.div
          className="text-center mt-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-blue-600">
            I'm Aaron Park.
          </h1>
        </motion.div>

        {/* Content section with image and text */}
        <div className="lg:flex lg:items-center lg:gap-x-16">
          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <Image
                src="/assets/images/headshot.JPG"
                alt="Aaron Park's Headshot"
                width={310} // narrower
                height={360} // taller
                className="w-60 h-72 object-cover shadow-xl ring-4 ring-gray-100"
                style={{
                  borderRadius: "50% 50% 20px 20px",
                }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl sm:text-4.5xl font-bold text-foreground mb-6">
              I'm a Full-Stack Software Engineer.
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Over the past few years, I've built a broad foundation across
                front-end and back-end technologies, growing into a well-rounded
                full-stack engineer.
              </p>

              <p>
                My passion lies in bridging practical engineering with
                innovation, crafting software that's not only functional, but
                meaningful. Let's connect and build something impactful.
              </p>
            </div>

            <motion.div
              className="mt-10 flex items-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#portfolio" className="apple-button">
                Explore My Work
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                Get in touch <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
