import React, {Component} from 'react';
import List from './List';
import {connect} from 'react-redux';
import {loadClients} from '../actions/ClientActions'

class Client extends Component {

    render(){
        return (
            <div>                
                <List objData={this.props.clients}/>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        clients : state.ClientReducer.clients,
        loadingClients : state.ClientReducer.loadingClients
    }
)

export default connect(mapStateToProps, {loadClients})(Client)