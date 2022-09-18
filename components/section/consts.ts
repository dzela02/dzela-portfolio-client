import { HomeProps } from "../../pages";
import About from "../../views/About";
import Contact from "../../views/Contact";
import Experience from "../../views/Experience";
import Hero from "../../views/Hero";
import Skills from "../../views/Skills";
import { SectionConfig } from "./types";

export const SECTION_CONFIG = [
  {
    id: "hero",
    Element: Hero,
    start: false,
  },
  { id: "about", Element: About },
  { id: "experience", Element: Experience },
  { id: "skills", Element: Skills },
  { id: "contact", Element: Contact },
];

// export const generateSectionConfig = (props: HomeProps): SectionConfig => {

// };
