import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { StyledLink } from '@/components/StyledLink';

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
  children: React.ReactNode;
};

export const ActiveLink = ({
  className,
  activeClassName,
  children,
  ...props
}: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    const linkPathname = new URL(props.href as string, location.href).pathname;
    const activePathname = new URL(asPath, location.href).pathname;

    const newClassName =
      linkPathname === activePathname
        ? `${className} ${activeClassName}`.trim()
        : className;

    setComputedClassName(newClassName);
  }, [props.href, asPath, activeClassName, className]);

  return (
    <StyledLink className={computedClassName} {...props}>
      {children}
    </StyledLink>
  );
};
