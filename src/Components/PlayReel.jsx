import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const PlayReel = () => {
    const parent = useRef(null);
    const videodiv = useRef(null);
    const play = useRef(null);
    const reel = useRef(null);
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: parent.current,
                top: "0 0",
                scrub: 1,
                pin: true
            }
        })
        tl
        .to(videodiv.current,{
            width:'100%',
            height:'100%',
            ease: Power4
        },'a')
        .to(play.current,{
            x:'100%',
            scale:1,
            ease: Power4
        },'a')
        .to(reel.current, {
            x: '-100%',
            scale:1,
            ease: Power4
        },'a')
    })
    return (
      <div
        ref={parent}
        className="w-full h-screen overflow-hidden relative bg-black"
      >
        <div
          ref={videodiv}
          className="w-52 sm:w-80  aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://download-video-ak.vimeocdn.com/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1744357091~exp=1744371491~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=e7e7e2bb3a1f783266ba2b4644c7c094e4277b876f53ba03a65eadcfb307725f&r=dXMtY2VudHJhbDE%3D"
          ></video>
        </div>
        <div className="overlay absolute w-full h-full text-white flex flex-col justify-between p-20">
          <div className="w-full flex items-center justify-center gap-3">
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
            <h3 className="text-sm">Work in motion</h3>
          </div>
          <h1 className="w-full flex justify-center items-center gap-36 sm:gap-96">
            <div ref={play} className="text-6xl sm:text-8xl font-light">
              Play
            </div>
            <div ref={reel} className="text-6xl sm:text-8xl font-light">
              Reel
            </div>
          </h1>
          <p className="text-center text-[1.6vh]">
            Our work is best experienced in motion. Don’t <br /> forget to put
            on your headphones.
          </p>
        </div>
      </div>
    );
};

export default PlayReel;
