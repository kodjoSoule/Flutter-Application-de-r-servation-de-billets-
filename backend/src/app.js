const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRouter = require("./routes/api");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", apiRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
