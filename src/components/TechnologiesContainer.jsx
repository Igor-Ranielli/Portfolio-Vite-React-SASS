import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiSqllite,
    DiReact,
    DiPython,
    DiDjango,
    DiGit,
    DiSass
} from 'react-icons/di'

import SvgPainter from './SvgPainter';

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, level: "Consigo codificar uma estrutura básica." },
    { id: "css", name: "CSS3", icon: <DiCss3 />, level: "Já criei e copiei estilos para layout de páginas." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, level: "Implementei funções para meu site de portfolio e criei diversas aplicações simples." },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, level: "Codifiquei API's de produtos e livros." },
    { id: "sqlite", name: "SQLite", icon: <DiSqllite />, level: "Desenvolvi um banco de dados para um clone do Busca Pé." },
    { id: "react", name: "React", icon: <DiReact />, level: "Desenvolvi este portofólio e também criei uma pokedex com o framework do react: Next.js." },
    { id: "python", name: "Python", icon: <DiPython style={{ fill: "url(#python-gradient)" }} />, level: "Criei jogos, calculadoras e diversos apps simples." },
    { id: "django", name: "Django", icon: <DiDjango />, level: "Codifiquei um clone do Busca Pé com Frontend e Backend com ajuda do Selenium." },
    { id: "git", name: "Git", icon: <DiGit />, level: "Consigo criar um controle de versionamento para qualquer tecnologia." },
    { id: "sass", name: "Sass", icon: <DiSass />, level: "Desenvolvi a estilização deste portfólio com esta tecnologia." },
  ];

const TechnologiesContainer = () => {
    return (
    <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    <SvgPainter/>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.level}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
    )
};

export default TechnologiesContainer;