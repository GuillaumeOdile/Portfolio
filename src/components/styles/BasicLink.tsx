import React, { ReactNode } from "react";

interface BasicLinkProps {
  children: ReactNode;
  href: string;
}

const BasicLink = (props: BasicLinkProps) => {
  return (
    <a href={props.href} className="text-orange-500">
      {props.children}
    </a>
  );
};

export default BasicLink;
