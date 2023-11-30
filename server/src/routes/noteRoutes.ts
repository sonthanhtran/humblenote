import express from "express";
import { getAllNotes } from "../controllers/noteController";
const router = express.Router();

router.get("/", getAllNotes);

export default router;