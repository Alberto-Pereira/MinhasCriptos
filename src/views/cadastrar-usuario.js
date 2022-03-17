function CadastrarUsuario(){
    return(
        <div className="container-fluid bg-primary cadastrar">
            <div className="d-flex flex-row justify-content-center align-items-center min-vh-100">
                <div className="col-4">
                    <div className="card bg-secondary text-white border-info">
                        <div className="card-head text-center">
                            <h2 className="mt-2 mb-2 ms-1">Cadastrar</h2>
                        </div>
                        <div className="card-body border-top border-info">
                            <input className="form-control border-info mt-4 text-center" type="text" placeholder="Nome"></input>
                            <input className="form-control border-info mt-2 text-center" type="email" placeholder="Email"></input>
                            <input className="form-control border-info mt-2 text-center" type="password" placeholder="Senha"></input>
                            <input className="form-control border-info mt-2 text-center" type="password" placeholder="Repita a senha"></input>
                            <button className="btn btn-info float-end border-primary mt-3" type="submit">Cadastrar</button>
                            <button className="btn btn-cadastrar float-start border-info mt-3 mb-2 text-info" type="submit">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadastrarUsuario;