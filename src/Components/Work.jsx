import { motion } from "framer-motion";
import React, { useState } from "react";

const Work = () => {
    const [elems, setElems] = useState([
    {
        heading: "Columbia Pictures",
        subheading: "Celebrating a Century of Cinema",
        image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/900x1121/filters:quality(90)",
        video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
    },
    {
        heading: "Rino & Pelle",
        subheading: "Effortless chic lifestyle",
        image:
        "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)",
        video:
        "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
    },
    {
        heading: "Aebele Interiors",
        subheading: "Luxurious design experience",
        image:
        "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
        video:
        "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
    },
    {
        heading: "Pixelflakes",
        subheading: "Architectural Marketing Agency",
        video:
        "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
        image:
        "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
    },
]);
return (
    <div className="w-full relative">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 py-20">
        <div className="featured flex gap-3">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="capitalize">Featured Projects</h3>
        </div>
        <h1 className="text-6xl sm:text-[13rem] sm:leading-none sm:tracking-tight my-5">
            <motion.span 
            initial={{rotate:90, y:'40%', opacity:0}}
            whileInView={{rotate:0, y:0, opacity:1}}
            viewport={{once: true}}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: .8 }}
            className="inline-block origin-left"
            >
                Work
            </motion.span>
        </h1>
        <p className="leading-2 text-lg">
            Highlights of cases that we passionately built with forward-thinking clients and friends over the years.
        </p>
        <div className="elems sm:flex sm:flex-wrap sm:gap-5 mt-10">
            {elems.map((item, index) => {
            return (
            <div key={index} className="elem w-full sm:w-[48%] mt-10">
                <div className="video w-full h-[104vw] sm:h-[50vw] relative overflow-hidden">
                    <motion.img
                    initial={{opacity: 1}}
                    whileHover={{opacity: 0}}
                    data-scroll
                    data-scroll-speed='-.5'
                    className="hidden sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block w-full h-full object-cover"
                    src={item.image}
                    alt=""
                    />
                    <video
                    autoPlay
                    muted
                    loop
                    className="block z-[1] w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3]"
                    src={item.video}></video>
                </div>
                <div className="mt-4">
                    <h3 className="font-semibold">{item.heading}</h3>
                    <h3 className="capitalize opacity-40">{item.subheading}</h3>
                </div>
                </div>
            );
            })}
        </div>
        </div>
    </div>
    );
};

export default Work;
