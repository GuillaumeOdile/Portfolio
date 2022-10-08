import React, { ReactNode } from "react";

interface LeftCenteredParagraphProps {
  children: ReactNode;
}

const LeftCenteredParagraph = (props: LeftCenteredParagraphProps) => {
  return <p className="text-gray-300 text-lg text-left">{props.children}</p>;
};

export default LeftCenteredParagraph;
