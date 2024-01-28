import { createContext, useContext, useState } from 'react';

export const TruckContext = createContext();

let registerInfo ={hello:'test'}


export function TruckContextProvider({ children }) {
  return (
    <TruckContext.Provider value={{ registerInfo }}>
      {children}
    </TruckContext.Provider>
  );
}

export function useTruckContext(Info){
    return useContext(TruckContext)
}
