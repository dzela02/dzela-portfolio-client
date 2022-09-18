import React, { FC } from "react";

interface Props {
  text: string;
}

const ViewHeading: FC<Props> = ({ text }) => {
  return <h3 className="view-heading">{text}</h3>;
};

export default ViewHeading;
