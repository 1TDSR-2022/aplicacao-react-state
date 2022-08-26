import React, { useState } from 'react'
import TesteFilho from './components/testeFilho/TesteFilho'
import Home from './components/home/Home'
import Semaforo from './components/semaforo/Semaforo'
import Carros from './components/carros/Carros1';
import Carteirinha from './components/carteirinha/Carteirinha';

export default function App(){

    return(
        <>
          <Home/>
          <Semaforo/>
          <Carros/>
          <Carteirinha/>
        </>
    )
}