const redux = require('redux');
const createStore = redux.createStore;
//console.log("Learn Redux");

const BUY_CAKE = 'BUY_CAKE'


//action creator
function buyCake(){
    return{
    type: BUY_CAKE,
    info: 'First Redux Action' 
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return  state
    }

  
}

const store = createStore(reducer);
console.log('Initial state', store.getState());
store.subscribe(()=> {console.log('Update State', store.getState())})
store.dispatch(buyCake());