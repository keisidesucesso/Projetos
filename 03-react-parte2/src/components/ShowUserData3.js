import React from 'react'

const ShowUserData3 = ({ name, age, matricula }) => {
    return (
      <div>
        <h1>Dados do Estudante:</h1>
        <ul>
          <li>Nome: {name}</li>
          <li>Idade: {age}</li>
          <li>Matrícula: {matricula}</li>
        </ul>
      </div>
    )
  }

export default ShowUserData3
