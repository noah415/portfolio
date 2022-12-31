import React from 'react';

export const Tools = () => {
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
  );
};