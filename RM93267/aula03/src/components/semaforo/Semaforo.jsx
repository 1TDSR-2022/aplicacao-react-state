import React from "react";
import './Semaforo.css'

export default function Semaforo(){
    var i=0

    var cores = {

        'g':()=>{  
            const g = window.document.getElementById('G')
            g.style.backgroundColor='rgb(6, 255, 6)'  
        },

        'y':()=>{
            const y =window.document.getElementById('Y')
            y.style.backgroundColor=' rgb(255, 255, 0)'  
        },

        'r':()=>{
            const r =window.document.getElementById('R')
            r.style.backgroundColor='rgb(255, 10, 10)'   
        },

        'n':()=>{
            const g = window.document.getElementById('G')
            g.style.backgroundColor='rgb(1, 59, 1)'
            
            const y =window.document.getElementById('Y')
            y.style.backgroundColor='rgb(48, 48, 1)'
    
            const r =window.document.getElementById('R')
            r.style.backgroundColor='rgb(76, 2, 2)'
        }
    }

    var mudaCor = ()=>{
        cores['n']()
        if(i===1){
            cores['g']()        
        }

        else if(i===2){
            cores['y']()   
        }

        else if(i===3){
            cores['r']()
        }

        else{
            i=0  
        }
        
        i++
    }

    return(
       
        <div>
          <div>
                <div className="ContainerSon G" id="G"></div>
                <div className="ContainerSon Y" id="Y"></div>
                <div className="ContainerSon R" id="R">/</div>
         </div>
            <input type="button" className="Button" value="Muda cor" onClick={mudaCor} />
        </div>
    )
}