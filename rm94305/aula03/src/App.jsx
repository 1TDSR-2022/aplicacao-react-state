import React, {useState} from 'react'

export default function App(){

    let nome ="milena"

    const mudaNone =()=>{
        nome = nome.toUpperCase()
        console.loog(nome)
        return nome
    }

    return(
        <div>
            <h1>ESTUDO SOBRE STATE</h1>
            <button onClick={()=>mudaNone}>ALTERA-NOME</button>
            <h2>Nome: {nome}</h2>
        </div>
    )
}