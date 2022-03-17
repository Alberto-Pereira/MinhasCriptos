function Historico(){
    return(
        <div className="container-fluid bg-primary historico">
            <div className="d-flex flex-row justify-content-center align-items-center min-vh-100">
                <div className="col-10">
                    <div className="card bg-secondary text-white border-info">
                        <div className="card-body ">
                            <div className="row">
                                <div className="col-4 border-end border-white border-1">
                                    <h3 className="mt-2">Filtros</h3>
                                    <select className="btn selectbox border-info" name="moeda" id="moeda">
                                        <option value="">Selecionar moeda</option>
                                        <option value="bitcoin">Bitcoin</option>
                                        <option value="eth">Ethereum</option>
                                        <option value="doge">Doge</option>
                                    </select>
                                    <div className="d-flex justify-content-center">
                                        <input className="form-control mt-2 text-center me-1 border-info" placeholder="Dia"></input>
                                        <input className="form-control mt-2 text-center me-1 border-info" placeholder="Mês"></input>
                                        <input className="form-control mt-2 text-center border-info" placeholder="Ano"></input>
                                    </div>
                                    <select className="btn selectbox mt-2 border-info" name="status" id="status">
                                        <option value="">Selecionar status</option>
                                        <option value="alta">Alta</option>
                                        <option value="queda">Queda</option>
                                    </select>
                                    <button className="btn btn-info float-end mt-2 border-primary">Buscar</button>
                                </div>
                                <div className="col-8">
                                    <h3 className="mt-2">Histórico</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Historico;