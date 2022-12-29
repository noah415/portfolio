/* eslint-disable @next/next/no-img-element */
import React from 'react';

export interface ProjectProps {
  name: string,
  link?: string,
  body: string,
  skills: string[],
}

export const ProjectCard = ({name, body, skills, link}: ProjectProps) => {
  return (
    <div className="border-secondary2 border-2 p-6 rounded-md flex flex-col justify-between">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-primary3">{name}</h1>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="">
            <img src="/github_link.svg" alt="Project SVG" width={24} height={24}/>
          </a>
        )}
      </div>
      <p className="text-secondary pt-4 text-sm">
        {body}
      </p>
      <div className="flex flex-wrap flex-row mt-3 gap-2">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="text-xs inline-block rounded-sm p-2 bg-primary text-background">
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};