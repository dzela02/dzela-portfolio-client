import Link from "next/link";
import React from "react";

const BUTTONS = ["about", "experience", "skills"];

const HeroButtons = () => {
  return (
    <div className="pt-5">
      {BUTTONS.map((text, i) => (
        <Link href={`#${text}`} key={i}>
          <button className="heroButton">{text}</button>
        </Link>
      ))}
    </div>
  );
};

export default HeroButtons;
