const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const userController = require("../controllers/userController");
const reservationController = require("../controllers/reservationController");

// Routes pour les événements
router.get("/evenements", eventController.getAllEvents);
router.get("/evenements/:id", eventController.getEventById);
router.post("/evenements", eventController.createEvent);

// Routes pour les utilisateurs
router.get("/utilisateurs", userController.getAllUsers);
router.get("/utilisateurs/:id", userController.getUserById);
router.post("/utilisateurs", userController.createUser);

// Routes pour les réservations
router.get("/reservations", reservationController.getAllReservations);
router.get("/reservations/:id", reservationController.getReservationById);
router.post("/reservations", reservationController.createReservation);

// Route pour l'authentification
router.post("/login", userController.login);

module.exports = router;
