import React,{ useState } from 'react'

export default function App() {

    const [valorState, setValorState] = useState(5)

  return (
    <div>
        <h1>ESTUDO SOBRE STATE</h1>

        <button onClick={() => setValorState("MARIA")}>ALTERA-NOME</button>
        <h2>Valor do state : {valorState}</h2>
    </div>
  )
}
