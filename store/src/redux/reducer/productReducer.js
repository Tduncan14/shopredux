
import { ActionTypes } from "../constant/action_types"


const initalState = {
    products:[]

}




 const productReducer = (state = initalState,{type,payload}) => {

    
    switch (type){

        case ActionTypes.SET_PRODUCTS:
               return {...state, products :payload}

        default: return state





    }







}


export default productReducer