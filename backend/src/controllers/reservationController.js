const Reservation = require("../models/reservation");

exports.getAllReservations = async (req, res) => {
	try {
		const reservations = await Reservation.find();
		res.json(reservations);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getReservationById = async (req, res) => {
	try {
		const reservation = await Reservation.findById(req.params.id);
		res.json(reservation);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createReservation = async (req, res) => {
	const reservation = new Reservation({
		utilisateur: req.body.utilisateur,
		evenement: req.body.evenement,
		nombreDeBillets: req.body.nombreDeBillets,
		prixTotal: req.body.prixTotal,
	});

	try {
		const newReservation = await reservation.save();
		res.status(201).json(newReservation);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
