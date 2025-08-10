import User from "../models/userRoadmap.js"; // Path to your user schema

// Add a new user
export const addUser = async (req, res) => {
  try {
    const { Name, topic, keywords } = req.body;

    if (!Name || !topic || !keywords) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newUser = new User({ Name, topic, keywords });
    await newUser.save();

    res.status(201).json({ message: "User added successfully", user: newUser._id });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Server error" });
  }
};
