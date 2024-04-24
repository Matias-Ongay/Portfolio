// OtherProjectCard.js



const WordpressCard = ({ project }) => {
    return (
        <article>
            <h3 className="text-2xl font-semibold text-blue-200/90 mb-2">{project.title}</h3>    
            <p className="text-lg mb-4 text-pretty">{project.description}</p>
            <ul className="flex gap-x-4 flex-row">
                {project.tags.map((tag, index) => (
                    <span key={index} className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-2 px-2`}>
                        <tag.icon className="size-4"/>
                        {tag.name}
                    </span>
                ))}    
            </ul>
            <img className="rounded shadow-2xl shadow-white/10" src={project.image} alt={`Captura de pantalla del proyecto ${project.title}`}/>
        </article>
    );
};

export default WordpressCard;
