import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import '@/styles/mdx.css';

import React from 'react';
import { Grid } from '../Grid';
import { Pre } from '@/components/Mdx/components';

const components: MDXComponents = {
  h1: ({ className = '', children, ...props }) => (
    <h1 className={`text-4xl font-bold ${className}`} {...props}>
      {children}
    </h1>
  ),
  h2: ({ className = '', children, ...props }) => (
    <h2 className={`text-3xl font-bold ${className}`} {...props}>
      {children}
    </h2>
  ),
  h3: ({ className = '', children, ...props }) => (
    <h3 className={`text-2xl font-bold ${className}`} {...props}>
      {children}
    </h3>
  ),
  h4: ({ className = '', children, ...props }) => (
    <h4 className={`text-xl font-bold ${className}`} {...props}>
      {children}
    </h4>
  ),
  h5: ({ className = '', children, ...props }) => (
    <h5 className={`text-lg font-bold ${className}`} {...props}>
      {children}
    </h5>
  ),
  h6: ({ className = '', children, ...props }) => (
    <h6 className={`text-base font-bold ${className}`} {...props}>
      {children}
    </h6>
  ),
  a: ({ className = '', children, ...props }) => (
    <a
      className={`font-medium text-link underline-offset-4 ${className}`}
      {...props}
    >
      {children}
    </a>
  ),

  p: ({ className = '', children, ...props }) => (
    <p
      className={`mb-4 text-xl leading-7 text-slate-300 ${className}`}
      {...props}
    >
      {children}
    </p>
  ),

  blockquote: ({ className = '', children, ...props }) => (
    <blockquote
      className={`mb-4 mt-6 border-l-2 border-slate-50 pl-6 font-normal italic text-gray-200 ${className}`}
      {...props}
    >
      {children}
    </blockquote>
  ),

  pre: ({ className = '', children, ...props }) => (
    <Pre {...props} className={className}>
      {children}
    </Pre>
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
