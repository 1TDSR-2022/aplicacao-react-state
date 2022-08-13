import React, { useState } from 'react'

export default function App() {

  const [valorState, setValorState] = useState("Guilherme")

    return (
        <div>
           <h1>Estudo sobre STATE</h1>
           <button onClick={() => setValorState("Maria")}ALTERAR-STATE></button>
           <h2>valor do state : {valorState}</h2>

        </div>

  )
}