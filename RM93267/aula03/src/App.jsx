import React, { useState } from 'react'

export default function App(){

    const [valorState, setValorState] = useState(5)



    return(
        <>
            <h1>ESTUDO SOBRE STATE</h1>

            <button onClick={() => setValorState(valorState + 10)}>Soma State</button>
            <h2>Valor do state: {valorState}</h2>
        </>
    )
}