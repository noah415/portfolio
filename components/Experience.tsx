import React from 'react';
import { JobCard, JobProps } from './JobCard';

export const Experience = () => {
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

  return (
    <div id="experience" className="flex flex-wrap flex-column justify-center items-center min-h-screen min-w-screen">
      <div className="lg:w-1/2 p-4 lg:p-0">
        <h1 className="text-2xl lg:text-3xl pt-20 lg:pt-0 font-semibold text-primary3">Experience</h1>
        <div className="grid grid-cols-1 gap-4 mt-6">
          {jobs.map((job, index) => {
            return (
              <JobCard key={index} {...job} />
            );
          })}
        </div>
      </div>
    </div>
  );
};