const Event = require("../models/event");

exports.getAllEvents = async (req, res) => {
	try {
		const events = await Event.find();
		res.json(events);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getEventById = async (req, res) => {
	try {
		const event = await Event.findById(req.params.id);
		res.json(event);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createEvent = async (req, res) => {
	const event = new Event({
		nom: req.body.nom,
		date: req.body.date,
		lieu: req.body.lieu,
		prix: req.body.prix,
	});

	try {
		const newEvent = await event.save();
		res.status(201).json(newEvent);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
