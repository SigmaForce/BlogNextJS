import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type LogoProps = {
  width?: number;
  height?: number;
};

export const Logo = ({ width = 144, height = 24 }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        src="/assets/images/Logo.svg"
        alt="Logo"
        width={width}
        height={height}
      />
    </Link>
  );
};
