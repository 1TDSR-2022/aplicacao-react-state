import React, { useState } from "react"
import TesteFilho from "./components/TesteFilho/TesteFilho"
import Exercicio1 from "./components/exercicio1/exercicio1"
export default function App() {
    //setValorState é uma função, e quando for monta, usa set(nome do useState que vc ta usando antes, como no exemplo usamos valorState, fica SetValorState, usando camel case)
    const [valorState, setValorState] = useState(5)
    
    //Objeto estiloButton
    const btnObjEstilo={
        color:'#fff',
        fontSize:'2em',
        borderRadius:'3px',
        backgroundColor:'#a000ff'
    }
    
    return (
    <div>
    <h1 style={{color:"red", backgroundColor:"black", textAlign:"center", justifyContent:"center"}}>ESTUDO SOBRE STATE</h1>
      <button onClick={()=>setValorState("MARIA")} style={btnObjEstilo}>ALTERA STATE</button>
      <h2>Valor do state: {valorState} </h2>
      <TesteFilho
        valorStateProps={valorState}
        setValorStateProps={setValorState}
        atributoEstiloProps={btnObjEstilo}
      /> 
      <Exercicio1/>
    </div>
  )
}