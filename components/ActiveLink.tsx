import { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link, { LinkProps } from "next/link";
import React, { Children } from "react";

interface Props extends LinkProps {
  activeClassName: string;
  children: ReactNode;
}

const ActiveLink: React.FC<Props> = ({
  children,
  activeClassName,
  ...props
}) => {
  const { asPath, isReady } = useRouter();

  const child = Children.only(children);
  //@ts-ignore
  const childClassName = child.props?.className || "";
  const [className, setClassName] = useState(childClassName);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      //@ts-ignore
      const linkPathname = new URL(props.as || props.href, location.href)
        .pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      const newClassName =
        linkPathname === activePathname
          ? `${childClassName} ${activeClassName}`.trim()
          : childClassName;

      if (newClassName !== className) {
        setClassName(newClassName);
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    childClassName,
    activeClassName,
    setClassName,
    className,
  ]);

  return (
    <Link {...props}>
      {/*//@ts-ignore*/}
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};

export default ActiveLink;
