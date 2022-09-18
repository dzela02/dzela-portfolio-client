import React, { FC } from "react";

interface SectionProps {
  id: string;
  start?: boolean;
  Component: FC;
  props?: any;
}

const Section: FC<SectionProps> = ({ id, Component, props, start = false }) => {
  const snap = start ? "snap-start" : "snap-center";

  return (
    <section id={id} className={snap}>
      <Component {...props} />
    </section>
  );
};

export default Section;
