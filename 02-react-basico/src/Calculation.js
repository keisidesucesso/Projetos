import React from 'react'

const Calculation = () => {
    const numero1 = 10;
  const numero2 = 5;
  const handleMyClick = (operacao) => {
    if (operacao === 'soma') {
      console.log(`A soma de ${numero1} e ${numero2} é: ${numero1 + numero2}`);
    } else if (operacao === 'subtracao') {
      console.log(`A subtração de ${numero1} por ${numero2} é: ${numero1 - numero2}`);
    }
  };
  const printEvenOdd = (numero) => {
    if (numero % 2 === 0) {
      return <h1>{numero} é um número PAR.</h1>;
    } else {
      return <h1>{numero} é um número ÍMPAR.</h1>;
    }
  };
  return (
    <div>
      <h1>Calculation Component</h1>

        {/* Imprimir valores e mensagem */}
        <p>Valor 1: {numero1}</p>
        <p>Valor 2: {numero2}</p>
         <p>Mensagem: Uma mensagem explicativa.</p>

         {/* Botões para somar e subtrair */}
        <button onClick={() => handleMyClick('soma')}>Somar!</button>
        <button onClick={() => {
        console.log('Subtraindo usando uma função anônima!');
        handleMyClick('subtracao');
        }}>Subtrair!</button>
        

        {/* Chame a função printEvenOdd duas vezes com números diferentes */}
        {printEvenOdd(8)}
        {printEvenOdd(13)}
    </div>
  )
}

export default Calculation
