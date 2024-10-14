const Booking = require("../models/Booking.js"); 

module.exports = {
    createBooking: async (req, res) => {
        const { tourName, fullName, guestSize, phone, bookAt } = req.body;
        
        const newBooking = new Booking({
            userId: req.user.id,  
            userEmail: req.user.email,  
            tourName,
            fullName,
            guestSize,
            phone,
            bookAt,
        });

        try {
            const savedBooking = await newBooking.save();
            res.status(200).json({
                success: true,
                message: "Your tour is booked",
                data: savedBooking,
            });
        } catch (err) {
            res.status(500).json({ success: true, message: "Internal Server Error" });
        }
    },
    getBooking : async(req,res)=>{
        const id = req.params.id
        try{
            const book = await Booking.findById(id)
            res.status(200).json({
                success : true,
                message  : "Successfull",
                data : book,
            })
        }catch(err){
            res.status(404).json({ success: true, message: "Not found!"});

        }
    },
    getAllBooking : async(req,res)=>{
      
        try{
            const books = await Booking.find();
            res.status(200).json({
                success : true,
                message  : "Successfull",
                data : books,
            })
        }catch(err){
            res.status(500).json({ success: true, message: "internal server error"});

        }
    }
};
