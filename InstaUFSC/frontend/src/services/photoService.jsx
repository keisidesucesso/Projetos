import { api, requestConfig } from "../utils/config";

//publicação de fotos
const publishPhoto = async (data, token) => {
	const config = requestConfig("POST", data, token, true); //true porque há imagem envolvida

	try {
		const res = await fetch(api + "/photos", config) //acessa a API
			.then((res) => res.json()) //transforma os dados recebidos para JSON
			.catch((err) => err); //pega eventual erro da requisição

		return res;
	} catch (error) {
		console.log(error);
	}
};

const getUserPhotos = async (id, token) => {
	const config = requestConfig("GET", null, token);

	try {
		const res = await fetch(api + "/photos/user/" + id, config).then((res) =>
			res.json()
		);

		return res;
	} catch (error) {
		console.log(error);
	}
};

const deletePhoto = async (id, token) => {
	const config = requestConfig("DELETE", null, token);

	try {
		const res = await fetch(api + "/photos/" + id, config)
			.then((res) => res.json())
			.catch((err) => err);

		return res;
	} catch (error) {
		console.log(error);
	}
};

//atualização de foto
const updatePhoto = async (data, id, token) => {
	const config = requestConfig("PATCH", data, token);

	try {
		const res = await fetch(api + "/photos/" + id, config)
			.then((res) => res.json())
			.catch((err) => err);

		return res;
	} catch (error) {
		console.log(error);
	}
};

const getPhoto = async (id, token) => {
	const config = requestConfig("GET", null, token);

	try {
		const res = await fetch(api + "/photos/" + id, config)
			.then((res) => res.json())
			.catch((err) => err);

		return res;
	} catch (error) {
		console.log(error);
	}
};

const like = async (id, token) => {
	const config = requestConfig("PATCH", null, token);

	try {
		const res = await fetch(api + "/photos/like/" + id, config)
			.then((res) => res.json())
			.catch((err) => err);

		return res;
	} catch (error) {
		console.log(error);
	}
};
const unlike = async (id, token) => {
	const config = requestConfig("PATCH", null, token);
	try {
		const res = await fetch(api + "/photos/unlike/" + id, config);
		return res.json();
	} catch (error) {
		console.log(error);
		return error;
	}
};

//atribuição de comentários
const comment = async (data, id, token) => {
	const config = requestConfig("PATCH", data, token);

	try {
		const res = await fetch(api + "/photos/comment/" + id, config).then((res) =>
			res.json()
		);
		return res;
	} catch (error) {
		console.log(error);
	}
};

const getPhotos = async (token) => {
	const config = requestConfig("GET", null, token);

	try {
		const res = await fetch(api + "/photos", config)
			.then((res) => res.json())
			.catch((err) => err);

		return res;
	} catch (error) {
		console.log(error);
	}
};

const searchPhotos = async (query, token) => {
	const config = requestConfig("GET", null, token);

	try {
		const res = await fetch(api + "/photos/search?q=" + query, config)
			.then((res) => res.json())
			.catch((err) => err);

		return res;
	} catch (error) {
		console.log(error);
	}
};

const photoService = {
	publishPhoto,
	getUserPhotos,
	deletePhoto,
	updatePhoto,
	getPhoto,
	like,
	comment,
	getPhotos,
	searchPhotos,
	unlike,
};

export default photoService;
