import axios from 'axios';

export const loadClients = async () => {
    const req = await axios.get('http://localhost:3100/clients');
    let objReturnAux = req.data.clients;
    let objReturn = {};
    objReturn.clients = objReturnAux.map( function(item, index){
        item.key = item._id;
        return item;
    });
    objReturn.loadingClients = false;              
    return {
        type: 'LOADING_CLIENTS',
        payload : objReturn
    }
}

export const loadClientId = async (idClient) => {
    const req = await axios.get(`http://localhost:3100/clients/${idClient}`);
    let objReturn = {};
    console.log("loadClientId", req);
    //objReturn.loadingClients = false;              
    return {
        type: 'LOADING_CLIENT_ID',
        payload : objReturn
    }
}

export const modificaListagem = (param) => {
    return {
        type: 'MODIFICA_LISTAGEM',
        payload: param
    }
}

export const retornaListagem = () => {
    return {
        type: 'RETORNA_LISTAGEM',
        payload: null
    }
}

export const alteraStatusPessoa = (param) => {
    return {
        type: 'ALTERA_STATUS_PESSOA',
        payload: param
    }
}