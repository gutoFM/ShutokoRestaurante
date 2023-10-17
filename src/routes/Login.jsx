import { useRef } from 'react';
import InserirProdutos from './InserirProduto';
import './css/Login.css'

function Login (){

  const user = useRef();
  const password = useRef();
  const getUser = sessionStorage.getItem('userData');
  const getSenha = sessionStorage.getItem('senhaData');

  const handleSubmit = () => {
    if (user.current.value === 'admin' && password.current.value === '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'admin');
      sessionStorage.setItem('senhaData', token);
    } else {
      alert('usuário e senha inválidos !');
    }
  };

  return(
    <>
    <div className='containerLogin'>
      <section>
        <h1>Login</h1>
        {getUser && getSenha ? (
          <InserirProdutos />
        ) : (
          <form onSubmit={handleSubmit} className='login'>
            <p>
              USUÁRIO: <input type="text" ref={user} />
            </p>
            <br />
            <p>
              SENHA: <input type="password" ref={password} />
            </p>
            <br />
            <input type="submit" value="Login" id='loginBtn'/>

        
          </form>
        )}
      </section>

      <section className='loginImg'>
        <img src="\src\imgs\login.png" alt="login" />
      </section>
    </div>


    </>
  )
}
export default Login