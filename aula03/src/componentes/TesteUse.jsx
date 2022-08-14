import React from "react";

export default function TesteUse(prosp){
    return(
        <div>
            <h2>VALOR DO STATE NO FILHO</h2>
            <div>
                <p>Valor de State filho:
                     {props.valorStateProps}</p>
                <button onClick={()=> props.setValorStateProps()}
                >ALTERA STATE FILHO</button>
            </div>
        </div>
    )
}