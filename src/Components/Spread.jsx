import { motion } from "framer-motion";
import React from "react";

const Spread = () => {
    return (
        <div className="w-full bg-white py-20 sm:mt-64">
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-10">
                <div className="flex items-center justify-center gap-2">
                    <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 sm:w-2"
                        data-v-669b4a84=""
                    >
                        <path
                            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                            fill="currentColor"
                            data-v-669b4a84=""
                        ></path>
                    </svg>
                    <h1 className="text-xs tracking-tighter">In the media</h1>
                </div>
                <div className="text mt-10 text-center">
                    {['Spread','the News'].map((item, index)=>{
                        return <h1 key={index} className="capitalize text-6xl sm:text-9xl tracking-tighter overflow-hidden">
                            <motion.span initial={{ rotate: 90, y: '40%', opacity: 0 }}
                                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ ease: [0.83, 0, 0.17, 1], duration: .8 }}
                                className="inline-block origin-left"
                                >
                                    {item}
                                </motion.span>
                        </h1>
                    })}
                    <p className="w-2/3 sm:w-1/3 mx-auto mt-5 sm:mt-10 text-md sm:text-xl leading-2">Find out more about our work on these leading design and technology platforms.</p>
                    <a className=" border-b-[1px] border-zinc-900 pb-1 mt-5 inline-block" href="#">Browse all news</a>
                </div>
            </div>
        </div>
    );
};

export default Spread;
