import arrowImage from "../assets/chevrons-down-solid-72.png";
import imageSobre from "../assets/image.jpg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import git from "../assets/git.svg";
import node from "../assets/node.svg";
import java from "../assets/java.svg";
import python from "../assets/python.svg";
import ps from "../assets/photoshop.png";
import figma from "../assets/figma.png";
import illustrator from "../assets/illustrator.png";
import after from "../assets/after-effects.png";
import Contato from '../components/Contato'
import './../App.css'
import './Home.css'

function Home() {
  return (
    <div className="main-container">
      <div className="info">
        <h1><span>Frontend</span></h1>
        <h1 className="side">Developer</h1>
      </div>
      <div className="descricao">
        <p><span>&lt;</span> Desenvolvedor web focado em criar sites responsivos e modernos <span>&gt;</span></p>
      </div>
      <img src={arrowImage} alt="arrow" className="arrow" />

      <div className="sobre" id="sobre">
        <div className="info-sobre">
          <h1><span>Quem sou eu?</span></h1>
          <p>Olá, eu sou Victor Teixeira Mendes, tive meu primeiro contato com a programação ainda no ensino médio em 2022 com Python, mas não dei continuidade aos estudos na época, um tempo depois em 2023 comecei a me interessar novamente por programação e segui estudando Frontend iniciando por HTML, CSS e JavaScript, atualmente trabalho usando React Native desenvolvendo todo o visual de sites e aplicações mobiles.</p>
        </div>
        <div className="image-sobre">
          <img src={imageSobre} alt="" />
        </div>
      </div>

      <div className="skills" id="skills">
        <div className="info-hard-skills">
          <h1><span>Stack</span></h1>
          <div className="area-skills">
            {[{ img: html, name: "HTML 5" }, { img: css, name: "CSS 3" }, { img: javascript, name: "Javascript" }, { img: node, name: "Node.js" }, { img: git, name: "Git" }, { img: react, name: "React" }, { img: java, name: "Java" }, { img: python, name: "Python" }].map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="info-hard-skills">
          <h1><span>Soft</span></h1>
          <div className="area-skills">
            {[{ img: ps, name: "Photoshop" }, { img: illustrator, name: "Illustrator" }, { img: after, name: "After Effects" }, { img: figma, name: "Figma" }].map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="area-projetos">
        <a href="https://github.com/VictorTMendes" target="_blank">
          <button className="input-projetos">Acesse aqui meu GitHub</button>
        </a>
      </div>

      <div className="contact">
        <Contato />
      </div>
    </div>
  );
}

export default Home;
