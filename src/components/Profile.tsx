import React from "react";
import guillaumeOdile from "../images/guillaumeOdile.png";

const Profile = () => {
  return (
    <div className="absolute mt-16 rounded-3xl bg-slate-900 bg-opacity-50 p-4 z-10">
      <div className="justify-center items-center text-center">
        <div className="inline-flex flex-col text-left m-8">
          <span className=" text-gray-200 text-4xl">Guillaume Odile</span>
          <span className="text-gray-300 text-lg">
            Développeur full-stack indépendant
          </span>
        </div>

        <img
          src={guillaumeOdile}
          alt={"Guillaume Odile"}
          className="inline-block items-center justify-center object-cover aspect-square rounded-full w-32 h-32 m-8"
        />
      </div>
    </div>
  );
};

export default Profile;
