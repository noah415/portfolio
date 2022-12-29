/* eslint-disable @next/next/no-img-element */
import React, { ReactElement, useRef } from 'react';
// <a href="https://www.flaticon.com/free-icons/code" title="code icons">Code icons created by Icongeek26 - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>
{/* <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a> */}

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
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

  return (
    <div>
      {/* Header */}
      <div className="flex flex-row w-full justify-end p-4 fixed top-0 bg-background">
        <div className="w-1/2 flex flex-row justify-evenly">
          <a href="#hello" className="font-display max-w-sm leading-tight">
            <span className="link link-underline link-underline-black">Hello</span>
          </a>
          <a href="#about" className="font-display max-w-sm leading-tight">
            <span className="link link-underline link-underline-black">About</span>
          </a>
          <a href="#tools" className="font-display max-w-sm leading-tight">
            <span className="link link-underline link-underline-black">Tools</span>
          </a>
          <a href="#projects" className="font-display max-w-sm leading-tight">
            <span className="link link-underline link-underline-black">Projects</span>
          </a>
          <a href="#resume" className="font-display max-w-sm leading-tight">
            <span className="link link-underline link-underline-black">Resume</span>
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
            <h1 className="text-3xl font-semibold">About Me</h1>
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
          <h1 className="text-3xl font-semibold border">picture</h1>
        </div>
      </div>

      {/* Tools page */}
      <div id="tools" className="flex flex-wrap flex-column justify-center items-center min-h-screen min-w-screen">
        <div className="flex w-1/2 justify-end">
          <div className="w-3/4">
            <h1 className="text-3xl font-semibold text-primary3">Tools and Languages</h1>
            <div className="flex flex-wrap grow-0 justify-center mt-6">
              {skills.map((skill, index) => {
                  return (
                    <div key={index} className="transition ease-in-out duration-300 hover:-translate-y-1 inline-block rounded-sm p-4 m-3 bg-primary text-background hover:scale-110">
                      <p className="">{skill}</p>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-1/2 justify-center">
          <p className="text-secondary mt-8 w-1/2">
            I have been very fortunate in my experience in software as I have worked with frontend frameworks all the way to the Linux kernel.
            <br/>
            <br/>
            I although most of my experience is in frontend web frameworks, mobile frameworks, and backend servers, I also have some experience with DevOps and databases as well.
          </p>
        </div>
      </div>

      {/* Projects page */}
      <div id="projects" className="flex flex-wrap flex-column justify-center items-center min-h-screen min-w-screen">
        <div className="w-3/4">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <div className="flex flex-wrap grow-0 mt-6">
              <div className="border-primary3 border-2 p-6 w-1/4 h-1/3 rounded-md">
                <h1 className="text-primary3">jwt-go-server</h1>
                <p className="text-secondary pt-4 text-sm">
                  This is a skeleton project for creating a Go server which uses JWT authentication.
                </p>
              </div>
          </div>
        </div>
      </div>

      {/* Resume page */}
      <div id="resume" className="flex flex-wrap flex-column justify-center items-center min-h-screen min-w-screen">
        <div className="w-3/4 border">
          <h1 className="text-3xl font-semibold">Resume</h1>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col fixed bottom-0 justify-between pl-8 pb-8">
        <p className="-rotate-90 text-primary3 w-8 mb-6">noah.otsuka04@gmail.com</p>
        <div className="">
          <img src="/linkedin.svg" alt="Project SVG" width={35} height={35}/>
        </div>
        <div className="pb-1">
          <img src="/github.svg" alt="Project SVG" width={30} height={30}/>
        </div>
      </div>
    </div>
  );
}
