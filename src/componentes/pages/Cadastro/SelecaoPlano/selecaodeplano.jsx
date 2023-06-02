import React, { useState } from 'react';
import './selecaodeplano.css'



const PlanoSelecionado = () => {



    return (
        <section>
        <div>
            <div className="py-5 text-center">
                <h1>Heads</h1>
                <h3>Parabéns pela escolha de se juntar a heads</h3>
                <p className="lead">Para concluir seu cadastro siga apenas 3 etapas simples e começe sua jornada no desenvolvimento de projetos web!</p>
                <h4> 2º Passo - Escolha seu Plano!</h4>
            </div>
        </div>
        

        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Plano Nacional e Internacional</h1>
                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <h3>R$ 99,99</h3>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="submit" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold" id='botoes-Splanos'>Escolher Plano</button>
                </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src="" alt="" width="720" />
            </div>
            </div>

            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src="" alt="" width="720" />
            </div>
            
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Plano Nacional e Governamental</h1>
                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <h3>R$ 99,99</h3>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="submit" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold" id='botoes-Splanos'>Escolher Plano</button>
                </div>
            </div>
            </div>

            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Plano Nacional e Internacional</h1>
                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <h3>R$ 99,99</h3>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="submit" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold" id='botoes-Splanos'>Escolher Plano</button>
                </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src="" alt="" width="720" />
            </div>
            </div>
        </div>
        </section>

    )
}

export default PlanoSelecionado;