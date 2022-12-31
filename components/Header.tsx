import React from 'react';
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <div className="flex flex-row flex-wrap w-full justify-between p-4 fixed top-0 bg-background items-center max-w-screen">
      <div className="pl-2">
        <a href="#hello">
          <img src="/betterlogo.svg" alt="logo" className="w-3/4 lg:w-[40px]"/>
        </a>
      </div>
      <div className="w-1/2 flex flex-row flex-wrap justify-evenly items-center text-xs lg:text-base">
        <a href="#about" className="font-display max-w-sm leading-tight">
          <span className="link link-underline link-underline-black">About</span>
        </a>
        <a href="#tools" className="font-display max-w-sm leading-tight">
          <span className="link link-underline link-underline-black">Tools</span>
        </a>
        <a href="#experience" className="font-display max-w-sm leading-tight">
          <span className="link link-underline link-underline-black">Experience</span>
        </a>
        <a href="#projects" className="font-display max-w-sm leading-tight">
          <span className="link link-underline link-underline-black">Projects</span>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 lg:mt-0 px-2 lg:px-4 py-1 border-2 rounded-md transition ease-in-out duration-300 hover:translate-y-1 hover:scale-110">
          Resume
        </a>
      </div>
    </div>
  );
};