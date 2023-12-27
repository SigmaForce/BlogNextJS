import { AnchorHTMLAttributes } from 'react';
import * as S from './styles';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export const Link = ({ children, href, ...rest }: LinkProps) => {
  return (
    <S.Container href={href} {...rest} className="">
      <S.Content className="">{children} </S.Content>
    </S.Container>
  );
};
