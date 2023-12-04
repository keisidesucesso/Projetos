import "./Form.css";
import React, { useState } from "react";

const Form = ({ initialBio, initialRole }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [bio, setBio] = useState(initialBio || ""); // Valor inicial para bio
	const [role, setRole] = useState(initialRole || "user");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Envio de formulário");
		console.log("Nome:", name);
		console.log("Email:", email);
		console.log("Bio:", bio);

		setName("");
		setEmail("");
		setBio("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Nome:
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Email:
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Bio:
					<textarea value={bio} onChange={(e) => setBio(e.target.value)} />
				</label>
				<br />
				<label>
					<span>Função no sistema:</span>{" "}
					<select name="role" onChange={(e) => setRole(e.target.value)}>
						<option value="user">Usuário</option>{" "}
						<option value="editor">Editor</option>{" "}
						<option value="admin">Administrador</option>{" "}
					</select>{" "}
				</label>
				<br />
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
};
export default Form;
