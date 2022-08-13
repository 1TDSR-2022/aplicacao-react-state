import React from "react";
import imgCarro from "../../../img/Carro.webp"
export default function Corpo(){
  
    const altImg = "Carro"
    const estiloP={
        color:"orange",
        fontSize:"1.5rem"
        
    }
    return(
       <div>
            <h2>Isso é um subtitulo do corpo!</h2>
            <img src={imgCarro} alt={altImg} />
            <p style={estiloP}>Paragrafo 1</p>
            <p style={estiloP}>Paragrafo 2</p>
            <p style={estiloP}>Paragrafo 3</p>
            <p style={estiloP}>Paragrafo 4</p>
       </div>
      

    )
}