import React, { createContext, useState } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {

    const [time, setTime] = useState(10);
    const [operatorCount, setOperatorCount] = useState(1);
    const [selectedOperator, setSelectedOperator] = useState('+');
    const [digitNumber, setDigitNumber] = useState(1);

    const globalState = {
        time,
        setTime,
        operatorCount,
        setOperatorCount,
        selectedOperator,
        setSelectedOperator,
        digitNumber,
        setDigitNumber
    }

    return (
        <GlobalStateContext.Provider value={globalState}>
            {children}
        </GlobalStateContext.Provider>
    )
}


export default GlobalStateContext;

