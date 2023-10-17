import { useState } from 'react';
import { ListaProdutos } from '../components/ListaProdutos';
import { useNavigate } from 'react-router-dom';


function Inserir() {
  const navigate = useNavigate();

  let novoId = ListaProdutos[ListaProdutos.length - 1].id + 1;

  const [produto, setProduto] = useState({
    id: novoId,
    nome: '',
    desc: '',
    preco: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ListaProdutos.push(produto);
    navigate('/produtos');
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <div className='container'>
      <section>
        <h1>Cadastro de Produtos</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>PRODUTO</legend>
            <p>
              <label htmlFor="idNome"> Nome do Produto:</label>
              <input type="text" name="nome" id="idNome"value={produto.nome}onChange={handleChange}/>
            </p>
            <p>
              <label htmlFor="idDesc">Descrição Produto:</label>
              <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
            </p>
            <p>
              <label htmlFor="idPreco"> Preço do Produto:</label>
              <input type="text" name="preco" id="idPreco" value={produto.preco} onChange={handleChange}/>
            </p>
            <p>
              <button type="submit">
                Adicionar Produto
              </button>
            </p>
          </fieldset>
        </form>
      </section>
    </div>
  );
}
export default Inserir;