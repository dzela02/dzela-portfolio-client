import type { GetStaticProps, NextPage } from "next";

import Head from "next/head";

import {
  fetchExperiences,
  fetchPageInfo,
  fetchSkills,
  fetchSocials,
} from "../utils/api";

import { Experience, PageInfo, Skill, Social } from "../typing";
import Hero from "../components/views/hero/Hero";
import About from "../components/views/About";
import WorkExperience from "../components/views/experience/Experience";
import Skills from "../components/views/skills/Skills";
import Contact from "../components/views/contact/Contact";
import Header from "../components/sticky-elements/Header";
import Footer from "../components/sticky-elements/Footer";

type HomeProps = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // const [pageInfo, experiences, skills, socials] = await fetchServerSideProps();
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

    revalidate: 300,
  };
};

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
        <Contact pageInfo={pageInfo} />
      </section>

      <Footer image={pageInfo.heroImage} />
    </div>
  );
};

export default Home;
