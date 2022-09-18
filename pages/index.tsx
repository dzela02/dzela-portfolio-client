import type { GetStaticProps, NextPage } from "next";

import { Experience, PageInfo, Skill, Social } from "../@types/typing";

import Head from "next/head";

import Header from "../sticky-elements/Header";
import Footer from "../sticky-elements/Footer";
import Section from "../components/sections/Section";

import fetchServerSideProps from "../utils/api";
import generateConfigWithProps from "../components/sections/config";

interface HomeProps {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { socials, pageInfo } = props;
  const sectionConfig = generateConfigWithProps(props);

  return (
    <div className="main-container">
      <Head>
        <title>Hello, Marko here 👋</title>
        <meta name="description" content="Frontend developer" />
      </Head>

      <Header socials={socials} />

      {sectionConfig.map((config) => (
        // @ts-ignore: To be fixed <3
        <Section {...config} key={config.id} />
      ))}

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
  };
};
