import "./Auth.css";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { register, reset } from "../../slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

import Message from "../../components/Message";

const Register = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const dispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.auth);

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(user);

		dispatch(register(user));
	};

	useEffect(() => {
		dispatch(reset());
	}, [dispatch]);

	return (
		<div id="register">
			<h2>InstaUFSC</h2>
			<p className="subtitle">
				Cadastre-se para ver as fotos dos seus contatos.
			</p>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Nome"
					name="name"
					onChange={handleChange}
					value={user.name}
				/>
				<input
					type="email"
					placeholder="E-mail"
					name="email"
					onChange={handleChange}
					value={user.email}
				/>
				<input
					type="password"
					placeholder="Senha"
					name="password"
					onChange={handleChange}
					value={user.password}
				/>
				<input
					type="password"
					placeholder="Confirme a senha"
					name="confirmPassword"
					onChange={handleChange}
					value={user.confirmPassword}
				/>
				{!loading && <input type="submit" value="Cadastrar" />}
				{loading && <input type="submit" value="Aguarde..." disabled />}
				{error && <Message msg={error} type="error" />}
				<p>
					Já possui cadastro? <NavLink to="/login">Clique aqui</NavLink>
				</p>
			</form>
		</div>
	);
};

export default Register;
