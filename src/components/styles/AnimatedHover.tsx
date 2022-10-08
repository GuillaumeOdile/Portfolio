import React, { ReactNode } from "react";

interface AnimatedHoverProps {
  children: ReactNode;
}

const AnimatedHover = (props: AnimatedHoverProps) => {
  return (
    <>
      <div className="relative group w-full">
        <div className="absolute rounded-3xl -inset-1 blur bg-gradient-to-r from-orange-500 to-yellow-600 opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
        {props.children}
      </div>
    </>
  );
};

export default AnimatedHover;
