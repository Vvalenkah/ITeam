import * as React from "react"

import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import About from '../components/about/about';
import ExpBanner from '../components/expBanner/expBanner';

import '../global.scss';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ExpBanner />
    </>
  )
}

