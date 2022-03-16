function Adicionar(){
    return(
        <div className="container-fluid bg-primary">

            <div className="adicionar">
                <div className="d-flex flex-row align-items-center justify-content-center min-vh-100">
                    <div className="col-8">
                        <div className="card bg-secondary ps-2 pe-2 ">
                            <div className="card-body mb-3">
                                <div className="d-flex justify-content-center mt-3 ">
                                    <select className="btn selectbox me-4" name="moeda" id="moeda">
                                        <option value="bitcoin">Selecionar moeda</option>
                                        <option value="bitcoin">Bitcoin</option>
                                        <option value="eth">Ethereum</option>
                                        <option value="doge">Doge</option>
                                    </select>
                                    <select className="btn selectbox" name="moeda" id="moeda">
                                        <option value="bitcoin">Selecionar data de compra</option>
                                        <option value="bitcoin">Bitcoin</option>
                                        <option value="eth">Ethereum</option>
                                        <option value="doge">Doge</option>
                                    </select>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <input className="form-control mt-2 text-center" placeholder="Quantidade"></input>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <input className="form-control mt-2 text-center" placeholder="Preço"></input>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <input className="form-control mt-2 text-center" placeholder="Valor da unidade no dia: Ex.: R$ 195000,00"></input>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-info float-end mt-1">Adicionar</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Adicionar;