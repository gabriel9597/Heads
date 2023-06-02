import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'




function Banner(){
    return <section id="opcoes">
    
    <header>
    <h1>Heads</h1>
    <h3 id='Escolha-Site'>Qual site você quer acessar?</h3>
    </header>

  
    <div className="container">
      <div className="row">
        <div id="projetistas" className="col-md-6">
          <img src="Imagens/imagem_sites.png" className="img-fluid" />
          <h4>Você quer ter um Projeto Web?</h4>
          <h5>Saiba como Clicando no botão abaixo!</h5>
          <a id="botao-projetistas" className="btn" href="">Clique Aqui!</a>
        </div>

        <div id="Desenvolvedores" className="col-md-6">
          <img src="Imagens/imagem_programacao.jpg" className="img-fluid" />
          <h4>Você quer Desenvolver Projetos Web?</h4>
          <h5>Saiba como Clicando no botão abaixo!</h5>
          <Link to="/Inicio_Dev" id="Botao-desenvolvedores" className="btn">Clique Aqui!</Link>
        </div>


      </div>
    </div>
  

    <footer>
        <h5>&copy; 2023 Heads International</h5>
    </footer>
  </section>
}

export default Banner;