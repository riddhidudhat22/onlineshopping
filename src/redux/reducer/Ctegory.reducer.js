import { ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY } from "../ActionType";

const initialstate = {
    category: []
}

export const CategoryReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_CATEGORY:

            return {
                category: state.category.concat(action.payload)
            }
        case DELETE_CATEGORY:

            return {
                category: state.category.filter((v) => v.id !== action.payload)
            }
        case EDIT_CATEGORY:
            return {
                category: state.category.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {  
                        return v

                    }
                   
                })
            }
        default:
            return state
    }
}