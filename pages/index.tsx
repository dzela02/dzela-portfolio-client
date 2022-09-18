import type { GetStaticProps, NextPage } from "next";

import Link from "next/link";
import Image from "next/image";

import Logo from "../assets/MarkoProfilna.jpeg";

import { Experience, PageInfo, Skill, Social } from "../@types/typing";

import Head from "next/head";
import Header from "../components/Header";
import About from "../views/About";
import Contact from "../views/Contact";
import WorkExperience from "../views/Experience";
import Hero from "../views/Hero";
import Skills from "../views/Skills";
import {
  fetchExperiences,
  fetchPageInfo,
  fetchSkills,
  fetchSocials,
} from "../utils/api";

interface HomeProps {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
}

const Home: NextPage<HomeProps> = ({
  pageInfo,
  experiences,
  skills,
  socials,
}) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#3f51b5]/80">
      <Head>
        <title>Hello, Marko here 👋</title>
        <meta name="description" content="Frontend developer" />
      </Head>

      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              width={40}
              height={40}
              src={Logo}
              className="rounded-full filter grayscale hover:grayscale-0"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
    },

    revalidate: 25000,
  };
};
