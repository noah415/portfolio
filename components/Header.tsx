import React from 'react';
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <div className="flex flex-row w-full justify-between p-4 fixed top-0 bg-background items-center">
      <div className="pl-2">
        <Link to={"hello"} smooth={true} duration={500}>
          <a>
            <img src="/betterlogo.svg" alt="logo" width={40} height={40}/>
          </a>
        </Link>
      </div>
      <div className="w-1/2 flex flex-row justify-evenly items-center">
        <Link to={"about"} smooth={true} duration={500}>
          <a className="font-display max-w-sm leading-tight">
            <span className="link link-underline link-underline-black">About</span>
          </a>
        </Link>
        <Link to={"tools"} smooth={true} duration={500}>
          <a className="font-display max-w-sm leading-tight">
            <span className="link link-underline link-underline-black">Tools</span>
          </a>
        </Link>
        <Link to={"experience"} smooth={true} duration={500}>
          <a className="font-display max-w-sm leading-tight">
            <span className="link link-underline link-underline-black">Experience</span>
          </a>
        </Link>
        <Link to={"projects"} smooth={true} duration={500}>
          <a className="font-display max-w-sm leading-tight">
            <span className="link link-underline link-underline-black">Projects</span>
          </a>
        </Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-1 border-2 rounded-md transition ease-in-out duration-300 hover:translate-y-1 hover:scale-110">
          Resume
        </a>
      </div>
    </div>
  );
};