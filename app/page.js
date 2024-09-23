"use client";
import Image from "next/image";
import { motion, spring } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef } from 'react';
import ContactForm from "./component/ContactForm";
export default function Home() {
  const logosRef = useRef(null);
  const aboutRef= useRef(null);
  const projectRef=useRef(null);
  const hobbiesRef=useRef(null);
  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);
  const handleClick=(refer)=>{
      refer.current.scrollIntoView({behavior: 'smooth'});
    
  }

  return (
    <div>
      <nav className="flex justify-around font-bold items-center sticky top-0 p-3 bg-slate-900 text-white">
       <Link href={"/"}>  <div className="text-2xl">VG</div> </Link>
        <ul className="flex gap-8">
          <li className="cursor-pointer" onClick={()=>{handleClick(aboutRef)}}>About</li>
          <li className="cursor-pointer" onClick={()=>{handleClick(projectRef)}}>Projects</li>
          <li className="cursor-pointer" onClick={()=>{handleClick(hobbiesRef)}}>Hobbies</li>
        </ul>
      </nav>
      <div ref={aboutRef} className="bg-bgImage bg-fixed md:h-[90vh] h-[75vh] opacity-80 flex flex-col-reverse md:flex-row justify-between p-16 items-center gap-4">
        <div className="md:text-5xl text-2xl flex flex-col gap-6 text-white font-serif items-center justify-center">
          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}
          transition={{delay:0.4,x:{type:'spring', stiffness:60},opacity:{duration:2},ease:"easeIn",duration:2}}  className="text-center text-3xl md:text-8xl">Vansh Gambhir</motion.div>
          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}
          transition={{delay:0.4,x:{type:'spring', stiffness:60},opacity:{duration:2},ease:"easeIn",duration:2}} >Web Developer</motion.div>
          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}
          transition={{delay:0.4,x:{type:'spring', stiffness:60},opacity:{duration:2},ease:"easeIn",duration:2}} >MERN Stack</motion.div>
          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}
          transition={{delay:0.4,x:{type:'spring', stiffness:60},opacity:{duration:2},ease:"easeIn",duration:2}} className="flex items-center justify-center">
          <TypeAnimation  className="md:text-5xl text-xs font-semibold text-center"
            sequence={[
              'Frontend Developer',
              1000,
              'Backend Developer',
              1000,
              'Problem Solver',
              1000,
            ]}
            speed={20}
            repeat={Infinity}
          />
          </motion.div>
        </div>
        <div className="overflow-hidden">
        <motion.div className="w-60 md:w-80" initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}
          transition={{delay:0.4,x:{type:'spring', stiffness:60},opacity:{duration:2},ease:"easeIn",duration:2}}>
          <Image src="/coding.png" className="shadow-xl rounded-full" width={300} height={100} alt="Image" />
        </motion.div>
        </div>
      </div>
      <div>
        <div ref={projectRef} className="h-1 bg-gray-400"></div>
        <h1 className="bg-white p-8 text-center font-bold md:text-7xl text-5xl m-8">Projects</h1>
        <div className="flex md:flex-row flex-col-reverse justify-around m-8 items-center">
          <div className="overflow-x-hidden">
          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}
          transition={{delay:0.4,x:{type:'spring', stiffness:60},opacity:{duration:2},ease:"easeIn",duration:2}} className="md:w-[40vw] w-full shadow-slate-500 shadow-lg">
            <div className="font-bold text-3xl text-center">Engineer&apos;s Mahotsav Website</div>
            <p className="text-justify font-serif p-9">
              The Engineer&apos;s Day Event Booking Website is a dedicated platform for organizing and managing events in celebration of Engineer&apos;s Day. It offers a user-friendly interface to browse, book, and participate in various events such as seminars, workshops, competitions, and networking sessions.
            </p>
            <div className="text-center p-2 text-lg font-semibold">
              <Link href="https://engineersday.uudoon.in/" target='_blank' className="text-blue-800">View Project</Link>
            </div>
          </motion.div>
          </div>
          <div className="overflow-x-hidden">
          <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}
          transition={{delay:0.4,x:{type:'spring', stiffness:60},opacity:{duration:2},ease:"easeIn",duration:2}} className="md:w-[40vw] w-full">
            <Image src="/engineerday.png" width={700} height={100} alt="Engineer Day" />
          </motion.div>
          </div>
        </div>
        <div className="h-1 bg-gray-400"></div>
        <div className="md:flex-row flex flex-col justify-around items-center m-8">
          <div className="overflow-x-hidden">
          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}
          transition={{delay:0.4,x:{type:'spring', stiffness:60},opacity:{duration:2},ease:"easeIn",duration:2}} className="md:w-[40vw] w-full">
            <Image src="/kaviya.png" width={700} height={100} alt="Farmer" />
          </motion.div>
          </div>
          <div className="overflow-x-hidden">
          <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}
          transition={{delay:0.4,x:{type:'spring', stiffness:60},opacity:{duration:2},ease:"easeIn",duration:2}} className="md:w-[40vw] w-full shadow-slate-500 shadow-lg">
            <div className="font-bold text-2xl text-center">Kaviya: Supporting Indian Farmers</div>
            <p className="text-justify font-serif p-9">
              Kaviya is your go-to platform for essential farming resources. Discover government schemes, MSP details, and protective laws. Access modern agricultural technologies, weather-based crop recommendations, and subsidies. Connect with landlords and explore crops that reduce import reliance. Empower your farming with Kaviya.
            </p>
            <div className="text-center p-2 text-lg font-semibold">
              <Link href="https://kaviya-1up8x1hzj-p94vanshs-projects.vercel.app/" target='_blank' className="text-blue-800">View Project</Link>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
      <div ref={hobbiesRef} className="h-1 bg-gray-400"></div>
      <h1 className="bg-white p-8 text-center font-bold text-5xl md:text-7xl m-8">Hobbies</h1>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll mb-8">
          <li className=" font-bold text-lg md:text-3xl text-red-800">Anime</li>
          <li className=" font-bold text-lg md:text-3xl text-red-800">LeetCoding</li>
          <li className=" font-bold text-lg md:text-3xl text-red-800">Competitive Programming</li>
          <li className=" font-bold text-lg md:text-3xl text-red-800">Reading</li>
          <li className=" font-bold text-lg md:text-3xl text-red-800">Music</li>
          <li className=" font-bold text-lg md:text-3xl text-red-800">Web Development</li>
          <li className=" font-bold text-lg md:text-3xl text-red-800">Coding</li>
          <li className=" font-bold text-lg md:text-3xl text-red-800">Badminton</li>
        </ul>
      </div>
      <ContactForm/>
    </div>
  );
}
