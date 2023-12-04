// src/components/ContainerComponent.js
import React from 'react';

const ContainerComponent = ({ name, age, registration, children, numericProp }) => {
  // Imprima o valor de children e numericProp para avaliação
  console.log('Valor de children:', children);
  console.log('Valor de numericProp:', numericProp);

  return (
    <div>
      <h1>Dados do Estudante:</h1>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Matrícula: {registration}</li>
      </ul>
      {children}
      <p>Valor numérico: {numericProp}</p>
    </div>
  );
};

export default ContainerComponent;
