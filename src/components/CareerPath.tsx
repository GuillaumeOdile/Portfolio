import React from "react";
import diplome from "../images/diplome.png";
import Card from "./Card";

const CareerPath = () => {
  return (
    <Card className="flex flex-col p-8 space-y-8">
      <span className=" text-gray-200 text-4xl underline decoration-emerald-300">
        Mon parcours
      </span>

      <div className="flex flex-row">
        <span className="text-gray-200 text-3xl pr-4">2013</span>
        <p className="text-gray-300 text-lg text-left">
          J'ai découvert ma passion pour le développement logiciel à mes 16 ans.
          Petits projets personnels pour commencer, je comprends rapidement que
          ce nouveau monde est immense 🤯. Et cela forge ma curiosité et
          renforce mon appétence pour le métier.
        </p>
      </div>

      <div className="flex flex-row">
        <span className="text-gray-200 text-3xl pr-4">2015</span>
        <p className="text-gray-300 text-lg text-left">
          J'intègre l'
          <a href="https://www.epita.fr/" className="text-orange-500">
            EPITA
          </a>
          , une école d'ingénieur en informatique. Je me spécialise dans les
          systèmes embarqués, et intègre l'incubateur de startup de mon école.
          Je créé AquaSmart 🐟 en 2018, qui propose une solution d'aquarium
          connecté pour les aquariophiles. Ce projet complet m'a permis de
          toucher à toutes les couches, de l'embarqué au site web en passant par
          l'application mobile. 🚀
        </p>
      </div>

      <div className="flex flex-row">
        <span className="text-gray-200 text-3xl pr-4">2020</span>
        <p className="text-gray-300 text-lg text-left">
          Je termine mes études par un stage chez{" "}
          <a href="https://www.netatmo.com" className="text-orange-500">
            Netatmo
          </a>
          , une entreprise de Legrand dans la domotique. Après quoi je suis
          diplômé 🥳. Dans le même temps, j'intègre{" "}
          <a href="https://www.kickmaker.fr/" className="text-orange-500">
            Kickmaker
          </a>
          , une SSII qui me donne l'opportunité de travailler avec{" "}
          <a href="https://navya.tech/fr/" className="text-orange-500">
            Navya
          </a>{" "}
          pour créer un site web dédié à l'équipe test.
        </p>
      </div>
      <img
        src={diplome}
        alt={"Guillaume Odile"}
        className="items-center justify-center object-cover aspect-square rounded-full w-32 h-44 mt-8 border-2 border-emerald-300"
      />

      <div className="flex flex-row">
        <span className="text-gray-200 text-3xl pr-4">2021</span>
        <p className="text-gray-300 text-lg text-left">
          Je déménage sur Cassis, et suis recruté chez{" "}
          <a href="https://gojob.com/" className="text-orange-500">
            Gojob
          </a>
          , une startup dans laquelle j'apprends énormément sur le développement
          web grâce à des pairs de grande qualité ainsi qu'une culture
          d'entreprise priorisant l'apprentissage. Ils m'ont fait confiance pour
          développer le{" "}
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:6893124280524046336/"
            className="text-orange-500"
          >
            Gojob Locker
          </a>
          , un casier connecté avec une application ReactNative, qui est
          maintenant disponible à travers le globe 🌎.
        </p>
      </div>

      <div className="flex flex-row">
        <span className="text-gray-200 text-3xl pr-4 text-center underline decoration-emerald-300">
          Aujourd’hui, je me lance à mon compte !
        </span>
      </div>
    </Card>
  );
};

export default CareerPath;
