"use client"
import Hero from '@/Components/Hero/hero'
import Courses from '@/Components/Courses/courses'
import TypeWriter from '@/Components/Typewriter/typewriter'
import About from '@/Components/About/about'
export default function Home() {
  const words=[
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "Resource",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Finder.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <Hero>
         <TypeWriter words={words}/>
        <div className=' text-base'>
           On our platform you will find best resources for popular tech stacks
        </div>
        <div className=' text-base'>
          Sign Up or Login to Access Your Favorite Resources
        </div>
        <div className='w-full flex justify-center items-center mt-10'>
          <button className='mt-5 px-8 py-2 text-base font-bold text-black bg-wb_bgcolor_w-400 rounded-md mr-2'>Get Started</button>
          <button className='mt-5 px-8 py-2 text-base font-bold text-white bg-black border border-1 rounded-md ml-2'>Log in</button>
        </div>
      </Hero>
      <Courses/>
      <About/>
    </>
  );
}
