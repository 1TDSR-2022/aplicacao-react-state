import React, { useState } from 'react'
import TesteFilho from './components/testeFilho/TesteFilho'

export default function App(){

    const [valorState, setValorState] = useState(5)

    //Obj estiloButton
    const btnObjEstilo ={
        color:'#fff',
        fontSize:'2em',
        borderRadius:'3px',
        backgroundColor:'blue'
    }

    return(
        <>
            <h1 style={{color: 'green', textAlign: 'center', backgroundColor: 'blue'}}>ESTUDO SOBRE STATE</h1>

            <button style={btnObjEstilo}onClick={() => setValorState(valorState + 10)}>Soma State</button>
            <h2>Valor do state: {valorState}</h2>
           <TesteFilho
                valorStateProps={valorState}
                setValorStateProps={setValorState}
                atributoEstiloProps={btnObjEstilo}
           />
        </>
    )
}