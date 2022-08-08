import { useRouter } from "next/router";
import { useMemo } from "react";
import PAGES from "~/pages/pages";
import Button, { ButtonProps } from "../button";

const MENU: Array<ButtonProps> = [
  {
    href: PAGES.STEPS,
    type: "link",
    children: "Etapas",
  },
  {
    href: PAGES.PRAYERS,
    type: "link",
    children: "Orações",
  },
  {
    href: PAGES.GUIDE,
    type: "link",
    children: "Guia",
  },
  {
    href: PAGES.CONFIG,
    type: "link",
    children: "Configurações",
  },
];

const Navbar = () => {
  const { pathname } = useRouter();

  const menu = useMemo(
    () => MENU.map((item) => ({ ...item, selected: pathname === item.href })),
    [pathname]
  );

  return (
    <nav className="w-auto sm:w-96 flex flex-column sm:flex-row justify-between text-xs sm:text-sm">
      {menu.map(({ children, ...menuItem }: ButtonProps) => (
        <Button key={menuItem.href} {...menuItem}>
          {children}
        </Button>
      ))}
    </nav>
  );
};

export default Navbar;
