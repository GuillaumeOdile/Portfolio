import React from "react";
import guillaumeOdile from "../images/guillaumeOdile.png";
import Card from "./styles/Card";

const Profile = () => {
  return (
    <Card>
      <div className="inline-flex flex-col text-left p-8">
        <span className="text-gray-200 text-4xl">Guillaume Odile</span>
        <span className="text-gray-300 text-lg">
          Développeur full-stack indépendant
        </span>
      </div>

      <img
        src={guillaumeOdile}
        alt={"Guillaume Odile"}
        className="inline-block items-center justify-center object-cover aspect-square rounded-full w-32 h-32 m-8 border-2 border-emerald-300"
      />
    </Card>
  );
};

export default Profile;
