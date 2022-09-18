import React from 'react';
import Argo from '../img/argo.jpg'
import './Corpo.css'

export default function Corpo() {
     return(
        <>
            
            <h2> ARGO </h2>
            <center><figure> 
                <img src={Argo} alt="Carros" width = "300px" />
                <figcaption>
                    <p>fonte: QuatroRodas</p>
                </figcaption>
            </figure>
            </center>
            
            <p> Marca: FIAT </p>
            <p> A Fiat esta cada dia melhor, com o Argo batendo HB20 e tambem HB20 no meio da pandemia</p>
            <p> O Argo acaba perdendo para Strada, na qual tambem é FIAT.</p>
        </>

     ) 
}