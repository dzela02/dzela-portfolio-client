import http from "../http-client/http";
import { Experience, PageInfo, Skill, Social } from "../@types/typing";

type SupportedKey = "experiences" | "pageInfo" | "skills" | "socials";

export const fetchByKey = async (
  route: string,
  key: SupportedKey
): Promise<any> => {
  const { data: IncomingData } = await http.get(`api/${route}`);

  return IncomingData[key];
};

export const fetchSkills = async (): Promise<Skill[]> => {
  const skills: Skill[] = await fetchByKey("getSkills", "skills");

  return skills;
};

export const fetchSocials = async (): Promise<Social[]> => {
  const socials: Social[] = await fetchByKey("getSocials", "socials");

  return socials;
};

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const pageInfo: PageInfo = await fetchByKey("getPageInfo", "pageInfo");

  return pageInfo;
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  const experiences: Experience[] = await fetchByKey(
    "getExperiences",
    "experiences"
  );

  return experiences;
};

export const fetchServerSideProps = async () => {
  return await Promise.all([
    fetchPageInfo(),
    fetchExperiences(),
    fetchSkills(),
    fetchSocials(),
  ]);
};
