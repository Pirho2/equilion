require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const entryRoutes = require("./routes/entries");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/entries", entryRoutes);

app.listen(3000, () => console.log("Server running"));