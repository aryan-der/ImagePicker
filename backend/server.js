import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/User.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

function euclideanDistance(a, b) {
  return Math.sqrt(
    a.map((x, i) => Math.pow(x - b[i], 2)).reduce((sum, now) => sum + now),
  );
}

app.post("/register", async (req, res) => {
  try {
    const user = new User({
      descriptor: req.body.descriptor,
    });

    await user.save();

    res.json({ status: "saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { descriptor } = req.body;

  const users = await User.find();

  let bestDistance = 1;

  for (let user of users) {
    const distance = euclideanDistance(descriptor, user.descriptor);

    if (distance < bestDistance) {
      bestDistance = distance;
    }
  }

  if (bestDistance < 0.5) {
    return res.json({ match: true });
  }

  res.json({ match: false });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
