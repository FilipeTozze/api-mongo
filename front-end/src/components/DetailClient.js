import React, {Component} from 'react';
import { Button, Spin  } from 'antd';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import axios from 'axios';


class DetailClient extends Component {

    state = {
        loadingClients : true,
        objClient : []
    }
    loadClientId = async () => {
        let idClient = this.props.params.id;
        await axios.get(`http://localhost:3100/clients/${idClient}`)
        .then(result => {
            console.log(result);
            this.setState({loadingClients : false, objClient : result.data.client});
            return; 
        });
    }

    componentWillMount(){
       this.loadClientId();
    }
    
    render(){
        

       
     
        
        return (
            
            <div>
                    <Spin size="large"  spinning={this.state.loadingClients}></Spin>
                
              
                <div><Link to="/todos"><Button>Voltar</Button></Link></div>
                <br />
                <div className="detalhes-usuario">
                    <div className="detalhe-back-header">
                        
                    </div>
                    <div className="content-detalhe">
                        
                        <div className="header-content-user"></div>
                       
                        <div className="info-user-content">
                            <div>
                                <h3>
                                    Client: {this.state.objClient.name}
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    Info: 
                                </h3>
                                <div>
                                    <h4 className="ajust-info-client">Client ID: {this.state.objClient.client_id}</h4>
                                </div>
                                <div>
                                    <h4 className="ajust-info-client">Client Type: {this.state.objClient.client_type}</h4>
                                </div>
                                <div>
                                    <h4 className="ajust-info-client">Document ID: {this.state.objClient.document_id}</h4>
                                </div>
                                <div>
                                    <h4 className="ajust-info-client">E-mail: {this.state.objClient.email}</h4>
                                </div>
                               
                            </div>

                        </div>
                    </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        clients: state.ClientReducer.clients,
        loadingClients : state.ClientReducer.loadingClients
    }
}

export default connect(mapStateToProps, null)(DetailClient);