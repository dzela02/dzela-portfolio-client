import React from "react";

interface Props {
  text: string;
}

const UnderlinedText = ({ text }: Props) => {
  return <span className="underline decoration-[#3f51b5]">{text}</span>;
};

export default UnderlinedText;
