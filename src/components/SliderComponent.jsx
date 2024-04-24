import {useState,useEffect} from 'react';


const SliderComponent = ({CardComponent, projects}) => {
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
        console.log('amda')
        setIndex(prevIndex => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
        setIndex(prevIndex => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <div className="flex items-center space-x-2 ">
                <button 
                    className="rounded-lg border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 tex-xs lg:text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition"
                    onClick={handlePrevious}
                >
                    Previous
                </button>
                <button 
                    className="rounded-lg border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 tex-xs lg:text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
            
            <div className="cards-container mt-3">
                <CardComponent
                    title={projects[index].title}
                    description={projects[index].description}
                    image={projects[index].image}
                    tags={projects[index].tags}
                    github={projects[index].github}
                    link={projects[index].link}
                    animate={animate}
                />
            </div>
        </div>
    );
};

export default SliderComponent;
