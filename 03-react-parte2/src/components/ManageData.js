import React, { useState } from "react";

const ManageData = () => {
	// Variável gerenciada pelo hook useState
	const [number, setNumber] = useState(10);

	return (
		<div>
			<h2>Variável Gerenciada pelo Hook useState:</h2>
			<p>{number}</p>
			<button className="MeuBotao" onClick={() => setNumber(number + 1)}>
				Mudar o valor via useState!
			</button>
			{console.log("Variável Gerenciada pelo Hook useState:", number)}
		</div>
	);
};

export default ManageData;
