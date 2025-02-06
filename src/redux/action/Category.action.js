import axios from 'axios';
import { ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY } from '../ActionType';

export const addcategory = (data) => async (dispatch) => {

    try {
        await axios.post("http://localhost:8000/category", data)
            .then((response) => {
                dispatch({ type: ADD_CATEGORY, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
}

export const deletecategory=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`http://localhost:8000/category/${id}`)
        .then(()=>{
            dispatch({type:DELETE_CATEGORY,payload:id})
        })
        .catch((error)=>{
            console.log(error);      
        })
    } catch (error) {
        
    }
}

export const editecategory = (data) => async (dispatch) => {
    try {
        const response = await axios.put("http://localhost:8000/category/"+data.id, data);

        dispatch({ type: EDIT_CATEGORY, payload: response.data });

    } catch (error) {
        console.error("Error updating category:", error.response?.data || error.message);
    }
};