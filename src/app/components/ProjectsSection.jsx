"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Dashboard Dinamico",
    description: "Dashboard hecho con streamlit alojado con docker",
    image: "/images/projects/1.png",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/acaldo/sales-dashboard-live",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Varios Analisis",
    description: "Varios analisis con diferentes dataset,hecho con python en jupyter notebook ",
    image: "/images/projects/2.png",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/acaldo/data-analysis",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "API REST conectada con WEBSOCKET",
    description: "Api Rest hecha en Go con la posibilidad de utilizar websocket buildeada con Docker",
    image: "/images/projects/3.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/acaldo/rest-websockets",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "GRPC con Go",
    description: "Aplicacion para testear pruebas de usuarios utilizando GRPC y protobuff",
    image: "/images/projects/4.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/acaldo/grpc",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Quiz React & GO",
    description: "Simple Quiz hecho en Go y React para responder preguntas de GO",
    image: "/images/projects/5.png",
    tag: ["All", "Backend"],
    gitUrl: "/",
    previewUrl: "https://quiz-one-woad.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
