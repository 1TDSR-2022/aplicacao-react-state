import React, { useState } from 'react';

export default function App() {
    
    let nome="luis"
    
    const mudaNome = ()=>{
        nome = nome.toUpperCase()
        console.log(nome)
        return nome
    }
    return (
    <>
        <h1>ESTUDO SOBRE STATE</h1>

        <button onClick={() => mudaNome()}>ALTERAR NOME</button>
        <h2>Nome: {nome}</h2>
    </>
  )
}