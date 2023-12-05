const express = require("express");
const router = express.Router();

const {
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
} = require("../controllers/PhotoController");

const {
	photoInsertValidation,
	photoUpdateValidation,
	photoCommentValidation,
} = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const { imageUpload } = require("../middlewares/imageUpload");

router.post(
	"/",
	authGuard,
	imageUpload.single("image"),
	photoInsertValidation(),
	validate,
	insertPhoto
);

router.delete("/:id", authGuard, deletePhoto);
router.get("/", authGuard, getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.get("/search", authGuard, searchPhotos);
router.get("/:id", authGuard, getPhotoById);
router.patch("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto);
router.patch("/like/:id", authGuard, likePhoto);
router.patch(
	"/comment/:id",
	authGuard,
	photoCommentValidation(),
	validate,
	commentPhoto
);

router.patch("/unlike/:id", authGuard, unlikePhoto);

module.exports = router;
