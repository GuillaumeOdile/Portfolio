import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = (props: CardProps) => {
  const style =
    "rounded-3xl w-full bg-slate-900 bg-opacity-70 justify-center items-center text-center " +
    props.className;
  return <div className={style}>{props.children}</div>;
};

export default Card;
