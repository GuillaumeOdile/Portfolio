import React from "react";
import reduxThunk from "../images/reduxThunk.png";
import clean from "../images/clean.png";
import gitLogo from "../images/gitLogo.png";
import AnimatedHover from "./styles/AnimatedHover";
import Card from "./styles/Card";
import Title from "./styles/Title";
import LeftCenteredParagraph from "./styles/LeftCenteredParagraph";

const MyArticles = () => {
  return (
    <Card className="flex flex-col space-y-8 p-8">
      <Title>Articles tech</Title>

      <LeftCenteredParagraph>
        Le blog ici est en cours de construction 🚧 mais vous pouvez déjà
        accéder à 3 articles que j'ai écris précédemment :
      </LeftCenteredParagraph>

      <div className="flex flex-col justify-center space-y-14">
        <a
          href="https://tech.gojob.com/git-tricks/"
          className="flex flex-col items-center space-y-4 sm:text-2xl text-xl font text-gray-300 text-center"
        >
          <AnimatedHover>
            <img
              src={gitLogo}
              className="relative rounded-3xl object-cover aspect-auto max-w-sm w-full h-48 transition duration-1000 group-hover:duration-200"
              alt="git tricks"
            />
          </AnimatedHover>

          <span>Comment gagner du temps avec git</span>
        </a>

        <a
          href="https://tech.gojob.com/clean-archi-uncle-bob/"
          className="flex flex-col items-center space-y-4 sm:text-2xl text-xl font text-gray-300 text-center"
        >
          <AnimatedHover>
            <img
              src={clean}
              className="relative rounded-3xl object-cover aspect-auto max-w-sm w-full h-48 transition duration-1000 group-hover:duration-200"
              alt="clean architecture"
            />
          </AnimatedHover>

          <span>Les bases de la clean architecture</span>
        </a>
        <a
          href="https://tech.gojob.com/redux-thunk-typescript/"
          className="flex flex-col items-center space-y-4 sm:text-2xl text-xl font text-gray-300 text-center"
        >
          <AnimatedHover>
            <img
              src={reduxThunk}
              className="relative rounded-3xl object-cover aspect-auto max-w-sm w-full h-48 transition duration-1000 group-hover:duration-200"
              alt="redux thunk"
            />
          </AnimatedHover>
          <span>Redux-thunk</span>
        </a>
      </div>
    </Card>
  );
};

export default MyArticles;
