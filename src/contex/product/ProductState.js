import React, {useReducer} from "react";
import {ProductContext} from "./productContext";
import { productReducer } from "./productReducer";

export const ProductState = ({children}) => {
    const initialState = {
        products: [{
            id: "1",
            title: "Хлеб"
        }]
    }
const [state, dispatch] = useReducer(productReducer, initialState)


    return <ProductContext.Provider value={{
        products: state.products
    }}>{children}</ProductContext.Provider>
}
