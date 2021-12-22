import actionTypes from '../actionTypes'

const initialState={
   data:["sanjai"]
}

const reducer=(state={...initialState},action)=>{

    switch(action.type){
        case actionTypes.ADD_TODO:
            return {
                data:[...state.data,action.todo]
            };
        case actionTypes.UPDATE_TODO:
            state.data[action.id]=action.todo;
            console.log(state)
            return {data:[...state.data]};
        case actionTypes.DELETE_TODO:
            state.data.splice(action.id,1);
            return {data:[...state.data]};
        default:
            return state;
    }
}

export default reducer;