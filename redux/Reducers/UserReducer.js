import { ActionConst } from "../Actions/ActionConst";

const initial_state = {
    fullName:"Mehmet Erdoğan",
    age:'27',
    job:"FullStack Developer"
}


export default function UserReducer( state=initial_state,action ){

    switch (action.type) {
        case ActionConst.update:
            
                return {...state,fullName:action.fullName,age:action.age,job:action.job}
    
        default:
           return state;
    }
}