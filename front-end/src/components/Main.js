import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {connect} from 'react-redux';
import logo from '../img/logo.png';
import HeaderP from './HeaderP';
import { Link } from 'react-router';
import {loadClients} from '../actions/ClientActions'

class Main extends Component {
    componentDidMount(){
        this.props.loadClients();
    }
   
    render(){
        const { Content, Sider } = Layout;
        return (
            <Layout  className="layout">
                <Sider 
                style={{background: '#FFF'}}
                breakpoint="lg"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo">
                        <Link to="/"><img alt="" src={logo} /></Link>
                    </div>
                    <Menu theme="light" mode="inline" >
                        <Menu.Item key="1">
                            <Link to="client">
                                <Icon type="scan" />
                                <span className="nav-text">Cliente</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="swagger">
                                <Icon type="scan" />
                                <span className="nav-text">Swagger</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                    
                </Sider>
                <Layout>
                    <HeaderP  stylePorps={{ background: '#000', padding: 0 ,  position: 'fixed', zIndex: 100, width: '100%' }}  />
                    <Content style={{ margin: '80px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return{
        
    }
}

export default connect(mapStateToProps,{loadClients})(Main)