const INITIAL_STATE = {
    clients: [],
    loadingClients: true
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){        
        
        case 'LOADING_CLIENTS':
            return { 
                    ...state, 
                    clients: action.payload.clients,
                    loadingClients: action.payload.loadingClients
                };
        case 'MODIFICA_LISTAGEM':
            return { ...state, clients: action.payload};   
        case 'ALTERA_STATUS_PESSOA':
            return { 
                    ...state, 
                    clients: action.payload,
                };    
        default:
            return state;    
    }
    
}