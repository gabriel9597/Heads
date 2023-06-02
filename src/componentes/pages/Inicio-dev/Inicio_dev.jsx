import React from 'react-dom';
import { Link } from 'react-router-dom';
import './inicio_dev.css'


function Inicio_dev(){
    return <header>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
         
          <a href="" className="navbar-brand">
            <h3 id="logo" width="172">Heads</h3>
          </a>

          <button className="navbar-toggler ms-auto" data-bs-toggle="collapse" data-bs-target="#nav-principal" aria-expanded="false" aria-controls="nav-principal">
            <i className="fa-solid fa-bars text-white"></i>
          </button>

          <div className=" collapse navbar-collapse" id="nav-principal">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="" id='Botoes-Menu' className='nav-link'>Início</Link>
              </li>

              <li id="nav-item-divisor"></li>

              <li className="nav-item">
                <Link to="" id='Botoes-Menu' className='nav-link'>Beneficios</Link>
              </li>

              <li id="nav-item-divisor"></li>

              <li className="nav-item">
                <Link to="" id='Botoes-Menu' className='nav-link'>Planos</Link>
              </li>

              <li id="nav-item-divisor"></li>

              <li className="nav-item">
                <Link to="/CadastroDev" id='Botoes-Menu' className='nav-link'>Cadastre-se</Link>
              </li>

              <li id="nav-item-divisor"></li>

              <li className="nav-item">
                <Link to="" id='Botoes-Menu' className='nav-link'>Login</Link>
              </li>


              <li className="nav-item">
                <Link to="" id='Botoes-Menu' className='nav-link'>Contato</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>

}

export default Inicio_dev;