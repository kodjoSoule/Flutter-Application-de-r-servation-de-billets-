const mongoose = require("mongoose");

// Remplacez <DB_URL> par l'URL de votre base de données MongoDB
const DB_URL =
	"mongodb+srv://souleymanekodjo:6YkrZpRCQKgKyyWM@cluster0.bxqcljv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on(
	"error",
	console.error.bind(console, "Erreur de connexion à la base de données :")
);
db.once("open", function () {
	console.log("Connecté à la base de données MongoDB");
});

module.exports = mongoose;
