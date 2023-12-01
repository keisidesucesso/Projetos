import React from 'react'
import Component03 from './Component03';

const Component01 = () => {
    const conteudo = "Conteúdo do Componente01";
  return (
    <div>
      <h1 className='meuh1'>Primeiro programa</h1>
      <h2>{conteudo}</h2>

      {/* Chame o Component03 dentro do Component01 */}
      <Component03/>
    </div>
  )
}

export default Component01
