import React from 'react'
import praia from '../images/paisagem.jpg'

const Picture = () => {
  return (
    <div>
        <h1>Primeira Imagem</h1>
      <img
        src="/praia.jpg"
        alt="Descrição da primeira imagem"
        width="300"
        height="200"
      />
      <h1>Segunda Imagem</h1>
      <img
        src={praia}
        alt="Descrição da segunda imagem"
        width="400"
        height="300"
      />

    </div>
  )
}

export default Picture
