import {} from 'react'
import { Link } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos.jsx';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import './css/Produtos.css'

function Produto (){
  return(
    <>
    <div className='container'>
      <section>
        <h1>LISTA DE PRODUTOS</h1>
        <div className='produtos'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>DESCRIÇÃO</th>
                <th>PREÇO</th>
                <th>EDITAR / EXCLUIR</th>
              </tr>
            </thead>
            <tbody>
              {ListaProdutos.map((item, indice) => (
                <tr key={indice}>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.desc}</td>
                  <td>{item.preco}</td>
                  <td>
                    {' '}
                    <Link to={`/editar/produto/${item.id}`}>
                      <Editar />
                    </Link>{' '}
                    <Link to={`/excluir/produto/${item.id}`}>
                      <Excluir />
                    </Link>{' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
    </>
  )
}
export default Produto