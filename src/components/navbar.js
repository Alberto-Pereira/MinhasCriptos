import { useNavigate } from 'react-router-dom'

export default function Navbar(){
    let navigate = useNavigate();

    return(
        <nav className="navbar fixed-top bg-info">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <a className="navbar-brand text-white"
                           onClick={() => {navigate('/')}}>MinhasCriptos</a>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <a className="nav-link text-white" 
                           onClick={() => {navigate('/adicionar');}}>ADICIONAR</a>
                        <a className="nav-link text-white"
                           onClick={() => {navigate('/historico')}}>HISTÓRICO</a>
                        <a className="nav-link text-white"
                           onClick={() => {navigate('/suporte')}}>SUPORTE</a>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <a className="nav-link text-white" 
                            onClick={() => {navigate('/cadastrar-usuario');}}>DESLOGAR</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}