import React, { createContext } from "react";
import { useState } from "react";
import ComidaList from "../Components/ComidaList/ComidaList";

//creamos el contexto

export const ItemsContext = createContext();

//State

const itemsInStock = [
    ComidaList
];

//componente provider

export const ItemsProvider = ({children}) => {
    const [comida, setComida] = useState(itemsInStock);

    //retornar nuestro context con un .provider

    return(
        <ItemsContext.Provider value = {{comida, setComida}}>
            {children}
        </ItemsContext.Provider>
    )
};

