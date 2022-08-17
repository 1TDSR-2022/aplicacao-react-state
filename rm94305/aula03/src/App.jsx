import React, {useState} from 'react'
import TesteFilho from './components/testeFilho/TesteFilho'

export default function App(){

    const[valorState, setValorState] = useState()
    
    //Objeto estiloButton
    const btnObjEstilo = {
        color:'#fff',
        fontsize:'2em',
        borderRadius: '3px',
        backgroundColor:'#0000ff'
    }

    return(
        <div>
            <h1 style={{color:'yellow', backgroundColor: '#000000', textAlign:'center'}}>ESTUDO SOBRE STATE</h1>
            <button style={btnObjEstilo} onClick={() =>setValorState("Milena")}>ALTERA-STATE</button>
            <h2>Valor do state: {valorState}</h2>
            <TesteFilho
                valorStateProps={valorState}
                setValorStateProps={setValorState}
                atributoEstiloProps={btnObjEstilo}

            />
        </div>
    )
}