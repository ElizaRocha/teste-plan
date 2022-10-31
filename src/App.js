import { Link } from "react-scroll";
import React from "react";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='links-routes'>
        <img src={require('./assets/logo-planxp.png')} />
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
            <span className="oquefazemos-subtitle">Desenvolvimento de games digitais.</span>
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
              <img src={require('./assets/celulares.png')}/>
              <p>
                A PlanXP tem uma equipe qualificada para o 
                desenvolvimento de jogos digitais para dispositivos moveis 
                (smartphones, tablets e afins).
              </p>
            </div>
            <div className="oquefazemos-info">
              <img src={require('./assets/fone.png')}/>
              <p>
                Desenvolvemos games para anunciar seus produtos e serviços, atrav'es da gamificaçao
                (aplicaçoes que utilizam dinamicas de jogos para engajamento
                de usuarios, resoluç~ao de problemas e melhoria no aprendizado).
              </p>
            </div>
            <div className="oquefazemos-info">
              <img src={require('./assets/jogando.png')}/>
              <p>
                Utilizando as ultimas tecnologias para a criaç~ao de games,
                trabalhamos de acordo com as necessidades dos clientes, sempre
                buscando oferecer o resultado que ele busca.
              </p>
            </div>
            <div className="oquefazemos-info">
              <img src={require('./assets/celulares.png')}/>
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
              <img src={require('./assets/img1.png')}/> 
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
              <img src={require('./assets/img2.png')}/>
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
              <img src={require('./assets/img3.png')}/>
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
              <img src={require('./assets/img4.png')}/>
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
              <img src={require('./assets/img5.png')}/>
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
        </div>

        <div id='contact' className="contact">
          <div className="contact-div1">
            <div className="contact-info">
              <p className="title">/Contato</p>
              <span>
              Gostou de saber mais sobre as inovações 
              tecnológicas e também quer oferecer novas
              experiências aos seus clientes? Então 
              entre em contato e marque um encontro 
              real conosco para conversarmos sobre as 
              infinitas possibilidades do mundo virtual.
              </span>
            </div>
            <div className="name">
              <p>Nome:</p>
              <input />
            </div>
            <div className="emailTelefone">
              <div>
                <p>E-mail:</p>
                <input />
              </div>
              <div>
                <p>Telefone:</p>
                <input />
              </div>
            </div>
            <div className="msg">
              <p>Mensagem:</p>
              <textarea rows="5" cols="33"/>
            </div>
          </div>
          <div className="contact-cards">
            <div className="contact-cards1">
              <div>
                <p className="contact-title">Siga-nos</p>
                <p className="contact-cards-p">
                  Fique sempre por dentro de todas as novidades
                   da Plan XP e de todas empresas do Grupo Plan
                    Marketing.
                </p>
              </div>
              <div>
                <p className="contact-title">/RS</p>
                <p className="contact-cards-p">
                  Rua Onze de Junho, 243
                  Novo Hamburgo/RS
                  Brasil
                  +55 51 98229.0400
                </p>
              </div>
              <div>
                <p className="contact-title">/SP</p>
                <p className="contact-cards-p">
                  Rua Ibijaú, 355/Sala 1309
                  São Paulo/SP
                  Brasil
                  +55 11 98871.8556
                </p>
              </div>
            </div>
            <div className="contact-cards2">
              <div>
                <img className="imgContact" src={require('./assets/grupo.png')}/>
                <p className="contact-cards-p">
                  Fique sempre por dentro de todas as novidades
                   da Plan XP e de todas empresas do Grupo Plan
                    Marketing.
                </p>
              </div>
              <div>
                <img className="imgContact"  src={require('./assets/logo-planxp.png')}/>
                <p className="contact-cards-p">
                  Rua Onze de Junho, 243
                  Novo Hamburgo/RS
                  Brasil
                  +55 51 98229.0400
                </p>
              </div>
              <div>
                <img className="imgContact" src={require('./assets/fullup.png')}/>
                <p className="contact-cards-p">
                  Rua Ibijaú, 355/Sala 1309
                  São Paulo/SP
                  Brasil
                  +55 11 98871.8556
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
