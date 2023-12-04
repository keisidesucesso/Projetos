import "./App.css";
import React, { useState } from "react";
import Picture from "./components/Picture";
import ManageData from "./components/ManageData";
import ManageList from "./components/ManageList";
import ConditionalRendering from "./components/ConditionalRendering";
import ShowUserData from "./components/ShowUserData";
import ShowUserData2 from "./components/ShowUserData2";
import ShowUserData3 from "./components/ShowUserData3";
import ContainerComponent from "./components/ContainerComponent";
import DoSomething from "./components/DoSomething";

function App() {
	const userAge = 25;
	const [course, setCourse] = useState("Engenharia de Software");
	const students = [
		{ id: 0, name: "Fulano de Tal", age: 21, matricula: "2023123456" },
		{ id: 1, name: "Mariazinha", age: 28, matricula: "2022098764" },
		{ id: 2, name: "Keisi", age: 25, matricula: "19101500" },
	];
	const student = {
		name: "Fulano de Tal",
		age: 21,
		registration: "2023123456",
	};
	const writeMessage = () => {
		const currentDate = new Date();
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
		};
		const currentDateTimeString = currentDate.toLocaleString("pt-br", options);
		console.log("Novo clique em: " + currentDateTimeString);
	};

	return (
		<div className="App">
			<header className="App-header">
				<Picture />
				<h1>Meu App React</h1>
				<ManageData />
				<ManageList />
				<ConditionalRendering />
				<ShowUserData name="Fulano de Tal" age={userAge} course={course} />

				<ShowUserData2
					name="Fulano de Tal"
					age={25}
					course="Engenharia de Software"
					university="UFSC"
					calouro={false}
				/>

				<ShowUserData2
					name="Ciclano da Silva"
					age={22}
					course="Ciência da Computação"
					university="UFRJ"
					calouro={true}
				/>

				<ShowUserData2
					name="Beltrano Oliveira"
					age={28}
					course="Administração"
					university="USP"
					calouro={false}
				/>

				<ShowUserData2
					name="Maria Souza"
					age={20}
					course="Medicina"
					university="UNESP"
					calouro={true}
				/>

				{students.map((student) => (
					<ShowUserData3
						key={student.id}
						name={student.name}
						age={student.age}
						matricula={student.matricula}
					/>
				))}

				<ContainerComponent
					name={student.name}
					age={student.age}
					registration={student.registration}
					numericProp={42}
				>
					<p>Este é um parágrafo dentro do ContainerComponent.</p>
				</ContainerComponent>
				<DoSomething myCommand={writeMessage} />
			</header>
		</div>
	);
}

export default App;
