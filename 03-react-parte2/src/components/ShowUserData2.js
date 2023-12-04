import React from 'react'

const ShowUserData2 = ({ name, age, course, university, calouro }) => {
    return (
      <div>
        <h1>Dados do Usuário:</h1>
        <ul>
          <li>Nome: {name}</li>
          <li>Idade: {age}</li>
          <li>Curso: {course}</li>
          <li>Universidade: {university}</li>
          <li>Calouro(a): {calouro ? 'Sim' : 'Não'}</li>
        </ul>
      </div>
    );
  }

export default ShowUserData2
