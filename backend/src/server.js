require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

const authRoutes = require("./routes/auth");
const entryRoutes = require("./routes/entries");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/entries", entryRoutes);

app.listen(3000, () => console.log("Server running"));
