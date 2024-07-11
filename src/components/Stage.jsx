import React from "react";

const Stage = () => {
  return (
    <section
      id="stage"
      className="flex sm:flex-row flex-col w-full h-auto my-10 sm:p-10 p-5"
    >
      {/* left side */}
      <div className="sm:w-1/2">
        <h1 className=" text-xl font-bold mb-3 text-[#FF8A00]">
          Offre de stage
        </h1>
        <h1 className="text-3xl font-bold mb-3 text-[#4A4A4A]">
          Explorez Nos Offres de Stages
        </h1>
        <p className="text-[#868686] text-lg mb-2">
          Découvrez nos domaines de stages et choisissez celui qui vous inspire
          le plus. Chaque domaine est conçu pour vous offrir des compétences
          pratiques, des connaissances approfondies et des opportunités
          d'application réelle. Explorez ci-dessous et préparez-vous à plonger
          dans le monde passionnant de la technologie.
        </p>
        <a href="#" className="text-[#FF8A00]">
          Learn more
        </a>
      </div>
      {/* right side */}
      <div className="sm:w-1/2 bg-[#F8F9F] p-5 shadow-slate-200 shadow-lg rounded-xl  grid gap-5 sm:grid-cols-2 grid-cols-1">
        <div>
          <h1 className="text-[#4A4A4A]">
            <span className="text-[#FF8A00] mr-1">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
            Développement Full Stack
          </h1>
          <p className="text-[#868686]">
            Créez des applications de bout en bout avec des compétences en
            développement polyvalentes.
          </p>
        </div>
        <div>
          <h1 className="text-[#4A4A4A]">
            <span className="text-[#FF8A00] mr-1">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
            Cloud Infra-Architecture
          </h1>
          <p className="text-[#868686]">
            Plongez dans l'architecture cloud et apprenez à concevoir des
            infrastructures évolutives.
          </p>
        </div>
        <div>
          <h1 className="text-[#4A4A4A]">
            <span className="text-[#FF8A00] mr-1">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
            Machine Learning
          </h1>
          <p className="text-[#868686]">
            Découvrez l'apprentissage automatique pour prendre des décisions
            intelligentes.
          </p>
        </div>
        <div>
          <h1 className="text-[#4A4A4A]">
            <span className="text-[#FF8A00] mr-1">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
            Intelligence Artificielle (IA)
          </h1>
          <p className="text-[#868686]">
            Explorez les technologies d'IA et développez des systèmes
            intelligents.
          </p>
        </div>
        <div>
          <h1 className="text-[#4A4A4A]">
            <span className="text-[#FF8A00] mr-1">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
            Data Science
          </h1>
          <p className="text-[#868686]">
            Devenez un expert en analyse de données pour générer des insights.
          </p>
        </div>
        <div>
          <h1 className="text-[#4A4A4A]">
            <span className="text-[#FF8A00] mr-1">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
            Cyber Sécurité
          </h1>
          <p className="text-[#868686]">
            Protégez les systèmes et les données contre les menaces numériques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stage;
