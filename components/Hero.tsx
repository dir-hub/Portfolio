import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/utils/cn'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from "./ui/MagicButton"

const Hero = () => {
  return (
    <div className="h-screen w-full dark:bg-black-100 bg-white relative flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `
        }}
      />
      
      <Spotlight className='-top-40 -left-10 md:-top-20 md:-left-32' fill="white" />
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
      <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
      
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white" style={{
        maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)'
      }} />
      
      <div className="flex justify-center relative z-10 -mt-12">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Transforming Concepts into Seamless Experiences" />
          <p className="mb-6 text-center text-sm lg:text-2xl md:text-2xl md:tracking-wider">
            Hi, I&apos;m Dhiraj, a web developer based in India.
          </p>
          <a href="#about" className="mt-2"><MagicButton title="Show my Work" icon={<FaLocationArrow />} position="right" /></a>
        </div>
      </div>
    </div>
  )
}

export default Hero