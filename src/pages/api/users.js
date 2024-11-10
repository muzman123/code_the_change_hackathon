import connectToDatabase from "../../../lib/mongodb.js";
import User from "../../../models/User.js";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "POST") {
    const { name, email } = req.body;

    try {
      // Check if the user exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(200).json({ message: "User already exists" });
      }

      // If not, create a new user
      const newUser = await User.create({ name, email });
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error checking/creating user:", error);
      res.status(500).json({ message: "Error checking/creating user" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}