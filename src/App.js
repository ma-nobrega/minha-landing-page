import React, { useEffect } from "react";
import "./App.css";
import {
  FaInfoCircle,
  FaTools,
  FaBriefcase,
  FaListUl,
  FaHome,
  FaLightbulb,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

import Jornalista from "./assets/jornalista.jpg";
import Entrevista from "./assets/entrevista.jpg";
import Oportunidade from "./assets/oportunidade.jpg";
import Ferramentas from "./assets/ferramentas.jpg";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Profissão: Jornalismo</h1>
        <nav className="App-nav">
          <ul>
            <li>
              <a href="#introduction">
                <FaHome /> Introdução
              </a>
            </li>
            <li>
              <a href="#skills">
                <FaLightbulb /> Habilidades
              </a>
            </li>
            <li>
              <a href="#opportunities">
                <FaChartLine /> Oportunidades
              </a>
            </li>
            <li>
              <a href="#tools">
                <FaCog /> Ferramentas
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="introduction">
          <div className="content">
            <div className="image">
              <img src={Jornalista} alt="Introdução ao Jornalismo" />
            </div>
            <div className="text">
              <h2>
                <FaInfoCircle /> Introdução sobre a Profissão de Jornalismo
              </h2>
              <p>
                O jornalismo é a atividade de coletar, investigar e disseminar
                informações de interesse público. Os jornalistas desempenham um
                papel crucial na disseminação de informações precisas e
                relevantes, influenciando a formação da opinião pública e a
                manutenção da democracia. Historicamente, a profissão evoluiu
                significativamente com o advento da internet e das mídias
                digitais.
              </p>
              <p>
                Os jornalistas podem trabalhar em diversas mídias, como jornais,
                revistas, televisão, rádio e plataformas online. Cada meio
                possui suas próprias características e exige habilidades
                específicas dos profissionais. No entanto, a missão de informar
                a sociedade de maneira ética e precisa é comum a todos os
                formatos de jornalismo.
              </p>
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="content reverse">
            <div className="image">
              <img src={Entrevista} alt="Habilidades de Jornalismo" />
            </div>
            <div className="text">
              <h2>
                <FaListUl /> Habilidades Necessárias
              </h2>
              <ul>
                <li>Excelente comunicação escrita e verbal.</li>
                <li>Capacidade de investigar e verificar informações.</li>
                <li>Conhecimento em ética jornalística.</li>
                <li>Habilidades de edição e uso de ferramentas digitais.</li>
                <li>Adaptabilidade às novas tecnologias e mídias digitais.</li>
              </ul>
              <p>
                Além das habilidades técnicas, um jornalista precisa ser
                curioso, ter uma boa capacidade de observação e análise crítica,
                e estar constantemente atualizado sobre as tendências e
                acontecimentos globais. A capacidade de trabalhar sob pressão e
                cumprir prazos rigorosos também é essencial nesta profissão
                dinâmica e desafiadora.
              </p>
              <p>
                O desenvolvimento contínuo e a aprendizagem são vitais para o
                sucesso na carreira jornalística. Participar de workshops,
                cursos e conferências pode ajudar os jornalistas a se manterem
                atualizados com as últimas tendências e tecnologias da
                indústria.
              </p>
            </div>
          </div>
        </section>
        <section id="opportunities">
          <div className="content">
            <div className="image">
              <img
                src={Oportunidade}
                alt="Oportunidades de Carreira no Jornalismo"
              />
            </div>
            <div className="text">
              <h2>
                <FaBriefcase /> Oportunidades de Carreira
              </h2>
              <p>
                Os jornalistas podem atuar em diversos meios, como televisão,
                rádio, internet, jornais impressos e revistas. Com o avanço da
                tecnologia, novas áreas como blogs, podcasts e mídias sociais
                têm se tornado campos de atuação significativos. Outras
                oportunidades incluem:
              </p>
              <ul>
                <li>Repórter: Coleta e reporta notícias de campo.</li>
                <li>
                  Editor: Supervisiona o conteúdo produzido por outros
                  jornalistas.
                </li>
                <li>
                  Correspondente: Trabalha em diferentes locais, frequentemente
                  no exterior.
                </li>
                <li>
                  Apresentador: Apresenta programas de notícias na televisão ou
                  rádio.
                </li>
                <li>
                  Analista de mídia: Avalia e comenta sobre a cobertura da
                  mídia.
                </li>
              </ul>
              <p>
                Além disso, jornalistas podem trabalhar como assessores de
                imprensa, comunicadores corporativos ou até mesmo como
                freelancers, aproveitando a flexibilidade de atuar em diversos
                projetos simultaneamente. A comunicação interna em grandes
                empresas e a produção de conteúdo para redes sociais são outras
                áreas emergentes para profissionais de jornalismo.
              </p>
            </div>
          </div>
        </section>
        <section id="tools">
          <div className="content reverse">
            <div className="image">
              <img src={Ferramentas} alt="Ferramentas de Jornalismo" />
            </div>
            <div className="text">
              <h2>
                <FaTools /> Ferramentas e Tecnologias Utilizadas
              </h2>
              <ul>
                <li>
                  Softwares de edição de texto e imagem como Microsoft Word e
                  Adobe Photoshop.
                </li>
                <li>Plataformas de publicação como WordPress.</li>
                <li>Ferramentas de análise de dados e verificação de fatos.</li>
                <li>
                  Redes sociais para disseminação de notícias e interação com o
                  público.
                </li>
                <li>
                  Equipamentos de captura de mídia, como câmeras e gravadores de
                  áudio.
                </li>
              </ul>
              <p>
                A tecnologia tem um papel vital no jornalismo moderno,
                permitindo que jornalistas produzam e distribuam conteúdo de
                maneira eficiente e em tempo real. O uso de ferramentas de
                análise de dados, por exemplo, ajuda a verificar informações e a
                descobrir novas histórias a partir de grandes volumes de dados.
              </p>
              <p>
                Plataformas de publicação online e redes sociais são essenciais
                para alcançar um público amplo e diversificado. Com a crescente
                importância da mídia digital, os jornalistas precisam dominar
                essas ferramentas para se manterem relevantes no mercado.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>
          &copy; 2024 Jornalismo. Todos os direitos reservados. Desenvolvido por
          Matheus Nobrega.
        </p>
      </footer>
    </div>
  );
}

export default App;
