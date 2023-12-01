import React from 'react'

const Component02 = () => {
    const textoReact = "O HTML do React";
    const estruturaDados = {
        campo1: 'Valor do Campo 1',
        campo2: 'Valor do Campo 2'
     };
  return (
    <div>
       <h2>{textoReact}</h2>
        <p>A soma de 2 + 2 é: {2 + 2}</p>
        <h3>{estruturaDados.campo1}</h3>
        <h3>{estruturaDados.campo2}</h3>
    </div>
  )
}

export default Component02
