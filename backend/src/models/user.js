const mongoose = require("./db");

const userSchema = new mongoose.Schema({
	nom: String,
	email: String,
	motDePasse: String,
});

// Méthode pour générer un token JWT
userSchema.methods.generateAuthToken = function () {
	return jwt.sign({ _id: this._id }, "votre_secret_key");
};

// Méthode pour vérifier un token JWT
userSchema.statics.verifyAuthToken = function (token) {
	return jwt.verify(token, "votre_secret_key");
};

const User = mongoose.model("User", userSchema);

module.exports = User;
