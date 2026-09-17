// components/ActiveLink.tsx

import { useState, useEffect, ReactNode, Children } from "react";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import React from "react";

interface Props extends LinkProps {
  activeClassName: string;
  children: ReactNode;
  className?: string;
}

const ActiveLink: React.FC<Props> = ({
  children,
  activeClassName,
  className,
  ...props
}) => {
  const { asPath, isReady } = useRouter();

  // The child can now be any single React node, not just an element
  // We'll get the class names from props instead of child.props
  const [activeClassNameState, setActiveClassNameState] =
    useState(className);

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname;
      const activePathname = new URL(asPath, location.href).pathname;

      const newClassName =
        linkPathname === activePathname
          ? `${className || ""} ${activeClassName}`.trim()
          : className;

      if (newClassName !== activeClassNameState) {
        setActiveClassNameState(newClassName);
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    className,
    activeClassName,
    activeClassNameState,
  ]);

  return (
    <Link {...props} className={activeClassNameState}>
      {children}
    </Link>
  );
};

export default ActiveLink;