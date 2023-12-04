import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Tag } from '@/components/Tag';

export const PostCard = () => {
  return (
    <Link href="#">
      <div className="relative h-80 w-full">
        <Image
          src="/assets/images/download.png"
          fill
          alt="title"
          priority
          className="rounded-xl object-cover object-center"
        />
      </div>
      <div className="pt-3 ">
        <div className="mb-3 flex flex-wrap gap-2">
          {['TS', 'JS', 'REACT'].map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <time className="text-gray-400">
        13 de junho de 2023 • 4 minutos de leitura
      </time>
      <p className="mt-2 max-w-md text-ellipsis text-2xl font-medium text-gray-50">
        O que é Dependency Injection e como aplicar no React.js?
      </p>
      <p className="mt-3 text-gray-400">
        Vamos aprender à como aplicar esse conceito tão importante no React.js!
      </p>
    </Link>
  );
};
