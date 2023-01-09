/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useState } from 'react';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hello } from '../components/Hello';
import { Projects } from '../components/Projects';
import { Tools } from '../components/Tools';

// <a href="https://www.flaticon.com/free-icons/code" title="code icons">Code icons created by Icongeek26 - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a>

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(obj: any) {
    setNumPages(obj.numPages);
  }

  return (
    <div>
      <Head>
        <title>Noah Otsuka - Software Engineer - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Learn more about Noah Otsuka's skills and interests in the world of software engineering." key="desc"></meta>
        <link rel="canonical" href="https://portfolio-noah415.vercel.app/" key="cononical" />
        <link rel='icon' href="./betterlogo.svg"></link>
      </Head>

      {/* Header */}
      <Header />

      {/* Hello page */}
      <Hello />

      {/* About page */}
      <About />

      {/* Tools page */}
      <Tools />

      {/* Experience page */}
      <Experience /> 

      {/* Projects page */}
      <Projects />

      {/* Footer */}
      <Footer />
      
      <p className="text-xs text-secondary text-center">Designed and Built by Noah Otsuka</p>
      <p className="text-xs text-secondary text-center pb-2">Using ReactJS NextJS and tailwindcss</p>
    </div>
  );
}
