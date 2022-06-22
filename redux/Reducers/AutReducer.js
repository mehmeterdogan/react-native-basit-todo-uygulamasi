import {ActionConst} from "../Actions/ActionConst";

const initial_state = {
    isLogin:false
}


export default function AutReducer ( state=initial_state,action ) {

        switch (action.type) {

            case ActionConst.login:    
                return {...state, isLogin:action.payload}
        
            default:
                return state;
        }

}