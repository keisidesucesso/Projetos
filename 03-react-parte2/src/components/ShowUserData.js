import React from "react";

const ShowUserData = ({ name, age, course }) => {
	return (
		<div>
			<div>
				<h1>Dados do Usuário:</h1>
				<ul>
					<li>Nome: {name}</li>
					<li>Idade: {age}</li>
					<li>Curso: {course}</li>
				</ul>
			</div>
		</div>
	);
};

export default ShowUserData;
