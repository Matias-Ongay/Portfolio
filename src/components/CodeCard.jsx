

 const CodeCard = ({ title, description, image, tags, animate, link, github }) => {
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
            <img className="rounded-lg" src={image} alt={`Captura de pantalla del proyecto ${title}`} />
            <div className="flex items-center space-x-2 mt-3">
                <button className="rounded-lg border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 
            tex-xs lg:text-base
            bg-white/5  hover:bg-white/10 transition
            " ><a href={github} target="_blank" rel="noopener noreferrer">Code</a></button>
                <button className="rounded-lg border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 
            tex-xs lg:text-base
            bg-white/5 hover:bg-white/10 transition
            " ><a href={link} target="_blank" rel="noopener noreferrer">Preview</a></button>
            </div>

        </article>
    );
};

export default CodeCard;