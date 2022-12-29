/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { JobCard, JobProps } from '../components/JobCard';
import { ProjectCard, ProjectProps } from '../components/ProjectCard';
// <a href="https://www.flaticon.com/free-icons/code" title="code icons">Code icons created by Icongeek26 - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>
{/* <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a> */}

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const skills = [
    'Javascript',
    'Typescript',
    'Go',
    'Python',
    'C/C++',
    'ReactJS',
    'React Native',
    'Vue',
    'Svelte',
    'NodeJS',
    'Gin',
    'Express',
    'Nuxt',
    'Next',
    'SQL',
    'SQLite',
    'MySQL',
    'Ansible',
    'Terraform',
  ];

  const projects: ProjectProps[] = [{
      name: 'jwt-go-server',
      link: 'https://github.com/noah415/jwt-go-server',
      body: 'This is a skeleton project for creating a Go server which uses JWT authentication.',
      skills: [
        'Go',
        'JWT',
        'Gin',
      ],
    },
    {
      name: 'Huffman_Compressor',
      link: 'https://github.com/noah415/Huffman_Compressor',
      body: 'Python class that compresses and decompresses a text file using Huffman Encoding algorithm.',
      skills: [
        'Python',
        'Algorithms',
        'Binary Trees',
      ],
    },
    {
      name: 'Sudoku Puzzle Generator',
      link: 'https://github.com/noah415/sudoku_cpp',
      body: 'This project uses an algorithm I created to randomly generate a sudoku puzzle using c++. The main purpose of this project was to learn c++.',
      skills: [
        'C++',
      ],
    },
  ];

  const jobs: JobProps[] = [
    {
      name: 'Staffwise LLC - Software Engineer',
      date: 'July 2022 - Current',
      body: [
        'Implementing Clean Architecture design to create productive and scalable software application.',
        'Creating server middleware, and endpoints using Express.js.',
      ],
      skills: [
        'Typescript',
        'ReactJS',
        'ExpressJS',
        'Terraform',
      ],
    },
    {
      name: 'NetApp - Automations Intern',
      date: 'June - Sept 2022',
      body: [
        'Wrote a Python CLI which automated NetApp storage systems deployment using Ansible.',
        'Created organized and scalable code base by using OOP and MVVM design pattern.',
      ],
      skills: [
        'Python',
        'Ansible',
      ],
    },
    {
      name: 'NetApp - Embedded Systems Intern',
      date: 'June - Sept 2021',
      body: [
        'Interpreted, searched, and coded in Linux OS code base to improve system boot times.',
      ],
      skills: [
        'C',
        'Bash',
        'Linux',
      ],
    },
  ];

  function onDocumentLoadSuccess(obj: any) {
    setNumPages(obj.numPages);
  }

  return (
    <div>
      <Head>
        <title>Noah Otsuka</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel='icon' href="./betterlogo.svg"></link>
      </Head>
      {/* Header */}
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

      {/* Hello page */}
      <div id="hello" className="flex flex-wrap flex-col justify-center items-center min-h-screen">
        <div className="w-3/4 flex-col">
          <p className="font-medium text-stone-400 text-primary2">Hi, my name is...</p>
          <h1 className="text-7xl font-bold mt-4 text-primary3">Noah Otsuka.</h1>
          <h1 className="text-7xl font-bold mt-4 text-secondary2">I am a software engineer.</h1>
          <p className="font-medium mt-4 w-2/3 text-secondary">
            My passion and hobby is to create web and mobile applications using new and performant tools.
            I also enjoy creating scalable, secure, and user friendly applications.
          </p>
        </div>
      </div>

      {/* About page */}
      <div id="about" className="flex flex-wrap flex-column justify-center items-center min-h-screen min-w-screen">
        <div className="flex w-1/2 justify-end">
          <div className="w-3/4">
            <h1 className="text-3xl text-primary3 font-semibold">About Me</h1>
            <p className="text-secondary mt-8">
              Hello, my name is Noah, and I love creating applications for users/customers to interact with.
              I love creating web or mobile applications whether for work, school, or as a personal project.
              <br/>
              <br/>
              In my exprience as a software engineer, I have thoroughly enjoyed working in all layers of an application's tech stack.
              Understanding useful software tools and methods is very important to me, 
              and I have found that the best and most fun way to learn something is to use or implement it.
              <br/>
              <br/>
              Most recently, I have wanted to learn how to create a server using 
              <a className="text-primary2 mt-6"> Go </a>
              and
              <a className="text-primary2 mt-6"> JWT </a>
              security, 
              so I created a GitHub repositor named 
              <a className="text-primary2 mt-6"> jwt-go-server </a>
              that acts as a starting point for creating a JWT authentication server using Go.
            </p>
          </div>
        </div>
        <div className="flex w-1/2 justify-center">
          <img src="/profile.jpg" alt="Profile Pic" width={350} height={350}/>
        </div>
      </div>

      {/* Tools page */}
      <div id="tools" className="flex flex-wrap flex-column justify-center items-center min-h-screen min-w-screen">
        <div className="flex w-1/2 justify-end">
          <div className="w-3/4">
            <div className="flex flex-wrap grow-0 justify-center mt-6">
              {skills.map((skill, index) => {
                  return (
                    <div key={index} className="transition ease-in-out duration-300 hover:-translate-y-1 inline-block rounded-md p-4 m-3 bg-primary text-background hover:scale-110">
                      <p className="">{skill}</p>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-1/2 justify-end">
          <div className="w-3/4">
            <h1 className="text-3xl font-semibold text-primary3 w-3/4">Tools and Languages</h1>
            <p className="text-secondary mt-8 w-3/4">
              I have been very fortunate in my professional experience as I have worked with frontend frameworks all the way to the Linux kernel.
              <br/>
              <br/>
              I although most of my experience is in frontend web frameworks, mobile frameworks, and backend servers, I also have some experience with DevOps and databases as well.
            </p>
          </div>
        </div>
      </div>

      {/* Experience page */}
      <div id="experience" className="flex flex-wrap flex-column justify-center items-center min-h-screen min-w-screen">
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold text-primary3">Experience</h1>
          <div className="grid grid-cols-1 gap-4 mt-6">
            {jobs.map((job, index) => {
              return (
                <JobCard key={index} {...job} />
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects page */}
      <div id="projects" className="flex flex-wrap flex-column justify-center items-center min-h-screen min-w-screen">
        <div className="w-3/4">
          <h1 className="text-3xl font-semibold text-primary3">Projects</h1>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {projects.map((project, index) => {
              return (
                <ProjectCard key={index} {...project} />
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col fixed bottom-0 justify-between pl-8 pb-8">
        <p className="-rotate-90 text-primary3 w-8 mb-6">noah.otsuka04@gmail.com</p>
        <a href="https://www.linkedin.com/in/noah-otsuka415/" target="_blank" rel="noopener noreferrer" className="">
          <img src="/linkedin.svg" alt="Project SVG" width={35} height={35}/>
        </a>
        <a href="https://github.com/noah415" target="_blank" rel="noopener noreferrer" className="pb-1">
          <img src="/github.svg" alt="Project SVG" width={30} height={30}/>
        </a>
      </div>
      <p className="text-xs text-secondary text-center">Designed and Built by Noah Otsuka</p>
      <p className="text-xs text-secondary text-center pb-2">Using ReactJS NextJS and tailwindcss</p>
    </div>
  );
}
