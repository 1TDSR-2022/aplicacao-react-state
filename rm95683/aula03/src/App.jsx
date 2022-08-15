import React, { useState } from 'react'
import TesteFilho from './components/testeFilho/testeFilho'

export default function App() {

    const [valorState, setValorState] = useState()

    //Objeto estilo button
    const btnObjEstilo = {
        color:'#fff',
        fontSize:'2em',
        borderRadius:'3px',
        backgroundColor:'#0000ff'
    }

    return (
        <div>
            <h1 style={(color: 'blue', backgroundColor: '#000000', textAlign: 'center')}>ESTUDO SOBRE STATE</h1>

            <button onClick={() => setValorState("MARIA")}>ALTERA-STATE</button>
            <h2>Valor do state : {valorState}</h2>
            <TesteFilho
                valorStateProps={valorState}
                setValorStateProps={setValorState}
            />
        </div>
    )
}
