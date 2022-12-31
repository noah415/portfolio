import React from 'react';

export const Hello = () => {
  return (
    <div id="hello" className="flex flex-wrap flex-col justify-center items-center min-h-screen">
      <div className="lg:w-3/4 flex-col lg:p-0 p-4">
        <p className="font-medium text-stone-400 text-primary2">Hi, my name is...</p>
        <h1 className="lg:text-7xl font-bold mt-4 text-primary3 text-3xl">Noah Otsuka.</h1>
        <h1 className="lg:text-7xl font-bold mt-4 text-secondary2 text-3xl">I am a software engineer.</h1>
        <p className="font-medium mt-4 lg:w-2/3 text-secondary">
          My passion and hobby is to create web and mobile applications using new and performant tools.
          I also enjoy creating scalable, secure, and user friendly applications.
        </p>
      </div>
    </div>
  );
};