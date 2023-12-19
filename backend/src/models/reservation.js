const mongoose = require("./db");

const reservationSchema = new mongoose.Schema({
	utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	evenement: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
	nombreDeBillets: Number,
	prixTotal: Number,
	dateDeReservation: { type: Date, default: Date.now },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
