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
      default:
          return state;
    }
}

export default reducer;