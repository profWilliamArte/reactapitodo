import Grafico1 from "../components/(graficos)/Grafico1"
import Grafico2 from "../components/(graficos)/Grafico2"


const Dashborad = () => {
    return (
        <div className="p-3">
            <h3 className="text-center py-4">Dashboard</h3>
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border border-warning-subtle  shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1 fs-5">
                                       Total Ordenes</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border border-warning-subtle shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1 fs-5">
                                        Inventario en $</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$1.150.360</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border border-warning-subtle shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1 fs-5">
                                       Cuentas por Cobrar</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$350.000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border border-warning-subtle shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1 fs-5">
                                        Cuentas por pagar</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$400,000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6 ">
                    <div className="card border border-warning-subtle  shadow h-100 p-2">
                        <Grafico1/>
                    </div>
                    
                </div>
                <div className="col-md-6 ">
                    <div className="card border border-warning-subtle  shadow h-100 p-2">
                        <Grafico2/>
                    </div>
                    
                </div>

            </div>
            {/* <!-- Color System --> 
            <div className="row">
                <div className="col-md-2 mb-4">
                    <div className="card bg-danger text-white shadow p-2">
                        <div className="card-body">Danger
                            <div className="text-white-50 small">#e74a3b</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2  mb-4">
                    <div className="card bg-dark text-white shadow p-2">
                        <div className="card-body">Danger
                            <div className="text-white-50 small">#e74a3b</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2  mb-4">
                    <div className="card bg-danger text-white shadow p-2">
                        <div className="card-body">Danger
                            <div className="text-white-50 small">#e74a3b</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2  mb-4">
                    <div className="card bg-dark text-white shadow p-2">
                        <div className="card-body">Danger
                            <div className="text-white-50 small">#e74a3b</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2  mb-4">
                    <div className="card bg-dark text-white shadow p-2">
                        <div className="card-body">Danger
                            <div className="text-white-50 small">#e74a3b</div>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </div>
        

    )
}

export default Dashborad