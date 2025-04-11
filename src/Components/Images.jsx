import gsap, { Linear, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const Images = () => {
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);
    const fourth = useRef(null);
    const parent = useRef(null);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:parent.current,
                start:"0 90%",
                scrub:1,
            }
        });
        tl
        .to(first.current,{
            x:"40%",
            ease:Linear
        }, 'a')
        .to(second.current,{
            x:"-40%",
            ease:Linear
        }, 'a')
        .to(third.current,{
            x:"-40%",
            ease:Linear
        }, 'a')
        .to(fourth.current,{
            x:"40%",
            ease:Linear
        }, 'a')
    })
    return (
        <div ref={parent} className='w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center'>
            <div className="w-[40%] sm:w-[25%] h-1/2 sm:h-[90%] relative sm:mt-64">
                <div ref={first} className="absolute w-20 sm:w-32 h-[7rem] sm:h-48 -right-1/3 top-6">
                    <img className='w-full h-full object-cover object-top' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)" alt="" />
                </div>
                <div ref={second} className="absolute w-[8rem] sm:w-[20rem] aspect-video -left-1/2 sm:-left-[90%] top-1/3 sm:top-1/4">
                    <video autoPlay muted loop className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
                </div>
                <div ref={third} className="absolute w-[9rem] sm:w-[17rem] aspect-video -left-[20%] sm:-left-[70%] -bottom-10 sm:-bottom-32">
                    <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)" alt="" />
                </div>
                <div ref={fourth} className="absolute w-[8rem] sm:w-[17em] sm: aspect-square -right-[70%] sm:-right-[85%] -bottom-[10%] sm:-bottom-[52%]">
                    <video autoPlay muted loop className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
                </div>
                <img className='w-full h-full object-cover flex justify-center items-center object-top' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)" alt="" />
            </div>
        </div>
    )
}

export default Images
