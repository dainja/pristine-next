import { SVGProps } from "react";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <img
      src="/images/logo-full.png"
      alt="Logo"
      width={1000 / 3}
      height={685 / 3}
    />
  );
};

export const TextLogo = ({ className = "" }: { className?: string }) => {
  return (
    <img
      src="/images/logo-text.png"
      alt="Logo"
      width={983 / 10}
      height={361 / 10}
      className={className}
    />
  );
};
