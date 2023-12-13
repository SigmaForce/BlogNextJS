import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import '@/styles/mdx.css';

import React from 'react';
import { Grid } from '../Grid';

const components: MDXComponents = {
  h1: ({ className = '', children, ...props }) => (
    <h1 className={`text-4xl font-bold ${className}`} {...props}>
      {children}
    </h1>
  ),
  pre: ({ className = '', children, ...props }) => (
    <pre
      className={`text-md mb-4 mt-6 overflow-x-auto rounded-lg py-4  ${className}`}
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ className = '', children, ...props }) => (
    <code
      className={`text-md relative rounded bg-gray-700 px-[0.4rem] py-[0.1rem] font-mono leading-tight text-gray-50  ${className}`}
      {...props}
    >
      {children}
    </code>
  )
};

type MdxProps = {
  code: string;
};

export const Mdx = ({ code = '' }: MdxProps) => {
  const Component = useMDXComponent(code);
  return (
    <Grid sm={1} md={1} lg={1} gap={10}>
      <Component components={components} />
    </Grid>
  );
};
