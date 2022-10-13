import React from "react";
import Card from "./styles/Card";
import Title from "./styles/Title";
import linkedinLogo from "../images/linkedinLogo.png";
import githubLogo from "../images/githubLogo.png";
import gmailLogo from "../images/gmailLogo.png";

const Contact = () => {
  return (
    <Card className="flex flex-col space-y-8 p-8">
      <Title>Contact</Title>
      <div className="flex flex-row items-center justify-center space-x-8">
        <a href="https://www.linkedin.com/in/guillaume-odile-23681b148/">
          <img
            src={linkedinLogo}
            alt={"Linkedin"}
            className="object-cover aspect-square rounded-full w-32 border-2 border-orange-300"
          />
        </a>
        <a href="https://github.com/GuillaumeOdile/portfolio">
          <img
            src={githubLogo}
            alt={"GitHub"}
            className="object-cover aspect-square rounded-full w-32 border-2 border-orange-300"
          />
        </a>
        <a href="mailto:guillaume.odile12@gmail.com">
          <img
            src={gmailLogo}
            alt={"guillaume.odile12@gmail.com"}
            className="object-cover aspect-square rounded-full w-32 border-2 border-orange-300 bg-gray-200"
          />
        </a>
      </div>
    </Card>
  );
};

export default Contact;
