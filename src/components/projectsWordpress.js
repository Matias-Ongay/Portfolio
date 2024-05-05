import {ReactNewIcon} from '../icons/ReactNewIcon'
const TAGSWORDPRESS = {
    REACT: {
        name: 'React.js',
        class: 'bg-black text-white',
        icon: ReactNewIcon,
    },
};


const PROJECTSWORDPRESS = [
    {
        title: 'Wordpress',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.',
        link: 'https://cryptotop1.netlify.app/',
        github: 'https://github.com/Matias-Ongay/CryptoTop',
        image: './projects/crypto.webp',
        tags: [TAGSWORDPRESS.REACT]
    },
    {
        title: 'Wordpress 2',
        description: 'Pagina realziada en react para consumir una api de peliculas muy chula y divertida.',
        link: 'https://cryptotop2.netlify.app/',
        github:'https://github.com/Matias-Ongay/CryptoTop2',
        image:'./projects/crypto.webp',
        tags:[TAGSWORDPRESS.REACT]
    },

];

export { TAGSWORDPRESS, PROJECTSWORDPRESS };