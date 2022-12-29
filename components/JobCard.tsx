/* eslint-disable @next/next/no-img-element */
import React from 'react';

export interface JobProps {
  name: string,
  date: string,
  body: string[],
  skills: string[],
}

export const JobCard = ({name, body, skills, date}: JobProps) => {
  return (
    <div className="border-secondary2 border-2 p-6 rounded-md flex flex-col justify-between">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-primary3 text-lg">{name}</h1>
        <p className="text-secondary text-sm">{date}</p>
      </div>
      <ul className="list-disc pl-4">
        {body.map((text, index) => {
          return (
            <li key={index} className="text-secondary pt-4 text-sm">
              {text}
            </li>
          );
        })}
      </ul>
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