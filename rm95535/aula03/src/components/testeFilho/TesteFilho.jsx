import React from "react";

export default function TesteFilho(props) {
    return (
        <div>
            <h2>VALOR DO STATE NO FILHO</h2>
            <div>
                <p>Valor do state: {props.ValorStateProps}</p>
                <button style={props.atributoEstilo}onClick={() => props.setValorStateProps("José")}>ALTERA-STATE-FILHO</button>
            </div>
        </div>
    )


}