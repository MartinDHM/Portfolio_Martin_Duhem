import React, { useEffect, useState } from "react";
import "../../main.css";

import projet3 from "../../assets/projet3.webp";
import projet6 from "../../assets/projet6.webp";
import projet7 from "../../assets/projet7.webp";
import projet8 from "../../assets/projet8.webp";
import projet9 from "../../assets/projet9.webp";
import projet10 from "../../assets/projet10.webp";
import projet11 from "../../assets/projet11.webp";
import projet12 from "../../assets/projet12.webp";
import kameha from "../../assets/kameha.webp";
import tmbarbe from "../../assets/tm.webp";

const projectImages = {
  Portfolio: projet12,
  "Print-it": projet6,
  ArchiWebos: projet7,
  "Kasa-App": projet8,
  NinaCarducci: projet9,
  "724events": projet10,
  ArgentBankApp: projet11,
  Ohmyfood: projet3,
  KamehaMaisSpam: kameha,
  TmBarber: tmbarbe,
};

const projectDescriptions = {
  Portfolio: {
    description:
      "Bienvenue sur mon portfolio en ligne ! Vous pouvez explorer mes projets, compétences et expériences professionnelles ici. Aperçu Dans ce portfolio, vous trouverez une variété de projets que j'ai réalisés au fil des années. Ces projets couvrent différents domaines, notamment le développement web, la conception graphique, et bien plus encore",
    technologies: ["#React", "#JavaScript", "#CSS", "#ParticuleJs"],
  },
  "Print-it": {
    description:
      "Ce projet a été créé pour m'immerger dans le monde du langage JavaScript, une technologie appréciée par la communauté des développeurs web. Il a été élaboré de manière éducative, m'aidant à maîtriser les fondements de ce langage dynamique.",
    technologies: ["#HTML", "#CSS", "#JavaScript"],
  },
  ArchiWebos: {
    description:
      "Après avoir récemment terminé mon dernier projet et disposant de temps libre, j'ai eu l'opportunité passionnante d'être détaché en renfort auprès d'une équipe dédiée à la création du site portfolio d'une architecte d'intérieur de grand talent, Sophie Bluel. 🏠✨",
    technologies: ["#HTML", "#CSS", "#JavaScript"],
  },
  "Kasa-App": {
    description:
      "Kasa ma recruté en tant que développeur front-end en freelance pour développer sa toute nouvelle plateforme web. Kasa est un acteur majeur de la location d'appartements entre particuliers en France depuis près de 10 ans, avec plus de 500 annonces postées chaque jour. Cette opportunité représente un ajout précieux à mon portfolio de freelance !",
    technologies: ["#React", "#Animation CSS", "#Sass", "#Javascript"],
  },
  NinaCarducci: {
    description:
      "En tant que développeur freelance, je me lance dans l'offre de services d'optimisation SEO à de nouveaux clients. J'ai analysé plusieurs sites web, contacté les administrateurs des sites ayant un potentiel d'optimisation pour leur proposer mes services. Parmi mes prospects se trouve le site de Nina Carducci, une photographe recommandée par un ami.",
    technologies: ["#HTML", "#CSS", "#SEO"],
  },
  "724events": {
    description:
      "724events a sollicité mon expertise pour compléter une mission passionnante. Ils ont l'intention de lancer la nouvelle version de leur site vitrine, une page unique au design validé. Bien que le site soit fonctionnel, quelques bugs subsistent, affectant l'expérience des visiteurs. Mon rôle est d'intervenir et de résoudre ces problèmes pour assurer le succès du projet.",
    technologies: ["#HTML", "#JavaScript", "#Api"],
  },
  ArgentBankApp: {
    description:
      "Rejoins Argent Bank en tant que développeur front-end. Nouvelle banque en ligne qui vise à se démarquer dans le secteur bancaire. En collaboration avec Mila, la cheffe de projet, je travaille sur la création du tableau de bord des utilisateurs. Nous recevons deux courriers électroniques du CTO, Avery Moreau.",
    technologies: ["#React", "#REDUX", "#HTML", "#CSS", "#Api"],
  },
  Ohmyfood: {
    description:
      'Projet "OhMyFood", vise à regrouper les menus de restaurants gastronomiques et à proposer bien plus que une simple réservation. Les clients auront la liberté de personnaliser leur menu, et leurs plats seront prêts dès leur arrivée, éliminant ainsi les interminables attentes au restaurant.',
    technologies: ["#HTML", "#Sass", "#Animation CSS"],
  },
  KamehaMaisSpam: {
    description:
      "Plongez dans un univers collaboratif passionnant où les mondes des jeux vidéo et des animés se rencontrent ! Notre projet, imprégné de notre passion commune pour ces domaines captivants.",
    technologies: ["#HTML", "#CSS", "#Unity"],
  },
  TmBarber: {
    description:
      "Ici un des projet sur lequel je suis le plus fier, ce projet à été réalisé pour un barber , j'y ai appris beaucoup de chose notamment approndir mon experience dans la conception de base de données et la creation d'API. ",
    technologies: ["#HTML", "#CSS", "#ReactJS", "#ExpressJS", "#MySQL"],
  },
};

