import React, {useState} from "react";

export default function App(){

        let nome = "Igor"

        const mudaNome = ()=>{
            nome = mudaNome.toUpperCase()
            console.log(nome)
            return nome
        }

    return(
        <div>
            <h1>ESTUDO SOBRE STATE</h1>

            <button onClick={()=>mudaNome()}>ALTERAR-NOME</button>
            <h2>Nome: {nome}</h2>
        </div>
    )
}