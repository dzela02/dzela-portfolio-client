import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import About from "../views/About";
import Contact from "../views/Contact";
import Experience from "../views/Experience";
import Hero from "../views/Hero";
import Skills from "../views/Skills";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth">
      <Head>
        <title>Hello, Marko here 👋</title>
        <meta name="description" content="Frontend developer" />
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="contact-me" className="snap-center">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
