import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block text-customGray hover:text-hoverGray px-3 py-4"
    >
      {title}
    </Link>
  );
};

export default NavLink;
