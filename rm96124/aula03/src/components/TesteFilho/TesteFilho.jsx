import React from "react";

export default function TesteFilho(props){
    return(
        <div>
            <h2>VALOR DO STATE NO FILHO</h2>
            <div>
                <p>Valor do State: {props.valorStateProps}</p>
                <button style={props.atributoEstiloProps} onClick={()=>props.setValorStateProps("JOSÉ")} >ALTERA-STATE-FILHO</button>
            </div>
        </div>
        
    )
}