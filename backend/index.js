require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

router.use(express.json());

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
// const mongoURI =
//   "mongodb+srv://sudeep:sudeep10@jobportal.behhjik.mongodb.net/?appName=JobPortal";

mongoose
  .connect(
    "mongodb+srv://sudeep:sudeep10@jobportal.behhjik.mongodb.net/?retryWrites=true&w=majority&appName=JobPortal"
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log("Error: ", error.message));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const jobsRoute = require("./routes/new-listingAPI");

//app.use with first parameter new-listing means that all the request from /new-listing wil be handled by jobsRoute module
app.use("/new-listing", jobsRoute);

// app.get("/", (req, res) => {
//   res.send("Hello from the backend!");
// });

// app.get("/api/getjobs", (req, res) => {
//   res.send({ msg: "Hello from nodejs " });
// });
