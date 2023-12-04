import tw from 'tailwind-styled-components';
import NextImage from 'next/image';

export const Title = tw.h1`
    my-3
    text-4xl
    font-bold
`;

export const Subtitle = tw.p`
    text-md
`;

export const Image = tw(NextImage)`
    rounded-full
`;
