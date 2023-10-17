import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { useState } from 'react';
import './css/EditProduto.css'

function Editar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recProdutoListaByid = ListaProdutos.filter((item) => item.id == id);


  const [produtos, setProduto] = useState({
    id: recProdutoListaByid[0].id,
    nome: recProdutoListaByid[0].nome,
    desc: recProdutoListaByid[0].desc,
    preco: recProdutoListaByid[0].preco,
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produtos.id) {
        indice = index;
      }
    });
    ListaProdutos.splice(indice, 1, produtos);
    navigate('/produtos');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produtos, [name]: value });
  };

  return (
    <div className='container'>
      <section >
        <h1 >EDITAR PRODUTOS</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className='editProd'>
            <legend>PRODUTO SELECIONADO</legend>
            <div>
              <input
                type="hidden"
                name="id"
                value={produtos.id}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idNome">Nome do Produto:</label>
              <input
                type="text"
                name="nome"
                id="idNome"
                value={produtos.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição do Produto:</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                value={produtos.desc}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idPreco">Preço do Produto:</label>
              <input
                type="text"
                name="valor"
                id="idPreco"
                value={produtos.preco}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="subtmit" >EDITAR</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}
export default Editar;
