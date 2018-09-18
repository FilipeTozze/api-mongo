import React, {Component} from 'react';
import { Layout } from 'antd';

export default class HeaderP extends Component{

    render(){
        const { Header} = Layout;
        const propsStyle = this.props.stylePorps;
        return (
            <Header style={propsStyle}>
            </Header>
        )
    }
}
