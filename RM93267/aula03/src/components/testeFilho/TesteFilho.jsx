import React from 'react'

export default function TesteFilho(props){
    return(
        <>
           <h2>Valor State no filho</h2>
           <div>
                <p>Valor do state no filho: {props.valorStateProps}</p>
                <button style={props.atributoEstiloProps} onClick={() => props.setValorStateProps("José")}>
                    Altera state filho</button>
           </div>
        </>
    )
}