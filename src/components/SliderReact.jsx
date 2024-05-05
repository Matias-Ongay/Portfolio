import React, { useState,useEffect } from "react";
import 'animate.css';
import {ReactNewIcon} from '../icons/ReactNewIcon'
import { PROJECTS,TAGS } from "./projects";
import { TAGSWORDPRESS, PROJECTSWORDPRESS } from "./projectsWordpress";

const Card = ({ title, description, image, tags, animate,link,github }) => {
    return (
        <article className={`p-3 rounded shadow-2xl shadow-white/20 background:#050505; ${animate}`}>
            <h3 className="text-2xl font-semibold text-blue-200/90 mb-2">{title}</h3>    
            <p className="text-lg mb-4 text-pretty">{description}</p>
            <ul className="flex gap-x-4 flex-row">
                {tags.map(tag => (
                        <span key={tag.name} className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-2 px-2 align-middle mb-3`}>
                            <tag.icon className="size-4" /> {/* Renderiza el icono aquí */}
                            {tag.name}
                        </span>
                    ))} 
            </ul>
            <img className="rounded-lg" src={image} alt={`Captura de pantalla del proyecto ${title}`}/>
            <div className="flex items-center space-x-2 mt-3">
            <button className="rounded-lg border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 
            tex-xs lg:text-base
            bg-white/5  hover:bg-white/10 transition
            " ><a href={github}>Code</a></button>
            <button className="rounded-lg border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 
            tex-xs lg:text-base
            bg-white/5 hover:bg-white/10 transition
            " ><a href={link}>Preview</a></button>
            </div>
            
        </article>
    );
};

const Carousel = ({projectType}) => {
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState("");

    useEffect(() => {
        setAnimate("animate__animated animate__fadeIn ");
        const timer = setTimeout(() => {
            setAnimate("");
        }, 1000); // Duración de la animación en milisegundos
        return () => clearTimeout(timer);
    }, [index]);

    const handlePrevious = () => {
        setIndex(prevIndex => (prevIndex === 0 ? PROJECTS.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
        setIndex(prevIndex => (prevIndex === PROJECTS.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <div className="flex items-center space-x-2 ">
            <button className="rounded-lg border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 
            tex-xs lg:text-base
            bg-white/5 hover:scale-110 hover:bg-white/10 transition
            " onClick={handlePrevious}>Previous</button>
                        <button className="rounded-lg border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 
            tex-xs lg:text-base
            bg-white/5 hover:scale-110 hover:bg-white/10 transition
            " onClick={handleNext}>Next</button>
            </div>
            {projectType === 'Wordpress' ? (
            // Aquí puedes colocar el código para WordPress si es necesario
            <div>
               <Card
                    title={PROJECTSWORDPRESS[index].title}
                    description={PROJECTSWORDPRESS[index].description}
                    image={PROJECTSWORDPRESS[index].image}
                    tags={PROJECTSWORDPRESS[index].tags}
                    github={PROJECTSWORDPRESS[index].github}
                    link={PROJECTSWORDPRESS[index].link}
                    animate={animate}
                />
            </div>
        ) : (
            <div className="cards-container mt-3">
                <Card
                    title={PROJECTS[index].title}
                    description={PROJECTS[index].description}
                    image={PROJECTS[index].image}
                    tags={PROJECTS[index].tags}
                    github={PROJECTS[index].github}
                    link={PROJECTS[index].link}
                    animate={animate}
                />
            </div>
        )}
    </div>
    );
};

export default Carousel;
