import Head from 'next/head';
import React from 'react';
import { PortfolioApp } from '../components/portfolio/PortfolioApp';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noah Otsuka — Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Noah Otsuka builds production systems that scale — cloud migrations and platforms used by hundreds of teams." key="desc"></meta>
        <link rel="canonical" href="https://portfolio-noah415.vercel.app/" key="cononical" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml"></link>
      </Head>

      <PortfolioApp />
    </div>
  );
}
