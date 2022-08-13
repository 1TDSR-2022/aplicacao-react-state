import React,{ useState } from 'react'

export default function App() {

    

    let nome = "alan"

    const mudaNome = () => {
        nome = nome.toUpperCase()
        return nome
    }

  return (
    <div>
        <h1>ESTUDO SOBRE STATE</h1>

        <button onClick={() => mudaNome()}>ALTERA-NOME</button>
        <h2>Nome : {nome}</h2>
    </div>
  )
}
