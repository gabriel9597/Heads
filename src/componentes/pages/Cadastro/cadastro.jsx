import React from 'react';
import './cadastro.css';
import PlanoSelecionado from './SelecaoPlano/selecaodeplano';
import FormadePagamento from './FormaDePagamento/formadepagamento';
import Thanks from './Thanks/Thanks';
import { FormularioDeCadastro } from './FormularioDeCadastro/formulariodecadastro';

import { useForm } from '../../../hooks/useform';



export const CadastroDev = () => {

      const formComponents = [ <FormularioDeCadastro />, <PlanoSelecionado />, <FormadePagamento />, <Thanks />];

      const {currentStep, currentComponent, changeStep, isLastStep, isfirstStep } = useForm(formComponents)
      
    return (
        <div className="form-container">
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div>{currentComponent}</div>
          <div className='actions'>
          {!isLastStep ? (<button type='button' className='w-25 btn btn-lg' id='Botao-CadastroP'>Avançar</button>) : (<button type='button' className='w-100 btn btn-lg' id='Botao-CadastroP'>Avançar</button>)}
          </div>
          </form>
          <p id="Rodape" className="mt-5 mb-3">&copy; 2023 Heads International</p>
      </div>
    )
}

