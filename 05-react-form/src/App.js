import "./App.css";
import Form from "./Components/Form";

function App() {
	const initialBio = "Minha biografia inicial"; // Valor inicial para bio
	const initialRole = "editor";
	return (
		<div className="App">
			<header className="App-header">
				<h1>Formulário</h1>
				<Form initialBio={initialBio} initialRole={initialRole} />{" "}
			</header>
		</div>
	);
}

export default App;
