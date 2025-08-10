import express from "express";

import { addUser } from "../controllers/userContollers.js";
import { getRoadmaps, getRoadmapById, addRoadmap } from "../controllers/roadmapcontroller.js";

const router = express.Router();

// Add user
router.post("/add", addUser);

router.post("/addRoadmap", addRoadmap);

// Get all roadmaps
router.get("/getRoadmaps", getRoadmaps);

// Get roadmap by ID
router.get("/getRoadmap/:id", getRoadmapById);

export default router;
