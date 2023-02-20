import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App(){
  return(
    <>
<div className='container'>
  <div className="card w-sm-100 w-md-50" >
    <div className="d-flex align-items-center" style={{backgroundColor:"#ffe600"}}>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}} className='d-flex col-8'>
        <img src='https://static.mlstatic.com/org-img/homesnw/img/ml-logo@2x.png?v=4.0' alt='logoML' style={{width: '50%'}}></img>
      </div>
      <div className='d-flex col-3 flex-column align-items-start' style={{marginTop: '5px'}}>
        <ul style={{listStyleType:"none", width: '50%'}}>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Argentina</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MBO/{vaporizador}"}><p>Bolivia</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLB/{vaporizador}"}><p>Brasil</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MCO/{vaporizador}"}><p>Chile</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Colombia</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Costa Rica</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Dominicana</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Ecuador</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Guatemala</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Honduras</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Mexico</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Nicaragua</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Panamá</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Paraguay</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Perú</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Salvador</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Uruguay</p></Link></li>
          <li className="borde centrado"><Link to={"/carousel/MLA/{vaporizador}"}><p>Venezuela</p></Link></li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default App;
