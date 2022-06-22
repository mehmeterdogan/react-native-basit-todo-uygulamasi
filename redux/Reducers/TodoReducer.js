import { ActionConst } from "../Actions/ActionConst";

const initial_state = {
    list:[]
} 

export default function TodoReducer (state=initial_state,action){



    switch (action.type) {
        case ActionConst.add:

            return {...state,list:action.payload}
    
        default:
            return state;
    }

}