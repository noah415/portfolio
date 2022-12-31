import React from 'react';
import { ProjectCard, ProjectProps } from './ProjectCard';

export const Projects = () => {
  const projects: ProjectProps[] = [{
      name: 'GymArc',
      link: 'https://github.com/GymArc/gymarc-application-client-rn',
      body: 'This is my senior project, which is a workout tracking app that allows users to see helpful analytical information for free.',
      skills: [
        'Typescript',
        'React Native',
        'WatermelonDB',
        'MVVM',
      ],
    },
    {
      name: 'Recibase',
      body: 'This is a web application that allows users to store their recipes and create weekly meal schedules so the users don\'t have to . This project uses JWT user authentication.',
      skills: [
        'Go',
        'JWT',
        'Gin',
        'Vue',
        'NuxtJS',
        'SQLite',
      ],
    },
    {
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

  return (
    <div id="projects" className="flex flex-wrap flex-column justify-center items-center min-h-screen min-w-screen pt-20 lg:pt-0">
      <div className="lg:w-3/4 p-4 lg:p-0">
        <h1 className="text-2xl lg:text-3xl font-semibold text-primary3">Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          {projects.map((project, index) => {
            return (
              <ProjectCard key={index} {...project} />
            );
          })}
        </div>
      </div>
    </div>
  );
};