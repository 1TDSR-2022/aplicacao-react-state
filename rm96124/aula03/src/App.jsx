import React, { useState } from "react"

export default function App() {
    //setValorState é uma função, e quando for monta, usa set(nome do useState que vc ta usando antes, como no exemplo usamos valorState, fica SetValorState, usando camel case)
    const [valorState, setValorState] = useState(5)
    
    
    return (
    <div>
      <h1>ESTUDO SOBRE STATE</h1>
      <button onClick={()=>setValorState(valorState+1)}>ALTERA STATE</button>
      <h2>Valor do state: {valorState} </h2>
    </div>
  )
}