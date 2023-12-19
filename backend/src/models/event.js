const mongoose = require("./db");

const eventSchema = new mongoose.Schema({
	nom: String,
	date: Date,
	lieu: String,
	prix: Number,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
