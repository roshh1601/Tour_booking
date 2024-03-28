import express from "express";

import { createBooking,  getAllBookings, getBooking } from "../controllers/BookingController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

router.post("/",  createBooking );
router.get("/:id",  getBooking );
router.get("/", verifyAdmin, getAllBookings );

export default router;
