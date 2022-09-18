import { HomeProps } from "../../@types/typing";

import About from "../../views/About";
import Contact from "../../views/contact/Contact";
import Experience from "../../views/experience/Experience";
import Hero from "../../views/hero/Hero";
import Skills from "../../views/skills/Skills";

const SECTION_CONFIG = [
  {
    id: "hero",
    Component: Hero,
    start: true,
  },
  {
    id: "about",
    Component: About,
  },
  {
    id: "experience",
    Component: Experience,
  },
  {
    id: "skills",
    Component: Skills,
  },
  {
    id: "contact",
    Component: Contact,
  },
];

const generateConfigWithProps = (props: HomeProps) => {
  return SECTION_CONFIG.map((config) => {
    if (config.id === "experience") {
      return { ...config, props: { experiences: props.experiences } };
    } else if (config.id === "skills") {
      return { ...config, props: { skills: props.skills } };
    } else {
      return { ...config, props: { pageInfo: props.pageInfo } };
    }
  });
};

export default generateConfigWithProps;
