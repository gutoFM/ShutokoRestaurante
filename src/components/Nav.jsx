import {  } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css'

function Nav() {

    const navigate = useNavigate();

    const handleLogout = async()=>{
        sessionStorage.removeItem('usuasrioData');
        sessionStorage.removeItem('senhaData');
        alert('Logout bem sucessido')
        navigate('/home')
    }


    return (
        <>
                <div className="menu">
                    
                        <ul>
                            <li className="Title"><h1>Shutoko</h1></li>
                        </ul>
                        <ul className="navs">
                            <li><Link to="/home" className="linkRef"><h3>Home</h3></Link></li>
                            <li><Link to="/produtos" className="linkRef"><h3>Produtos</h3></Link></li>
                            <li><Link to="/sobre" className="linkRef"><h3>Sobre</h3></Link></li>
                            <li><Link to="/login" className="linkRef"><h3>Login</h3></Link></li>
                            <li><button onClick={handleLogout} className="navLogout">Logout</button></li>
                        </ul>

                </div>
        </>
    );
}
export default Nav;