import "./EditProfile.css";

import { uploads } from "../../utils/config";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { profile, resetMessage, updateProfile } from "../../slices/userSlice";

import Message from "../../components/Message";

const EditProfile = () => {
	const dispatch = useDispatch();
	const { user, message, error, loading } = useSelector((state) => state.user);
	const { register, handleSubmit, reset, watch, getValues } = useForm();
	const [previewImage, setPreviewImage] = useState("");
	const previewImageWatch = watch("previewImage", "");

	useEffect(() => {
		let newImage = "";
		const image = getValues("previewImage");

		if (image) {
			newImage = image[0];
		}

		setPreviewImage(newImage);

		reset((previousState) => ({
			...previousState,
			profileImage: newImage,
		}));
	}, [previewImageWatch]);

	useEffect(() => {
		dispatch(profile());
	}, [dispatch]);

	useEffect(() => {
		if (user) {
			reset({
				name: user.name,
				email: user.email,
				bio: user.bio,
				password: user.password,
				profileImage: user.profileImage,
			});
		}
	}, [user]);

	const onSubmit = async (data) => {
		const formData = new FormData();

		const userFormData = Object.keys(data).forEach((key) =>
			formData.append(key, data[key])
		);

		formData.append("user", userFormData);

		await dispatch(updateProfile(formData));

		setTimeout(() => {
			dispatch(resetMessage());
		}, 2000);
	};

	return (
		<div id="edit-profile">
			<h2>Edite seus dados</h2>
			<p className="subtitle">
				Adicione uma imagem de perfil e conte mais sobre você...
			</p>
			{(user.profileImage || previewImage) && (
				<img
					className="profile-image"
					src={
						previewImage
							? URL.createObjectURL(previewImage)
							: `${uploads}/users/${user.profileImage}`
					}
				/>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("name")} type="text" placeholder="Nome" />
				<input
					{...register("email")}
					type="email"
					placeholder="E-mail"
					disabled
				/>
				<label>
					<span>Imagem do Perfil:</span>
					<input {...register("previewImage")} type="file" />
				</label>
				<label>
					<span>Bio:</span>
					<input
						{...register("bio")}
						type="text"
						placeholder="Descrição do perfil"
					/>
				</label>
				<label>
					<span>Deseja alterar sua senha?</span>
					<input
						{...register("password")}
						type="password"
						placeholder="Digite sua nova senha"
					/>
				</label>
				{!loading && <input type="submit" value="Atualizar" />}
				{loading && <input type="submit" value="Aguarde..." disabled />}
				{error && <Message msg={error} type="error" />}
				{message && <Message msg={message} type="success" />}
			</form>
		</div>
	);
};

export default EditProfile;
