import React, {createContext, useContext, useReducer} from 'react';//Validado

export const DataLayerContext = createContext();//Validado

export const DataLayer = ({ initialState,reducer,children }) => (//Validado
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);