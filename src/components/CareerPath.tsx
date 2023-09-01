import React from "react";
import diplome from "../images/diplome.png";
import BasicLink from "./styles/BasicLink";
import Card from "./styles/Card";
import LeftCenteredParagraph from "./styles/LeftCenteredParagraph";
import Title from "./styles/Title";

const CareerPath = () => {
  return (
    <Card className="flex flex-col p-8 space-y-8">
      <Title>Mon parcours</Title>

      <div className="flex flex-row">
        <span className="text-gray-200 text-3xl pr-4">2013</span>
        <LeftCenteredParagraph>
          J'ai découvert ma passion pour le développement logiciel à mes 16 ans.
          Petits projets personnels pour commencer, je comprends rapidement que
          ce nouveau monde est immense 🤯. Et cela forge ma curiosité et
          renforce mon appétence pour le métier.
        </LeftCenteredParagraph>
      </div>

      <div className="flex flex-row">
        <span className="text-gray-200 text-3xl pr-4">2015</span>
        <LeftCenteredParagraph>
          J'intègre l'
          <BasicLink href="https://www.epita.fr/">EPITA</BasicLink>, une école
          d'ingénieur en informatique. Je me spécialise dans les systèmes
          embarqués, et intègre l'incubateur de startup de mon école. Je crée
          AquaSmart 🐟 en 2018, qui propose une solution d'aquarium connecté
          pour les aquariophiles. Ce projet complet m'a permis de toucher à
          toutes les couches, de l'embarqué au site web en passant par
          l'application mobile. 🚀
        </LeftCenteredParagraph>
      </div>

      <div className="flex flex-row">
        <span className="text-gray-200 text-3xl pr-4">2020</span>
        <LeftCenteredParagraph>
          Je termine mes études par un stage chez{" "}
          <BasicLink href="https://www.netatmo.com">Netatmo</BasicLink>, une
          entreprise de Legrand dans la domotique. Après quoi je suis diplômé
          🥳. Dans le même temps, j'intègre{" "}
          <BasicLink href="https://www.kickmaker.fr/">Kickmaker</BasicLink>, une
          SSII qui me donne l'opportunité de travailler avec{" "}
          <BasicLink href="https://navya.tech/fr/">Navya</BasicLink> pour créer
          un site web dédié à l'équipe test.
        </LeftCenteredParagraph>
      </div>
      <img
        src={diplome}
        alt={"Guillaume Odile"}
        className="items-center justify-center object-cover aspect-square rounded-full w-32 h-44 mt-8 border-2 border-emerald-300"
      />

      <div className="flex flex-row">
        <span className="text-gray-200 text-3xl pr-4">2021</span>
        <LeftCenteredParagraph>
          Je déménage à Cassis, et suis recruté chez{" "}
          <BasicLink href="https://gojob.com/">Gojob</BasicLink>, une startup
          dans laquelle j'apprends énormément sur le développement web grâce à
          des pairs de grande qualité ainsi qu'une culture d'entreprise
          priorisant l'apprentissage. Ils m'ont fait confiance pour développer
          le{" "}
          <BasicLink href="https://www.linkedin.com/feed/update/urn:li:activity:6893124280524046336/">
            Gojob Locker
          </BasicLink>
          , un casier connecté avec une application ReactNative, qui est
          maintenant disponible à travers le globe 🌎.
        </LeftCenteredParagraph>
      </div>

      <div className="flex flex-row">
        <span className="text-gray-200 text-3xl pr-4">2022</span>
        <LeftCenteredParagraph>
          Je me lance à mon compte en 2022, et je trouve rapidement mon premier
          client{" "}
          <BasicLink href="https://www.wizebulk.com/">Wizebulk</BasicLink>, une
          startup dans laquelle je vais pouvoir mettre en pratique mes
          compétences en tant que lead front et développeur fullstack. J'ai
          l'opportunité de coacher une petite équipe Vietnamienne, et de
          travailler sur un projet ambitieux 🚢.
        </LeftCenteredParagraph>
      </div>

      <div className="flex flex-row">
        <span className="text-gray-200 text-3xl pr-4">2023</span>
        <LeftCenteredParagraph>
          Après une superbe mission de 5 mois, je trouve mon second client{" "}
          <BasicLink href="https://www.joynit.fr/">Joyn'it</BasicLink>, une
          startup qui propose une solution de gestion d'évènements sous le
          format d'un réseau social 📅. Je suis alors en charge de la refonte de
          l'application en React (from scratch), et du passage de connaissance à
          l'équipe en place.
        </LeftCenteredParagraph>
      </div>
    </Card>
  );
};

export default CareerPath;
