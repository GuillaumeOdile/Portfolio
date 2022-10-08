import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = (props: TitleProps) => {
  return (
    <span className=" text-gray-200 text-4xl underline decoration-emerald-300">
      {props.children}
    </span>
  );
};

export default Title;
