const express = require("express");
const {
    createTour,
    updateTour,
    deleteTour,
    getSingleTour,
    getAllTour,
    getTourBySearch,
    getFeaturedTour,
    getTourCount
} = require("../controllers/tourController.js");
const router = express.Router();
const { verifyAdmin } = require("../utils/verifyToken.js");

// Routes

// Create a new tour (admin only)
router.post('/', verifyAdmin, createTour);

// Update an existing tour by ID (admin only)
router.put('/:id', verifyAdmin, updateTour);

// Delete a tour by ID (admin only)
router.delete('/:id', verifyAdmin, deleteTour);

// Get a single tour by ID
router.get('/:id', getSingleTour);

// Get all tours, with pagination
router.get('/', getAllTour);

// Search tours by city, distance, or max group size
router.get("/search/getTourBySearch", getTourBySearch);

// Get featured tours (e.g., tours marked as 'featured')
router.get("/search/getFeaturedTours", getFeaturedTour);

// Get the total number of tours
router.get("/search/getTourCount", getTourCount);

module.exports = router;
