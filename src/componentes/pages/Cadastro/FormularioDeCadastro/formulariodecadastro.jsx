import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addBookToFirestore } from '../../../../Store/BooksSlice';
import './formulariodecadastro.css';

export const FormularioDeCadastro = () => {
    const dispatch = useDispatch();

      const [username, setUserName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleAddBook = (e) =>{
        e.preventDefault();
        let book={
            username,email,password
        }

        dispatch(addBookToFirestore(book));

        setUserName('');
        setEmail('');
        setPassword('');
      }

      return (
        <div className="form-signin" onSubmit={handleAddBook}>
            <div className="py-5 text-center">
                <h1>Heads</h1>
                <h3>Parabéns pela escolha de se juntar a heads</h3>
                <p className="lead">Para concluir seu cadastro siga apenas 3 etapas simples e começe sua jornada no desenvolvimento de projetos web!</p>
                <h4> 1º Passo - Preencha os dados abaixo!</h4>
            </div>

          <div className="form-floating">
            <input type="text" className="form-control" id="floatingText" placeholder="Username" required onChange={(e)=>setUserName(e.target.value)} value={username} />
            <label htmlFor="floatingText">UserName</label>
          </div>
  
          <div className="form-floating">
            <input type="email" className="form-control bg-input" id="floatingInput" placeholder="E-mail" required onChange={(e)=>setEmail(e.target.value)} value={email} />
            <label htmlFor="floatingInput">E-mail</label>
          </div>
  
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" required onChange={(e)=>setPassword(e.target.value)} value={password} />
            <label htmlFor="floatingPassword">Senha</label>
          </div>

          <button type='submit' className='w-50 btn btn-lg' id='Botao-CadastroS'>Criar Conta</button>

        </div>
      )
}