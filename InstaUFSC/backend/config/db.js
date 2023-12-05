const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
	try {
		const dbConn = await mongoose.connect(
			`mongodb+srv://${dbUser}:${dbPassword}@cluster0.xve16jx.mongodb.net/?retryWrites=true&w=majority`,
			{
				serverSelectionTimeoutMS: 5000, // Tempo limite para seleção de servidor
				heartbeatFrequencyMS: 10000, // Frequência do batimento cardíaco
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);

		console.log("Conectou-se com o banco de dados.");

		return dbConn;
	} catch (error) {
		console.log(error);
	}
};

conn();

module.exports = conn;
