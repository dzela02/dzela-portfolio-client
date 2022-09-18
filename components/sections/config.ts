import { HomeProps } from "../../pages";
import About from "../../views/About";
import Contact from "../../views/Contact";
import Experience from "../../views/Experience";
import Hero from "../../views/Hero";
import Skills from "../../views/Skills";

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
    if (config.id === "hero" || config.id === "about") {
      return { ...config, props: { pageInfo: props.pageInfo } };
    } else if (config.id === "experience") {
      return { ...config, props: { experiences: props.experiences } };
    } else if (config.id === "skills") {
      return { ...config, props: { skills: props.skills } };
    } else {
      return config;
    }
  });
};

export default generateConfigWithProps;
