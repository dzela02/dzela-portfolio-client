import React, { FC, ReactElement } from "react";
import { SectionProps } from "./types";

const Section: FC<SectionProps> = ({
  id,
  Element,
  pageProps,
  start = false,
}): ReactElement => {
  const snap = start ? "snap-start" : "snap-center";

  return (
    <section id={id} className={snap}>
      <Element {...pageProps} />
    </section>
  );
};

export default Section;
