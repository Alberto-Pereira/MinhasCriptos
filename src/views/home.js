function Home(){
    return(
        <div className="container-fluid bg-primary">
            
            <div className="info">
                <div className="row">
                    <div className="col offset-9">
                        <div className="card bg-secondary text-white border-info">
                            <div className="card-body">
                                Cliente
                            </div>
                        </div>
                        <div className="card bg-secondary text-white border-info">
                            <div className="card-body">
                                Dinheiro atual: R$ 0,00
                            </div>
                        </div>
                        <div className="card bg-secondary text-white border-info">
                            <div className="card-body">
                                Dinheiro inserido: R$ 0,00
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="graphics">
                <div className="row">
                    <div className="col-6">
                        <div className="card text-white bg-secondary border-info" style={{height:'60vh'}}>
                            <div className="card-body" >
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="card text-white bg-secondary border-info" style={{height:'29.5vh', width:'100%'}}>
                        <div className="card-body" >
                            
                        </div>
                    </div>
                    <div className="card text-white bg-secondary border-info" style={{height:'29.5vh', width:'100%'}}>
                        <div className="card-body">
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Home;