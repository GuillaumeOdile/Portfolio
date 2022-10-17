import React, { ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode;
}

const SubTitle = (props: SubTitleProps) => {
  return (
    <span className="text-left text-gray-200 sm:text-2xl w-full text-xl">
      {props.children}
    </span>
  );
};

export default SubTitle;
