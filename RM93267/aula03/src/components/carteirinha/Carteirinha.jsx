import React from 'react'
import eu from './img/eu.png'
import foto from './img/icon-estilo-brasileiro.jpg'
import fotoF from './img/icon-feliz.jpg'
import fotoP from './img/icon-perfil.png'
import './style.css'

export default function Carteirinha(){
    return(
        <>
            <section id='um'>
                <img src={eu} alt="foto minha" width="20%" />
                <h3>Lucas de Morais Nascimento</h3>
                <h3>RM93267</h3>
                <h3>1TDSR - ADS</h3>
                
            </section>

            <section id='dois'>
                <img src={foto} alt="foto de perfil" width="23%" />
                <h3>Zeca Santana Araujo</h3>
                <h3>RM95347</h3>
                <h3>1TDSR - ADS</h3>
            </section>

            <section id='tres'>
                <img src={fotoF} alt="foto de perfil" width="20%" />
                <h3>Charles Albert Darwin</h3>
                <h3>RM92674</h3>
                <h3>1TDSR - ADS</h3>
            </section>

            <section id='cadastro'>
                <img src={fotoP} alt="icon perfil" width="20%"/>
                <form>
                   
                    <input type="text" name='nome' id='nome' value='nome'></input>
                    <br />
                    <input type="text" name='rm' id='rm' value='rm'/>
                    <br />
                    <input type="text" name='curso' id='curso' value='curso'/>
                    <br />
                    <input type="text" name='turma' id='turma' value='turma'/>
                </form>
            </section>
        </>
    )
}