import React, { useState } from "react";
import TesteFilho from "./componentes/testeFilho/testeFilho";

export default function App(){

    let nome = "Igor"

    const[valorState, setValorState] = useState(5)

    }
        
    
    return(
        <div>
            <h1>ESTUDO SOBRE STATE</h1>
            <button onClick={()=> setValorState()}></button>
            <h2>Nome: {nome}</h2>
            <TesteFilho
            valorStateProps={valorState}
            setValorStateProps={setValorState}
            />
        </div>
    )
