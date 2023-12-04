import React, { useState } from "react";

const ManageList = () => {
	const [students, setStudents] = useState([
		{ id: 0, registration: 2023123456, name: "Fulano de Tal", age: 21 },
		{ id: 1, registration: 2022098764, name: "Mariazinha", age: 28 },
		{ id: 2, registration: 2018735620, name: "Juquinha", age: 23 },
		{ id: 3, registration: 2021539820, name: "Fernanda", age: 20 },
		{ id: 4, registration: 2020826831, name: "Laura", age: 22 },
	]);

	const deleteRandomStudent = () => {
		if (students.length === 0) {
			console.log("Não há estudantes para remover.");
			return;
		}
		const randomIndex = Math.floor(Math.random() * students.length);

		// (antes da remoção)
		console.log("Estado anterior:", students);
		const updatedStudents = students.filter(
			(student, index) => index !== randomIndex
		);
		setStudents(updatedStudents);
	};

	return (
		<div>
			<h1>Gerenciamento de Listas</h1>

			<h2>Lista de Estudantes</h2>
			<ul className="MinhaLista">
				{students.map((student) => (
					<li key={student.id}>{`${student.name} - ${student.age} anos`}</li>
				))}
			</ul>

			<button onClick={deleteRandomStudent}>Remover Estudante Aleatório</button>
		</div>
	);
};

export default ManageList;
