import React from "react";
import Card from "./styles/Card";
import Title from "./styles/Title";
import SubTitle from "./styles/SubTitle";

import typescriptLogo from "../images/typescriptLogo.png";
import reactLogo from "../images/reactLogo.png";
import tailwindLogo from "../images/tailwindLogo.png";
import nestLogo from "../images/nestLogo.png";
import nodeLogo from "../images/nodeLogo.png";
import graphqlLogo from "../images/graphqlLogo.png";
import tddLogo from "../images/tddLogo.png";
import cleanArchiLogo from "../images/cleanArchiLogo.png";
import cleanCodeLogo from "../images/cleanCodeLogo.png";
import gitSimplifiedLogo from "../images/gitSimplifiedLogo.png";
import terminalLogo from "../images/terminalLogo.png";
import linuxLogo from "../images/linuxLogo.png";

const FavoriteStack = () => {
  return (
    <Card className="flex flex-col space-y-8 p-8">
      <Title>Environnement technique</Title>
      <SubTitle>Stack de prédilection :</SubTitle>
      <div className="flex flex-row items-center justify-center sm:space-x-8 space-x-4">
        <a href="https://www.typescriptlang.org/">
          <img
            src={typescriptLogo}
            alt={"Typescript"}
            className="object-cover aspect-square rounded-3xl w-32 border-2 border-orange-300"
            title="Typescript"
          />
        </a>
        <a href="https://fr.reactjs.org/">
          <img
            src={reactLogo}
            alt={"React"}
            className="object-cover aspect-square rounded-3xl w-32 border-2 border-orange-300 "
            title="ReactJS"
          />
        </a>
        <a href="https://tailwindcss.com/">
          <img
            src={tailwindLogo}
            alt={"TailwindCss"}
            className="object-cover aspect-square rounded-3xl w-32 border-2 border-orange-300"
            title="TailwindCSS"
          />
        </a>
      </div>
      <div className="flex flex-row items-center justify-center sm:space-x-8 space-x-4">
        <a href="https://nestjs.com/">
          <img
            src={nestLogo}
            alt={"NestJs"}
            className="object-cover aspect-square rounded-3xl w-32 border-2 border-orange-300"
            title="NextJS"
          />
        </a>
        <a href="https://nodejs.org/en/">
          <img
            src={nodeLogo}
            alt={"NodeJs"}
            className="object-cover aspect-square rounded-3xl w-32 border-2 border-orange-300 "
            title="NodeJS"
          />
        </a>
        <a href="https://graphql.org/">
          <img
            src={graphqlLogo}
            alt={"GraphQL"}
            className="object-cover aspect-square rounded-3xl w-32 border-2 border-orange-300"
            title="GraphQL"
          />
        </a>
      </div>

      <SubTitle>Méthodologies :</SubTitle>
      <div className="flex flex-row items-center justify-center sm:space-x-8 space-x-4">
        <a href="https://wealcomecompany.com/blog/tdd-video-demonstration-conway-michael-azerhad-wealcome">
          <img
            src={tddLogo}
            alt={"TDD"}
            className="object-cover aspect-square rounded-3xl w-32 border-2 border-orange-300"
            title="TDD"
          />
        </a>
        <a href="https://tech.gojob.com/clean-archi-uncle-bob/">
          <img
            src={cleanArchiLogo}
            alt={"Clean Architecture"}
            className="object-cover aspect-square rounded-3xl w-32 border-2 border-orange-300 "
            title="Clean architecture"
          />
        </a>
        <a href="https://garywoodfine.com/what-is-clean-code/">
          <img
            src={cleanCodeLogo}
            alt={"Clean code"}
            className="object-cover aspect-square rounded-3xl w-32 border-2 border-orange-300 bg-gray-100"
            title="Clean code"
          />
        </a>
      </div>

      <SubTitle>Autres :</SubTitle>
      <div className="flex flex-row items-center justify-center sm:space-x-8 space-x-4">
        <a href="https://git-scm.com/">
          <img
            src={gitSimplifiedLogo}
            alt={"Git"}
            className="object-cover aspect-square rounded-3xl w-32 border-2 border-orange-300"
            title="Git"
          />
        </a>
        <a href="https://linuxfr.org/">
          <img
            src={linuxLogo}
            alt={"Linux"}
            className="object-cover aspect-square rounded-3xl w-32 border-2 border-orange-300"
            title="Linux"
          />
        </a>
        <a href="https://doc.ubuntu-fr.org/tutoriel/script_shell">
          <img
            src={terminalLogo}
            alt={"Shell"}
            className="object-cover aspect-square rounded-3xl w-32 border-2 border-orange-300"
            title="Script Shell"
          />
        </a>
      </div>
    </Card>
  );
};

export default FavoriteStack;
