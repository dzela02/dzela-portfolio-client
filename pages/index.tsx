import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import About from "../views/About";
import Hero from "../views/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
    </div>
  );
};

export default Home;
