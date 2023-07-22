import '../styles/components/projectscontainer.sass'

import img1 from '../img/Projeto 1.png'
import img2 from '../img/Projeto 2.png'
import img3 from '../img/Projeto 3.png'
import img4 from '../img/Projeto 4.png'
import img5 from '../img/Projeto 5.png'

const projects = [
    {id: "pokenext", name: "Pokedex - Next.JS", image: <img src={img1} alt="Pokedex com next.js"></img>, link: "https://github.com/Igor-Ranielli/pokenext"},
    {id: "buscapreco", name: "Clone do BuscaPé - Django e Selenium", image: <img src={img2} alt="BuscaPreço com Django E Selenium"></img>, link: "https://github.com/Igor-Ranielli/BuscaPrecoFrontEnd"},
    {id: "calculamedia", name: "Calculadora de Média da UNIP - Python", image: <img src={img3} alt="Calculadora de Média UNIP"></img>, link: "https://github.com/Igor-Ranielli/Calcula-Media-Python"},
    {id: "reactmovieslib", name: "Biblioteca de filmes - React", image: <img src={img4} alt="React Movies Lib"></img>, link: "https://github.com/Igor-Ranielli/React-Movies-Lib"},
    {id: "reactquiz", name: "Quiz de perguntas - React", image: <img src={img5} alt="React Quiz"></img>, link: "https://github.com/Igor-Ranielli/React-Quiz"}
]

const ProjectsContainer = () => {
    return <section className="projects-container">
        <h2>Projetos Principais</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <a href={project.link}>
                    <div className="projects-card" id={project.id} key={project.id}>
                        <div className="projects-info">
                            <h3>{project.name}</h3>
                        </div>
                        {project.image}
                    </div>
                    </a>
                ))}
            </div>
            <br/>
            <a href="https://github.com/Igor-Ranielli?tab=repositories" className="btn">
            Outros projetos
            </a>
            
    </section>
};

export default ProjectsContainer;