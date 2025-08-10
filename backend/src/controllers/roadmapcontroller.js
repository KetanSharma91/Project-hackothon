import User from "../models/userRoadmap.js";
import Roadmap from "../models/Roadmap.js"; // Path to your roadmap schema

// Get all roadmaps
export const getRoadmaps = async (req, res) => {
  try {
    const roadmaps = await User.find();
    res.status(200).json(roadmaps);
  } catch (error) {
    console.error("Error fetching roadmaps:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get roadmap by ID
export const getRoadmapById = async (req, res) => {
  try {
    const { userId } = req.params;
    const roadmap = await Roadmap.findOne(userId);

    if (!roadmap) {
      return res.status(404).json({ error: "Roadmap not found" });
    }

    res.status(200).json(roadmap);
  } catch (error) {
    console.error("Error fetching roadmap by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const addRoadmap = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const { userId, topic, weeks } = req.body;

    if (!userId || !topic || !weeks) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newRoadmap = new Roadmap({
      userId,
      topic,
      weeks
    });

    await newRoadmap.save();

    res.status(201).json({ userId: newRoadmap.userId });
  } catch (error) {
    console.error("Error adding roadmap:", error);
    res.status(500).json({ error: "Server error" });
  }
}