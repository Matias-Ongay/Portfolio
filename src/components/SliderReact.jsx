import React, { useState,useEffect } from "react";
import 'animate.css';

const TAGS = {
    REACT: {
        name:'React.js',
        class:'bg-black text-white',
        icon : './icons/ReactIcon.svg'
    },
};

const PROJECTS = [
    {
        title: 'CryptoTop',
        description: 'Rem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.',
        link: 'https://cryptotop1.netlify.app/',
        github:'https://github.com/Matias-Ongay/CryptoTop',
        image:'./projects/crypto.webp',
        tags:[TAGS.REACT]
    },
    {
        title: 'React Pelis',
        description: 'Pagina realziada en react para consumir una api de peliculas muy chula y divertida.',
        link: 'https://cryptotop2.netlify.app/',
        github:'https://github.com/Matias-Ongay/CryptoTop2',
        image:'./projects/crypto.webp',
        tags:[TAGS.REACT]
    },
];

const Card = ({ title, description, image, tags, animate }) => {
    return (
        <article className={`p-3 rounded shadow-2xl shadow-white/20 background:#050505; ${animate}`}>
            <h3 className="text-2xl font-semibold text-blue-200/90 mb-2">{title}</h3>    
            <p className="text-lg mb-4 text-pretty">{description}</p>
            <ul className="flex gap-x-4 flex-row">
                {tags.map(tag => (
                    <span key={tag.name} className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-2 px-2`}>
                        <img src={tag.icon}></img>
                        {tag.name}
                    </span>
                ))}    
            </ul>
            <img className="" src={image} alt={`Captura de pantalla del proyecto ${title}`}/>
        </article>
    );
};

const Carousel = () => {
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
            <button className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 
tex-xs lg:text-base
bg-white/5 hover:scale-110 hover:bg-white/10 transition
" onClick={handlePrevious}>Previous</button>
            <button className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 
tex-xs lg:text-base
bg-white/5 hover:scale-110 hover:bg-white/10 transition
" onClick={handleNext}>Next</button>
            </div>
            
            <div className="cards-container mt-3">
                <Card
                    title={PROJECTS[index].title}
                    description={PROJECTS[index].description}
                    image={PROJECTS[index].image}
                    tags={PROJECTS[index].tags}
                    animate={animate}
                />
            </div>
            
        </div>
    );
};

export default Carousel;
