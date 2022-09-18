import type { GetStaticProps, NextPage } from "next";

import Head from "next/head";

import Header from "../sticky-elements/Header";
import Footer from "../sticky-elements/Footer";

import fetchServerSideProps from "../utils/api";
import { Experience, PageInfo, Skill, Social } from "../@types/typing";
import Hero from "../views/hero/Hero";
import About from "../views/About";
import WorkExperience from "../views/experience/Experience";
import Skills from "../views/skills/Skills";
import Contact from "../views/contact/Contact";

interface HomeProps {
  pageInfo: PageInfo | null;
  experiences: Experience[] | null;
  skills: Skill[] | null;
  socials: Social[] | null;
}

const Home: NextPage<HomeProps> = ({
  socials,
  pageInfo,
  experiences,
  skills,
}) => {
  return (
    <div className="main-container">
      <Head>
        <title>Hello, Marko here 👋</title>
        <meta name="description" content="Frontend developer" />
      </Head>

      {socials && <Header socials={socials} />}

      <section id="hero" className="snap-start">
        {pageInfo && <Hero pageInfo={pageInfo} />}
      </section>

      <section id="about" className="snap-center">
        {pageInfo && <About pageInfo={pageInfo} />}
      </section>

      <section id="experience" className="snap-center">
        {experiences && <WorkExperience experiences={experiences} />}
      </section>

      <section id="skills" className="snap-center">
        {skills && <Skills skills={skills} />}
      </section>

      <section id="contact" className="snap-center">
        {pageInfo && <Contact pageInfo={pageInfo} />}
      </section>

      {pageInfo && <Footer image={pageInfo.heroImage} />}
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

    revalidate: 25,
  };
};
