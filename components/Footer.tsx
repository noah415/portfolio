import React from 'react';

export const Footer = () => {
  return (
    <div className="flex flex-col fixed invisible lg:visible bottom-0 justify-between pl-4 pb-8">
      <p className="-rotate-90 text-primary3 w-8 mb-6">noah.otsuka04@gmail.com</p>
      <a href="https://www.linkedin.com/in/noah-otsuka415/" target="_blank" rel="noopener noreferrer" className="">
        <img src="/linkedin.svg" alt="Project SVG" className="w-[34px]"/>
      </a>
      <a href="https://github.com/noah415" target="_blank" rel="noopener noreferrer" className="pb-1">
        <img src="/github.svg" alt="Project SVG" className="w-1/12 lg:w-[30px]"/>
      </a>
    </div>
  );
};