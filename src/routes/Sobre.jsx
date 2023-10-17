import {} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/Sobre.css'

function Sobre (){
  return(
    <>
    <div className='container'>
      <h1 className='sobreh1'>Equipe de Desenvolvedores do Site </h1>

      

      <div className='card-group'>
        
        <div className='card-group'>

          <div className="card sobre" style={{ width: '18rem' }}>
            <img src="\src\img\Augusto Fisco Milreu -- rm98245.jpg" className="card-img-top" alt="Card image1" />
            <div className="card-body">
              <h5 className="card-title">Augusto Fisco Milreu</h5>
              <p className="card-text">RM 98245</p>
            </div>
          </div>

          <div className="card sobre" style={{ width: '18rem' }}>
            <img src="\src\img\Felipe Cavalcante Bressane -- rm97688.jfif" className="card-img-top" alt="Card image2" />
            <div className="card-body">
              <h5 className="card-title">Felipe Cavalcante Bressane</h5>
              <p className="card-text">RM 97688</p>
            </div>
          </div>

          <div className="card sobre" style={{ width: '18rem' }}>
            <img src="\src\img\Gustavo.jfif" className="card-img-top" alt="Card image3" />
            <div className="card-body">
              <h5 className="card-title">Gustavo Fernandes</h5>
              <p className="card-text">RM 98943</p>
            </div>
          </div>

          <div className="card sobre" style={{ width: '18rem' }}>
            <img src="\src\img\Isabelle de Carvalho Cruz -- rm97717.jfif" className="card-img-top" alt="Card image4" />
            <div className="card-body">
              <h5 className="card-title">Isabelle de Carvalho Cruz</h5>
              <p className="card-text">RM 97717</p>
            </div>
          </div>

          <div className="card sobre" style={{ width: '18rem' }}>
            <img src="\src\img\Gabriel Sugayama Mazza -- rm99265.jfif" className="card-img-top" alt="Card image5" />
            <div className="card-body">
              <h5 className="card-title">Gabriel Sugayama Mazza</h5>
              <p className="card-text">RM 99265</p>
            </div>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}
export default Sobre