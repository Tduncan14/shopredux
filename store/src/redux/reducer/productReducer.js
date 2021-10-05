import { ActionTypes } from "../constant/action_types"


const initalState = {
    products:[{
        id:1,
        title:"Dipesh",
        category:"programmer"
    }]

}




export const productReducer = (state,{type,payload}) => {

    
    switch (type){

        case ActionTypes.SELECTED_PRODUCTS:
               return products





    }







}