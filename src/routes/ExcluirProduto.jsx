import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import './css/ExcluirProd.css'


function Excluir() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);
  const [produtos] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    desc: recProdutoListaById[0].desc,
    preco: recProdutoListaById[0].preco,
  });
  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produtos.id) {
        indice = index;
      }
    });
    ListaProdutos.splice(indice, 1);
    navigate('/produtos');
  };

  return (
    <div className='container'>
      <section>
        <div className='excluirProd'>
          <h1>Excluir Produto</h1>
          <div>
            <p>Nome : {produtos.nome}</p>
            <p>Desc : {produtos.desc}</p>
            <p>Preço : {produtos.preco}</p>
          </div>
          <div>
            <button onClick={handleExclude} >
              EXCLUIR
            </button>
            <button onClick={() => navigate('/produtos')}>
              CANCELAR
            </button>
          </div>
        </div>
      </section>
  </div>
  );
}
export default Excluir;
