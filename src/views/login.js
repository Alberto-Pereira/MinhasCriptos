function Login(){
    return(
        <div className="container-fluid bg-primary login">
            <div className="row">
                <div className="d-flex flex-row justify-content-center align-items-center min-vh-100">
                    <div className="col-4">
                        <div className="card bg-secondary text-white border-info">
                            <div className="card-head text-center">
                                <h2 className="mt-2 mb-2 ms-1">MinhasCriptos</h2>
                            </div>
                            <div className="card-body border-top border-info">
                                <input type="email" className="form-control mt-4 mb-3 text-center border-info" placeholder="Email"></input>
                                <input type="password" className="form-control mb-3 text-center border-info" placeholder="Senha"></input>
                                <button type="submit" className="btn btn-info border-primary float-end">Entrar</button>
                                <button type="submit" className="btn btn-cadastrar border-info float-start mb-2 text-info">
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;