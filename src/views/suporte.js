function Suporte(){
    return(
        <div className="container-fluid bg-primary">
            <div className="d-flex flex-row justify-content-center align-items-center min-vh-100">
                <div className="col-4">
                    <div className="card bg-secondary text-white border-info">
                        <div className="card-body mt-2 mb-2">
                            <form onSubmit="">
                                <select className="btn selectbox border-info" name="suporte" id="suporte">
                                    <option value=''>Selecione um assunto</option>
                                    <option value='moeda'>Sugerir nova moeda</option>
                                    <option value='problema'>Reportar problema</option>
                                    <option value='outro'>Outro</option>
                                </select>
                                <textarea className="form-control mt-2 border-info" rows="4" placeholder="Digite sua mensagem."></textarea>
                                <button className="btn btn-info float-end mt-2 border-primary" type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suporte;