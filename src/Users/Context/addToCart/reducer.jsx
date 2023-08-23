export const reducer = (state, action) =>{
    switch (action.type) {
        case "Add_To_Cart":
            return{...state, cart : [...state.cart, action.payload]}

              case "CLEAR_CART":
            return{...state, cart : []}

            case "DELETE_CART":
            return{...state, cart :  [...state.cart.filter((item) => item._id !==action.payload)]}
        
    
        default:
            return state
    }
}