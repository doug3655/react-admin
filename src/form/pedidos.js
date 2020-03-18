import React, {Component} from 'react'
import axios from "axios";
import '../plugins/style.css'

export default class formValidation extends Component {
    state={
        valor:""
    }
    buscar(){
        const api = axios.create({baseURL: "http://localhost:8080/api/ecommerce"})
        api.get("/pedidos").then((res)=>this.setState({valor:res.data.body[0].idPedido}))
        let guarda=[]
           guarda.push(
                <div className="col-md-12 col-sm-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>Pedido nº: {this.state.valor}</h2>
                                <ul className="nav navbar-right panel_toolbox">
                                    <li>
                                        <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                    </li>
                                </ul>
                            <div className="clearfix"/>
                        </div>
                        <div className="x_content">
                            <form className="form-horizontal form-label-left" noValidate /*onSubmit={this.salvar}*/>
                                <span className="section">Dados do pedido:</span>
                                <div className="item form-group">
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="nPedido">Numero do Pedido:</label>
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="nPedido">nrpedido</label>
                                </div>
                                <div className="item form-group">
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="idCliente">Codigo do Cliente:</label>
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="idCliente">idCliente</label>
                                </div>
                                <div className="ln_solid"/>
                                <div className="form-group ">
                                    <div className="col-md-6 offset-md-3 mt-3">
                                        <button id="send" type="submit" className="btn btn-success">Aprovar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
            console.log(guarda)
           return guarda
        }
    render() {
        return (
            <div>
                <div
                    className="right_col"
                    role="main"
                    style={{
                    minHeight: 944
                }}>
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Pagina de aprovação de Pedidos</h3>
                            </div>
                        </div>
                        <div className="clearfix"/>
                        <div className="row">
                            {/*Inicio do form*/}
                            <>
                            {this.buscar()}
                            </>
                            {/*Fim do form*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}