import Head from 'next/head';
import React from 'react';
import { PortfolioApp } from '../components/portfolio/PortfolioApp';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noah Otsuka - Senior Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Learn more about Noah Otsuka's skills and interests in the world of software engineering." key="desc"></meta>
        <link rel="canonical" href="https://portfolio-noah415.vercel.app/" key="cononical" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml"></link>
      </Head>

      <PortfolioApp />
    </div>
  );
}
