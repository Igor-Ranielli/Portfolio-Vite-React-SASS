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
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    level: "Estruturação de páginas web utilizando HTML semântico, com foco em acessibilidade, organização e boas práticas."
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    level: "Criação e customização de layouts responsivos, estilização avançada e adaptação para diferentes dispositivos."
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    level: "Desenvolvimento de funcionalidades interativas e dinâmicas para aplicações web e projetos pessoais."
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    level: "Desenvolvimento de APIs RESTful para gerenciamento de dados, incluindo produtos e livros, com foco em organização e escalabilidade."
  },
  {
    id: "sqlite",
    name: "SQLite",
    icon: <DiSqllite />,
    level: "Utilização como banco de dados em projetos web e aplicações desktop, incluindo sistemas de comparação de preços e soluções corporativas para cadastro e gestão de medições em segurança do trabalho."
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    level: "Desenvolvimento de aplicações front-end modernas e componentizadas, incluindo este portfólio e uma Pokédex interativa utilizando Next.js."
  },
  {
    id: "python",
    name: "Python",
    icon: <DiPython style={{ fill: "url(#python-gradient)" }} />,
    level: "Desenvolvimento de soluções para integração entre hardware e software, incluindo interfaces gráficas, leitura de dados de dispositivos eletrônicos (Serial, HID, Bluetooth e MQTT), processamento de dados e geração de relatórios."
  },
  {
    id: "django",
    name: "Django",
    icon: <DiDjango />,
    level: "Desenvolvimento de aplicações web completas (backend e frontend), incluindo sistema de comparação de preços inspirado no BuscaPé e automação de processos com Selenium."
  },
  {
    id: "git",
    name: "Git",
    icon: <DiGit />,
    level: "Controle de versionamento de código, colaboração em equipe, gerenciamento de branches e boas práticas de versionamento."
  },
  {
    id: "sass",
    name: "Sass",
    icon: <DiSass />,
    level: "Utilização de pré-processador CSS para organização, reutilização de estilos e manutenção eficiente do código visual."
  },
  {
    id: "php",
    name: "PHP",
    icon: <DiPhp />,
    level: "Desenvolvimento de sistema de autenticação com funcionalidades de cadastro, edição e exclusão de usuários."
  }
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