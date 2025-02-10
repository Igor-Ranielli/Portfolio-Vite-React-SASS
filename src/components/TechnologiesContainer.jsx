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
    DiSass,
    DiPhp
} from 'react-icons/di'

import SvgPainter from './SvgPainter';

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, level: "Capaz de estruturar páginas web semanticamente bem organizadas." },
    { id: "css", name: "CSS3", icon: <DiCss3 />, level: "Experiência na criação e personalização de layouts responsivos e estilização avançada." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, level: "Desenvolvi funcionalidades interativas para meu portfólio e diversas aplicações web." },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, level: "Criação de APIs RESTful para gerenciamento de produtos e livros." },
    { id: "sqlite", name: "SQLite", icon: <DiSqllite />, level: "Utilizado como banco de dados para um projeto de comparação de preços semelhante ao BuscaPé. Também uso no meu emprego atual para criação, edição e exclusão de cadastros para medições em segurança do trabalho." },
    { id: "react", name: "React", icon: <DiReact />, level: "Desenvolvi este portfólio e uma Pokédex interativa utilizando Next.js." },
    { id: "python", name: "Python", icon: <DiPython style={{ fill: "url(#python-gradient)" }} />, level: "Desenvolvimento de interfaces para comunicação com dispositivos eletrônicos, como dosímetros acústicos e termômetros de globo, incluindo leitura de dados via serial, HID, wifi e processamento de informações."  },
    { id: "django", name: "Django", icon: <DiDjango />, level: "Desenvolvi um sistema completo inspirado no BuscaPé, integrando frontend e backend, com automação via Selenium." },
    { id: "git", name: "Git", icon: <DiGit />, level: "Hábil no controle de versionamento, colaboração em equipe e gerenciamento de branches." },
    { id: "sass", name: "Sass", icon: <DiSass />, level: "Utilizado para estilizar este portfólio, otimizando a organização e reutilização de estilos." },
    { id: "php", name: "Php", icon: <DiPhp />, level: "Desenvolvi um sistema de autenticação com cadastro, edição e exclusão de usuários." }
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