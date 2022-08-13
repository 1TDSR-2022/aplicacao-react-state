import React, { useState } from 'react'
import TesteFilho from './components/testeFilho/TesteFilho'

export default function App() {

    const[valorState, setValorState] = useState(5)

	//Objetivo estiloButton
	const btnObjEstilo = {
		color:'#fff',
		fontSize: '2em',
		borderRadius: '3px',
		backgroundColor: '#0000ff'
	}


    return (
        <div>
            <h1 style={{ color: 'yellow', backgroundColor: '#00000', textAlign: 'center'}}>ESTUDO SOBRE STATE</h1>
            <button style={btnObjEstilo}onClick={() => setValorState("Davi")}>ALTERA-NOME</button>

            <h2>Valor State : {valorState}</h2>
			<TesteFilho
				valorStateProps={valorState}
				setValorStateProps={setValorState}
				atributoEstiloProps={btnObjEstilo}
			/>
        </div>
    )
}