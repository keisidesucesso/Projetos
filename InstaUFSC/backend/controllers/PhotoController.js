const Photo = require("../models/Photo");
const User = require("../models/User");

const mongoose = require("mongoose");

const insertPhoto = async (req, res) => {
	const { title } = req.body;
	const image = req.file.filename;
	const reqUser = req.user;
	const user = await User.findById(reqUser._id);
	const newPhoto = await Photo.create({
		image,
		title,
		userId: user._id,
		userName: user.name,
	});

	if (!newPhoto) {
		res.status(422).json({
			errors: ["Houve um problema, por favor tente novamente mais tarde."],
		});
		return;
	}

	res.status(201).json(newPhoto);
};

const deletePhoto = async (req, res) => {
	const { id } = req.params;

	const reqUser = req.user;

	try {
		const photo = await Photo.findById(new mongoose.Types.ObjectId(id));

		if (!photo) {
			res.status(404).json({ errors: ["Foto não encontrada."] });
			return;
		}

		if (!photo.userId.equals(reqUser._id)) {
			res
				.status(422)
				.json({ errors: ["Ocorreu um erro, tente novamente mais tarde."] });
			return;
		}

		await Photo.findByIdAndDelete(photo._id);

		res
			.status(200)
			.json({ id: photo._id, message: "Foto excluída com sucesso." });
	} catch (error) {
		res.status(404).json({ errors: ["Foto não encontrada."] });
	}
};

const getAllPhotos = async (req, res) => {
	const photos = await Photo.find({})
		.sort([["createdAt", -1]])
		.exec();

	res.status(200).json(photos);
};

const getUserPhotos = async (req, res) => {
	const { id } = req.params;

	const photos = await Photo.find({ userId: id })
		.sort([["createdAt", -1]])
		.exec();

	res.status(200).json(photos);
};

const getPhotoById = async (req, res) => {
	const { id } = req.params;

	try {
		const photo = await Photo.findById(new mongoose.Types.ObjectId(id));

		if (!photo) {
			res.status(404).json({ errors: ["A foto não foi encontrada."] });
			return;
		}

		res.status(200).json(photo);
	} catch (error) {
		res.status(404).json({ errors: ["A foto não foi encontrada."] });
	}
};

const updatePhoto = async (req, res) => {
	const { id } = req.params;

	try {
		const { title } = req.body;
		const reqUser = req.user;

		const photo = await Photo.findById(id);

		if (!photo) {
			res.status(404).json({ errors: ["Foto não encontrada."] });
			return;
		}

		if (!photo.userId.equals(reqUser._id)) {
			res
				.status(422)
				.json({ errors: ["Ocorreu um erro, tente novamente mais tarde."] });
			return;
		}

		if (title) {
			photo.title = title;
		}

		await photo.save();

		res.status(200).json({ photo, message: "Foto atualizada com sucesso." });
	} catch (error) {
		res.status(404).json({ errors: ["Foto não encontrada."] });
	}
};
const likePhoto = async (req, res) => {
	const { id } = req.params;

	try {
		const reqUser = req.user;

		const photo = await Photo.findById(id);

		if (!photo) {
			res.status(404).json({ errors: ["Foto não encontrada."] });
			return;
		}

		if (photo.likes.includes(reqUser._id)) {
			res.status(422).json({ errors: ["Você já curtiu essa foto."] });
			return;
		}
		photo.likes.push(reqUser._id);

		await photo.save();
		res.status(200).json({
			photoId: id,
			userId: reqUser._id,
			message: "Foto curtida com sucesso.",
		});
	} catch (error) {
		res.status(404).json({ errors: ["Foto não encontrada."] });
	}
};

const commentPhoto = async (req, res) => {
	const { id } = req.params;

	try {
		const { comments } = req.body;

		const reqUser = req.user;

		const user = await User.findById(reqUser._id);

		if (!user) {
			res.status(404).json({ errors: ["Usuário não encontrado."] });
			return;
		}

		const photo = await Photo.findById(id);

		if (!photo) {
			res.status(404).json({ errors: ["Foto não encontrada."] });
			return;
		}

		const userComment = {
			comments,
			userName: user.name,
			userImage: user.profileImage,
			userId: user._id,
		};

		if (comments) {
			photo.comments.push(userComment);
		}

		await photo.save();
		res.status(200).json({
			userComment,
			message: "Comentário atribuído com sucesso.",
		});
	} catch (error) {
		res.status(422).json({
			errors: ["Ocorreu um erro, por favor tente novamente mais tarde."],
		});
	}
};

const searchPhotos = async (req, res) => {
	const { q } = req.query;

	const photos = await Photo.find({ title: new RegExp(q, "i") }).exec();

	res.status(200).json(photos);
};

const unlikePhoto = async (req, res) => {
	const { id } = req.params;

	try {
		const reqUser = req.user;
		const user = await User.findById(reqUser._id);
		if (!user) {
			res.status(404).json({ errors: ["Usuário não encontrado."] });
			return;
		}

		const photo = await Photo.findById(id);
		if (!photo) {
			res.status(404).json({ errors: ["Foto não encontrada."] });
			return;
		}

		photo.likes = photo.likes.filter(
			(like) => like.toString() !== user._id.toString()
		);
		await photo.save();

		res.status(200).json({
			userId: user._id,
			photoId: photo._id,
			message: "Like removido com sucesso.",
		});
	} catch (error) {
		res.status(422).json({
			errors: ["Ocorreu um erro, por favor tente novamente mais tarde."],
		});
	}
};

module.exports = {
	insertPhoto,
	deletePhoto,
	getAllPhotos,
	getUserPhotos,
	getPhotoById,
	updatePhoto,
	likePhoto,
	commentPhoto,
	searchPhotos,
	unlikePhoto,
};
