const User = require("../models/user");

const User = require("../models/user");

// ... (autres fonctions existantes)

exports.login = async (req, res) => {
	try {
		const { email, motDePasse } = req.body;
		const user = await User.findOne({ email });

		if (!user || user.motDePasse !== motDePasse) {
			return res.status(401).json({ message: "Identifiants invalides" });
		}

		// Générer un token JWT et le renvoyer
		const token = user.generateAuthToken();
		res.json({ token });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createUser = async (req, res) => {
	const user = new User({
		nom: req.body.nom,
		email: req.body.email,
		motDePasse: req.body.motDePasse,
	});

	try {
		const newUser = await user.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
