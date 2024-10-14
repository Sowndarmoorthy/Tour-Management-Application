const Tour = require('../models/Tour.js');

const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save();
        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedTour,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create. Try again"
        });
    }
};

// Export functions using CommonJS
module.exports = {
    createTour,
    updateTour: async (req, res) => {
        const id = req.params.id
        try {
            const updatedTour = await Tour.findByIdAndUpdate(id, {
                $set: req.body
            }, { new: true })
            res.status(200).json({
                success: true,
                message: "Successfully updated",
                data: updatedTour,
            });
        } catch (err) {
            res.status(500).json({ success: false, message: "Failed to update" });
        }
    },
    deleteTour: async (req, res) => {
        const id = req.params.id
        try {
            await Tour.findByIdAndDelete(id)
            res.status(200).json({
                success: true,
                message: "Successfully deleted",
            });
        } catch (err) {
            res.status(500).json({ success: false, message: "Failed to delete" });
        }
    },
    getSingleTour: async (req, res) => {
        const id = req.params.id
        try {
            const tour = await Tour.findById(id)
            .populate('reviews')
            res.status(200).json({
                success: true,
                message: "Successfully retrieved",
                data: tour
            });
        } catch (err) {
            res.status(404).json({ success: false, message: "Not found" });
        }
    },
    getAllTour: async (req, res) => {
        const page = parseInt(req.query.page) || 0; // Default to page 0 if not provided

        try {
            const tours = await Tour.find({})
                .populate('reviews')
                .skip(page * 8)
                .limit(8);

            res.status(200).json({
                success: true,
                count: tours.length,
                message: "Successful",
                data: tours
            });
        } catch (err) {
            res.status(404).json({ success: false, message: "Failed to get tours" });
        }
    },
    getTourBySearch: async (req, res) => {
        const city = new RegExp(req.query.city, 'i');
        const distance = parseInt(req.query.distance) ;
        const maxGroupSize = parseInt(req.query.maxGroupSize);

        try {
            const tours = await Tour.find({
                city,
                distance: { $gte: distance },
                maxGroupSize: { $gte: maxGroupSize }
            }).populate('reviews');

            res.status(200).json({
                success: true,
                message: "Successfully retrieved",
                data: tours,
            });
        } catch (err) {
            res.status(404).json({ success: false, message: "Failed to get tours" });
        }
    },
    getFeaturedTour: async (req, res) => {
        try {
            const tours = await Tour.find({featured:true}).populate('reviews').limit(8);

            res.status(200).json({
                success: true,
                message: "Successful",
                data: tours
            });
        } catch (err) {
            res.status(404).json({ success: false, message: "Nice try" });
        }
    },
    getTourCount:async(req,res)=>{
        try{
            const tourCount = await Tour.estimatedDocumentCount()

            res.status(200).json({success:true,data:tourCount})
        }catch(err){
            res.status(500).json({success:false,message:"Failed to fetch"})

        }
    }

};
