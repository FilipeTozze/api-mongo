import React, {Component} from 'react';
import { Link } from 'react-router';
import { Table, Spin} from 'antd';
import {connect} from 'react-redux';
import {loadClientId} from '../actions/ClientActions';

class List extends Component {

    findClientID = async (idClient) => {
        this.props.loadClientId(idClient);
        this.props.router.push(`/detail/${idClient}`)
    }

    render(){
        const { Column} = Table;
        let objDataTable = this.props.clients;
    
        return(
            <Spin size="large"  spinning={this.props.loadingClients}>
                <div>
                    <Table dataSource={objDataTable}  >
                        <Column
                                title="ID"
                                dataIndex="_id"
                                key="_id"
                                render={ text => (
                                    <Link to={`/detail/${text}`}>{text}</Link>
                            )} 
                        />
                        <Column
                            title="Nome"
                            dataIndex="name"
                            key="name"
                        />
                        <Column
                            title="E-mail"
                            dataIndex="email"
                            key="email"
                        />
                        <Column
                            title="Celular"
                            dataIndex="phone_number"
                            key="phone_number"
                        />
                    </Table>
                </div>
            </Spin>

        )
    }
}

const mapStateToProps = state => {
    return{
        clients : state.ClientReducer.clients,
        loadingClients : state.ClientReducer.loadingClients
    }
}
export default connect(mapStateToProps, {loadClientId})(List)