import React from 'react';

export const About = () => {
  return (
    <div id="about" className="flex flex-wrap flex-column justify-center items-center min-h-screen min-w-screen pt-20">
      <div className="flex flex-wrap lg:w-1/2 p-4 lg:p-0 justify-end">
        <div className="lg:w-3/4">
          <h1 className="text-2xl lg:text-3xl text-primary3 font-semibold">About Me</h1>
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
  );
};