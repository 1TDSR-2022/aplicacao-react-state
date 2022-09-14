import React, { useState } from 'react';
import TesteFilho from './components/TesteFilho/TesteFilho';


export default function App() {
    
    const [valorState, setValorState] = useState(5)
    
    const btnObjEstilo = {
        color: '#00ffff',
        fontSize:'2em',
        borderRadius:'3px',
        backgroundColor: '#272784'
    }

    return (
    <>
        <h1 style={{color:'aqua', backgroundColor: 'blue', textAlign: 'center'}}>ESTUDO SOBRE STATE</h1>

        <button style={btnObjEstilo} onClick={() => setValorState
        ("LUIS")}>ALTERAR NOME</button>
        <h2>Valor do state: {valorState} </h2>
        <TesteFilho
            valorStateProps={valorState}
            setValorStateProps={setValorState}
            atributoEstiloProps={btnObjEstilo}
        />
    </>
  )
}