import React, { FC, ReactElement } from "react";

import NextImage from "next/image";
import Link from "next/link";
import { Image } from "../@types/typing";
import { urlFor } from "../sanity";

interface FooterProps {
  image: Image;
}

const Footer: FC<FooterProps> = ({ image }): ReactElement => {
  const imageSource = urlFor(image);

  return (
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <NextImage
            src={imageSource}
            width={40}
            height={40}
            className="rounded-full filter grayscale hover:grayscale-0"
            alt=""
          />
        </div>
      </footer>
    </Link>
  );
};

export default Footer;
