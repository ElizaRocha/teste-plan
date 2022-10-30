import { Link } from "react-scroll";
import React from "react";
import './App.css'

function App() {
  const menuItems = [
    {
      id: 1,
      title: "who",
    },
    {
      id: 2,
      title: "do",
    },
    {
      id: 3,
      title: "news",
    },
    {
      id: 4,
      title: "clients",
    },
    {
      id: 5,
      title: 'contact'
    }
  ];

  return (
    <div className="App">
      <div className='links-routes'>
        <img src={require('./logo-planxp.png')} />
        <nav className="nav">
            <Link 
              className='link' 
              to='who'
              smooth={true}
              duration={500}
             >
              /QUEM SOMOS
             </Link>
            <Link 
              className='link' 
              to='do'
              smooth={true}
              duration={500}
            >
                /O QUE FAZEMOS
            </Link>
            <Link 
              className='link' 
              to='news'
              smooth={true}
              duration={500}
            >
                /PLAN NEWS
            </Link>
            <Link 
              className='link' 
              to='clients'
              smooth={true}
              duration={500}
            >
                /NOSSOS CLIENTES
            </Link>
            <Link 
              className='link' 
              to='contact'
              smooth={true}
              duration={600}
            >
                /CONTATO
            </Link>
          </nav>

            <div className="inovar">
              <p>Que tal inovar com a gente?</p>
            </div>
        </div>
        <main>
        
          <div className="content" id="do">
            <div className="content-oquefazemos">
              <p>/O que fazemos</p>
              <span className="title">/Games</span>
              <span>Desenvolvimento de games digitais.</span>
              <p className="p-oquefazemos">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Aenean placerat justo nec ullamcorper imperdiet. 
              Quisque malesuada nisl eget finibus efficitur. Fusce 
              auctor consequat diam vel suscipit. Sed at scelerisque 
              mi, et auctor enim. 
              </p>
            </div>
            <div className="content-info-oquefazemos">
              <div className="oquefazemos-info">
                <img src={require('./celulares.png')}/>
                <p>
                  A PlanXP tem uma equipe qualificada para o 
                  desenvolvimento de jogos digitais para dispositivos moveis 
                  (smartphones, tablets e afins).
                </p>
              </div>
              <div className="oquefazemos-info">
                <img src={require('./fone.png')}/>
                <p>
                  Desenvolvemos games para anunciar seus produtos e serviços, atrav'es da gamificaçao
                  (aplicaçoes que utilizam dinamicas de jogos para engajamento
                  de usuarios, resoluç~ao de problemas e melhoria no aprendizado).
                </p>
              </div>
              <div className="oquefazemos-info">
                <img src={require('./jogando.png')}/>
                <p>
                  Utilizando as ultimas tecnologias para a criaç~ao de games,
                  trabalhamos de acordo com as necessidades dos clientes, sempre
                  buscando oferecer o resultado que ele busca.
                </p>
              </div>
              <div className="oquefazemos-info">
                <img src={require('./controle.png')}/>
                <p>
                  Experimente inovar com a PlanXP paa desenvolver ps seus jogos digitais!

                </p>
              </div>
            </div>
          </div>



          <div className="content-plannews" id="news">
            <div className="content-plannews-info">
              <p>/Plan news</p>
              <span className="title">/Cases Games</span>
            </div>
            <div className="plannews-cards">
              <div>
                <img src={require('./img1.png')}/> 
                <div>
                  <span>Plan cria o novo site da SKA</span>
                  <p>
                  Aliquam at malesuada ante. 
                  Mauris turpis quam, molestie quis velit sed, 
                  mattis egestas dolor.
                  </p>
                </div>            
              </div>
              <div>
                <img src={require('./img2.png')}/>
                <div>
                  <span>Plan cria o novo site da SKA</span>
                  <p>
                  Aliquam at malesuada ante. 
                  Mauris turpis quam, molestie quis velit sed, 
                  mattis egestas dolor. 
                  </p>
                </div>
              </div>
              <div>
                <img src={require('./img3.png')}/>
                <div>
                  <span>Plan cria o novo site da SKA</span>
                  <p>
                  Aliquam at malesuada ante. 
                  Mauris turpis quam, molestie quis velit sed, 
                  mattis egestas dolor. 
                  </p>
                </div>
              </div>
              <div>
                <img src={require('./img4.png')}/>
                <div>
                  <span>Plan cria o novo site da SKA</span>
                  <p>
                  Aliquam at malesuada ante. 
                  Mauris turpis quam, molestie quis velit sed, 
                  mattis egestas dolor.
                  </p>
                </div>
              </div>
              <div>
                <img src={require('./img5.png')}/>
                <div>
                  <span>Plan cria o novo site da SKA</span>
                  <p>
                  Aliquam at malesuada ante. 
                  Mauris turpis quam, molestie quis velit sed, 
                  mattis egestas dolor. 
                  </p>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
       
      </main>
    </div>
  );
}

export default App;
