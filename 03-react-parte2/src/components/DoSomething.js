import React from "react";

const DoSomething = ({ myCommand }) => {
	return (
		<div>
			{" "}
			<button onClick={myCommand}>
				Clique aqui para executar o comando!
			</button>{" "}
		</div>
	);
};
export default DoSomething;
