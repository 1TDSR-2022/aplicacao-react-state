import React from "react";

export default function TesteFilho() {
    return(
        <div>
            <h2>VALOR DO STATE NO FILHO</h2>
            <div>
                <p>Valor de state: </p>
                <button onClick={()=> props.setValorStateProps()}>ALTERAR STATE FILHO</button>
            </div>
        </div>
    )
}