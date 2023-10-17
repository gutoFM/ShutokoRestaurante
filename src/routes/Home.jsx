import {} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/Home.css'



function Home() {
  return (
    <>
      <div className="container">
        

        <div className='textBox'>
          <h1>Sejam Bem-Vindos ao Shutoko</h1>
          <p>O segredo por trás da excelência do Restaurante Shutoko reside na busca</p> 
            <p>incessante pela perfeição em todos os aspectos de sua operação. Desde a</p> 
            <p>seleção cuidadosa dos ingredientes até a habilidade artesanal de seus</p> 
            <p>chefs, cada detalhe é meticulosamente tratado para garantir que os pratos</p> 
            <p>servidos alcancem um nível superior de sabor e qualidade.</p>
        </div>

        <div id="carrossel"  className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="\src\imgs\sushi1.jpg" className="d-block" alt=" Comida 1" />
            </div>
            <div className="carousel-item">
              <img src="\src\imgs\sushi2.jpeg" className="d-block " alt="comida 2" />
            </div>
            <div className="carousel-item">
              <img src="\src\imgs\sushi3.jpg" className="d-block" alt="comida 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carrossel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carrossel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className='sup'>
          <div className="card" style={{ width: '18rem' }}>
            <img src="\src\imgs\Hossomaki.jpg" className="card-img-top" alt="img sushi1" />
            <div className="card-body">
              <h5 className="card-title">Hossomaki</h5>
              <p className="card-text">Hossomaki por serem pequenos, costumam levar apenas um ingrediente no recheio, podendo variar entre salmão, kani, pepino.</p>
              <a href="#" className="btn btn-warning">Por R$1,99 /Unid.</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src="\src\imgs\temaki2.jpg" className="card-img-top" alt="img sushi2" />
            <div className="card-body">
              <h5 className="card-title">Temaki</h5>
              <p className="card-text">Temaki é um pedaço grande em formato de cone, com a alga na parte externa e os ingredientes até à boca da extremidade larga.</p>
              <a href="#" className="btn btn-warning">Por R$7,50 /Unid.</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src="\src\imgs\hotholl.jpg" className="card-img-top" alt="img sushi3" />
            <div className="card-body">
              <h5 className="card-title">Hot-Roll</h5>
              <p className="card-text">Hot roll é o sushi empanado com alga frita, crocante com farinha panko e recheios variados, sendo o salmão grelhado o mais comum.</p>
              <a href="#" className="btn btn-warning">Por R$2,99 /Unid.</a>
            </div>
          </div>
        </div>

        <div className='inf'>
          <div className="card" style={{ width: '18rem' }}>
            <img src="\src\imgs\Uramaki.jpg" className="card-img-top" alt="img sushi4" />
            <div className="card-body">
              <h5 className="card-title">Uramaki</h5>
              <p className="card-text">Uramaki é o sushi que tem a alga enrolada por dentro e o arroz por fora com recheio geralmente de salmao com creamcheese.</p>
              <a href="#" className="btn btn-warning">Por R$1,50 /Unid.</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src="\src\imgs\sashimi.jpg" className="card-img-top" alt="img sushi5" />
            <div className="card-body">
              <h5 className="card-title">Sashimi</h5>
              <p className="card-text">Sashimi é apenas a fatia de peixe cru cortado em finas fatias.</p>
              <a href="#" className="btn btn-warning">Por APENAS R$0,99 /Unid.</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src="\src\imgs\niguiri.jpg" className="card-img-top" alt="img sushi6" />
            <div className="card-body">
              <h5 className="card-title">Niguiri</h5>
              <p className="card-text">Niguiri é o tradicional sushi feito à mão, consiste em uma peça de arroz solido em formato oval coberto por uma fatia de salmão cru.</p>
              <a href="#" className="btn btn-warning">Por R$1,99 /Unid.</a>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;