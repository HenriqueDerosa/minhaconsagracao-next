import Link from "next/link";
import { ReactNode } from "react";

export interface ButtonProps {
  type: "button" | "submit" | "anchor" | "link";
  href?: string;
  onClick?: () => void;
  selected?: boolean;
  children: ReactNode;
}

/* This notation helps tailwind-css-intellisense */
const classes =
  "\
  inline-flex \
  bg-transparent \
  hover:bg-yellow-600 \
  p-2 \
  transition-all \
  rounded-xl \
";

const Button = ({
  type,
  href,
  selected = undefined,
  onClick,
  children,
}: ButtonProps) => {
  const buttonClass =
    selected === undefined
      ? classes
      : `${classes} ${selected && "text-yellow-600 hover:bg-transparent"}`;

  if (type === "link") {
    return (
      <Link href={href!}>
        <a className={buttonClass}>{children}</a>
      </Link>
    );
  }

  if (type === "anchor") {
    return (
      <a className={buttonClass} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClass}
      type={type}
      onClick={onClick}
      disabled={selected === false}
    >
      {children}
    </button>
  );
};

export default Button;
