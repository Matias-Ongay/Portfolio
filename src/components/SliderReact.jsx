import React, { useState } from "react";


const TAGS = {
    REACT: {
        name:'React.js',
        class:'bg-black text-white',
      
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

const Card = ({ title, description, image, tags }) => {
    return (
        <article className="rounded shadow-2xl shadow-white/10">
            <h3 className="text-2xl font-semibold text-blue-200/90 mb-2">{title}</h3>    
            <p className="text-lg mb-4 text-pretty">{description}</p>
            <ul className="flex gap-x-4 flex-row">
                {tags.map(tag => (
                    <span key={tag.name} className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-2 px-2`}>
                        
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

    const handlePrevious = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? PROJECTS.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === PROJECTS.length - 1 ? 0 : prevIndex + 1));

    };

  
    return (
        <div className="carousel">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
            <div className="cards-container">
                <Card
                    title={PROJECTS[index].title}
                    description={PROJECTS[index].description}
                    image={PROJECTS[index].image}
                    tags={PROJECTS[index].tags}
                />
            </div>
        </div>
    );
};

export default Carousel;
