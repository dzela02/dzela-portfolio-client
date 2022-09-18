import type { GetStaticProps, NextPage } from "next";

import { Experience, PageInfo, Skill, Social } from "../@types/typing";

import Head from "next/head";
import Header from "../sticky-elements/Header";
import About from "../views/About";
import Contact from "../views/Contact";
import WorkExperience from "../views/Experience";
import Hero from "../views/Hero";
import Skills from "../views/Skills";
import { fetchServerSideProps } from "../utils/api";
import Footer from "../sticky-elements/Footer";

export interface HomeProps {
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
    <div className="main-container">
      <Head>
        <title>Hello, Marko here 👋</title>
        <meta name="description" content="Frontend developer" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>

      <Footer image={pageInfo.heroImage} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [pageInfo, experiences, skills, socials] = await fetchServerSideProps();

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
