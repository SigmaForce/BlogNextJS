import { formatDate } from '@/functions';
import { BlogPost } from '@/models/BlogPost';
import Image from 'next/image';
import React from 'react';
import { Mdx } from '../Mdx';
type PostProps = {
  post: BlogPost;
};

export const Post = ({ post }: PostProps) => {
  const { body, frontmatter, readingTime } = post;
  const { title, description, date, image } = frontmatter;
  const formattedDate = formatDate(date);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-96 w-full sm:h-[30rem]">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="rounded-xl object-cover object-center"
        />
      </div>
      <div className="w-full max-w-5xl">
        <div className="mt-10">
          <p className="mb-2 text-gray-400">
            {formattedDate} - {readingTime} minutos de Leitura
          </p>
          <h1 className="mb-4 text-5xl font-bold sm:text-6xl">{title} </h1>
          <p className="mb-8 text-2xl text-gray-400">{description} </p>
        </div>
      </div>

      <Mdx code={body.code} />
    </div>
  );
};
