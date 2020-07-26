import * as Types from "./../consts/ActionTypes";

var initialState = {};

const itemEditting = (state = initialState, action)=>{
    switch(action.type)
    {
        case Types.GetDetailProduct:
            return action.product
        default: return state;
    }
}

export default itemEditting ;