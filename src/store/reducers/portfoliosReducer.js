const initState = {
    portfolio: []
}

const portfoliosReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PORTFOLIO':
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log(action.err)
            return state;
        case 'UPDATE_PORTFOLIO':
            return state;
        case 'UPDATE_PROJECT_ERROR':
            console.log(action.err)
            return state;
        case 'DELETE_PORTFOLIO':
            return state;
        case 'DELETE_PORTFOLIO_ERROR':
            console.log(action.err)
            return state;
        default:
            return state;
    }
}

export default portfoliosReducer;