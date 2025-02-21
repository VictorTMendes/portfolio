import './Projetos.css'
import Gta from '../assets/gta.png'
import CloneInsta from '../assets/clone-insta.png'
import CloneApple from '../assets/clone-apple.png'
import MoneyFlow from '../assets/Captura de Tela 2025-02-21 às 16.12.00.png'
import Login from '../assets/login.png'
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import git from "../assets/git.svg";

function Projetos() {
    return (
      <div className="projetos">
        <h1>Meus Projetos</h1>
        <div className="area-projetos">
          <div className="item">
            <h3>Clone Rockstar Games</h3>
            <img src={Gta} alt="GTA Clone" />
            <p>Linguagens Utilizadas:</p>
            <div className="linguagens">
              <img src={html} alt="" />
              <img src={javascript} alt="" />
              <img src={css} alt="" />
            </div>
            <a href="https://github.com/VictorTMendes/projeto-site-gta" target="_blank">
              <button className='btn-projeto'>Ver Projeto</button>
            </a>
          </div>

          <div className="item">
            <h3>Clone Home Instagram</h3>
            <img src={CloneInsta} alt="Clone Instagram" />
            <p>Linguagens Utilizadas:</p>
            <div className="linguagens">
              <img src={html} alt="" />
              <img src={javascript} alt="" />
              <img src={css} alt="" />
            </div>
            <a href="https://github.com/VictorTMendes/clone-home-instagram" target="_blank">
              <button className='btn-projeto'>Ver Projeto</button>
            </a>
          </div>

          <div className="item">
            <h3>MoneyFlow</h3>
            <img src={MoneyFlow} alt="" />
            <p>Linguagens Utilizadas:</p>
            <div className="linguagens">
              <img src={react} alt="" />
              <img src={javascript} alt="" />
            </div>
            <a href="https://github.com/VictorTMendes/clone-home-instagram" target="_blank">
              <button className='btn-projeto'>Ver Projeto</button>
            </a>
          </div>

        </div>
        <div className="area-projetos">
          <div className="item">
            <h3>Login/Cadastro Moderno</h3>
            <img src={Login} alt="" />
            <p>Linguagens Utilizadas:</p>
            <div className="linguagens">
              <img src={html} alt="" />
              <img src={javascript} alt="" />
              <img src={css} alt="" />
            </div>
            <a href="https://github.com/VictorTMendes/login-moderno" target="_blank">
              <button className='btn-projeto'>Ver Projeto</button>
            </a>
          </div>

          <div className="item">
            <h3>Clone Apple</h3>
            <img src={CloneApple} alt="GTA Clone" />
            <p>Linguagens Utilizadas:</p>
            <div className="linguagens">
              <img src={html} alt="" />
              <img src={javascript} alt="" />
              <img src={git} alt="" />
            </div>
            <a href="https://github.com/VictorTMendes/landing-page-iphone" target="_blank">
              <button className='btn-projeto'>Ver Projeto</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projetos;
  