import React from "react";

interface Props {
  text: string;
}

const ViewHeading = ({ text }: Props) => {
  return <h3 className="view-heading">{text}</h3>;
};

export default ViewHeading;
