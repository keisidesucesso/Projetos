import React, { useState } from "react";

const ConditionalRendering = () => {
	const [place, setPlace] = useState("UFSC");
	const [teste, setTeste] = useState(true);

	return (
		<div>
			<h1>Isso será Exibido?</h1>
			{teste && <p>Se a variável de teste for true, sim!</p>}

			<button onClick={() => setTeste(!teste)}>Alternar Valor Lógico</button>

			{!teste && <p>Agora a variável de teste é false!</p>}

			{place === "UFSC" ? (
				<p>Se o lugar for UFSC, sim!</p>
			) : (
				<p>O lugar não é UFSC.</p>
			)}

			<button onClick={() => setPlace("Outro Lugar")}>
				Mudar para Outro Lugar
			</button>

			<button onClick={() => setPlace("UFSC")}>Voltar para UFSC</button>
		</div>
	);
};

export default ConditionalRendering;
