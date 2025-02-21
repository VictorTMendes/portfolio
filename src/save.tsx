import './App.css'
import arrowImage from "./assets/chevrons-down-solid-72.png";
import imageSobre from "./assets/image.jpg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import javascript from "./assets/javascript.svg";
import react from "./assets/react.svg";
import git from "./assets/git.svg";
import node from "./assets/node.svg";
import java from "./assets/java.svg";
import python from "./assets/python.svg";
import ps from "./assets/photoshop.png";
import figma from "./assets/figma.png";
import illustrator from "./assets/illustrator.png";
import after from "./assets/after-effects.png";
import Contato from "./components/Contato"

function App() {

  return (
    <>
      <div className="header">
        <div className="logo"><h3><span>Portfólio</span> Victor</h3></div>
        <ul>
          <li><a href="#sobre"><span>&lt;</span> Sobre <span>&gt;</span></a></li>
          <li><a href="#projetos"><span>&lt;</span> Projetos <span>&gt;</span></a></li>
          <li><a href="#contato"><span>&lt;</span> Contato <span>&gt;</span></a></li>
        </ul>
      </div>
      <div className="main-container">
        <div className="info">
          <h1><span>Frontend</span></h1>
          <h1 className="side">Developer</h1>
        </div>
        <div className="descricao">
          <p><span>&lt;</span> Desenvolvedor web focado em criar sites responsivos e modernos <span>&gt;</span></p>
        </div>
        <img src={arrowImage} alt="arrow" className='arrow'/>
        <div className="sobre" id='sobre'>
          <div className="info-sobre">
            <h1><span>Quem sou eu?</span></h1>
            <p>Olá, eu sou Victor Teixeira Mendes, tive meu primeiro contato com a programação ainda no ensino médio em 2022 com Python, mas não dei continuidade aos estudos na época, um tempo depois em 2023 comecei a me interessar novamente por programação e segui estudando Frontend iniciando por HTML, CSS e JavaScript, atualmente trabalho usando React Native desenvolvendo todo o visual de sites e aplicações mobiles. </p>
          </div>
          <div className="image-sobre">
            <img src={imageSobre} alt="" />
          </div>
        </div>

        <div className="skills" id="skills">
          <div className="info-hard-skills">
            <h1><span>Stack</span></h1>
            <div className="area-skills">
              <div className="skill">
                <img src={html} alt="HTML 5" />
                <p>HTML 5</p>
              </div>
              <div className="skill">
                <img src={css} alt="CSS 3" />
                <p>CSS 3</p>
              </div>
              <div className="skill">
                <img src={javascript} alt="JavaScript" />
                <p>Javascript</p>
              </div>
              <div className="skill">
                <img src={node} alt="node" />
                <p>Node.js</p>
              </div>
              <div className="skill">
                <img src={git} alt="Git" />
                <p>Git</p>
              </div>
              <div className="skill">
                <img src={react} alt="React" />
                <p>React</p>
              </div>
              <div className="skill">
                <img src={java} alt="Java" />
                <p>Java</p>
              </div>
              <div className="skill">
                <img src={python} alt="Python" />
                <p>Python</p>
              </div>
            </div>
          </div>
          <div className="info-hard-skills">
            <h1><span>Soft</span></h1>
            <div className="area-skills">
              <div className="skill">
                <img src={ps} alt="photoshop" />
                <p>Photoshop</p>
              </div>
              <div className="skill">
                <img src={illustrator} alt="illustrator" />
                <p>Illustrator</p>
              </div>
              <div className="skill">
                <img src={after} alt="After effects" />
                <p>After Effects</p>
              </div>
              <div className="skill">
                <img src={figma} alt="figma" />
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
        <div className="area-projetos">
          <a href="https://github.com/VictorTMendes" target='u_blank'>
            <button className='input-projetos'>Acesse aqui meu github</button>
          </a>
        </div>
        <div className="contact">
          <Contato />
        </div>

      </div>
      

    </>
  )
}

export default App
