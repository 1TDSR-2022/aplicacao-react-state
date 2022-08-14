import React, {useState}from 'react';
import Header from './componentes/Ex01/Header'
import Corpo from './componentes/Ex01/Corpo'
import Footer from './componentes/Ex01/Footer'
import TesteUse from './componentes/TesteUse';

export default function Ex01(){

    const [valorState, setValorState] = useState()
    return(
        <div>
            <Header/>
            <Corpo/>
            <Footer/>
            <TesteUse
                valorStateProps={valorState}
                setValorStateProps={setValorState}
            />

            <h1>AGORA ESTUDO SOBRE STATE E PROPS</h1>

            <button onClick={()=> setValorState("Everton")}>ALTERAR VALOR</button>
            <h2>Valor do state: {valorState}</h2>
        </div>
    )
}