const projectLinks = {
  Portfolio: {
    github: "https://github.com/MartinDHM/Portfolio",
  },
  Ohmyfood: {
    github: "https://github.com/MartinDHM/Ohmyfood",
    githubPages: "https://martindhm.github.io/Ohmyfood/",
  },
  "Print-it": {
    github: "https://github.com/MartinDHM/Print-it",
    githubPages: "https://martindhm.github.io/Print-it/",
  },
  ArchiWebos: {
    github: "https://github.com/MartinDHM/ArchiWebos",
  },
  "Kasa-App": {
    github: "https://github.com/MartinDHM/Kasa-App",
  },
  NinaCarducci: {
    github: "https://github.com/MartinDHM/NinaCarducci",
    githubPages: "https://martindhm.github.io/NinaCarducci/",
  },
  "724events": {
    github: "https://github.com/MartinDHM/724events",
  },
  ArgentBankApp: {
    github: "https://github.com/MartinDHM/ArgentBankApp",
  },
  KamehaMaisSpam: {
    github: "https://github.com/MartinDHM/KamehaMaisSpam",
    githubPages: "https://martindhm.github.io/KamehaMaisSpam/",
  },
  TmBarber: {
    githubPages: "https://www.tm-barber.com",
  },
};

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/MartinDHM/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  const projectsGroups = [];
  for (let i = 0; i < projects.length; i += 3) {
    projectsGroups.push(projects.slice(i, i + 3));
  }

  const handleNextPage = () => {
    if (currentPage < projectsGroups.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(projectsGroups.length - 1);
    }
  };

  return (
    <section>
      <h2 className="projets-title">Mes Projets :</h2>
      <div>
        {projectsGroups.length > 0 && (
          <div className="Slider-content">
            <div className="slider-group">
              {projectsGroups[currentPage].map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-content">
                    <img
                      className="project-img"
                      src={projectImages[project.name]}
                      alt={project.name}
                    />
                    <h3 className="projet-title">{project.name}</h3>
                    <div>
                      <p className="description">
                        {projectDescriptions[project.name].description}
                      </p>
                      <p className="technologies">
                        {projectDescriptions[project.name].technologies.map(
                          (tech, index) => (
                            <div key={index} className="technology">
                              {tech}
                              {index <
                                projectDescriptions[project.name].technologies
                                  .length -
                                  1 && <div className="separator"> </div>}
                            </div>
                          )
                        )}
                      </p>
                      {projectLinks[project.name] && (
                        <div className="github-position">
                          {projectLinks[project.name].githubPages && (
                            <a
                              href={projectLinks[project.name].githubPages}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="github-button btn-3"
                            >
                              <span>Voir le site</span>
                            </a>
                          )}
                          <a
                            href={projectLinks[project.name].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button btn-3"
                          >
                            <span> Voir sur GitHub</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-navigation">
              <button
                onClick={handlePrevPage}
                className="slider-button slider-button-prev"
              >
                Précédent
              </button>
              <button
                onClick={handleNextPage}
                className="slider-button slider-button-next"
              >
                Suivant
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubProjects;
