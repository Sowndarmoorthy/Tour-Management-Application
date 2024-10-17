const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const tourRoutes = require('./routes/tours');
const userRoute = require("./routes/users.js")
const authRoute = require("./routes/auth.js");
const reviewRoute = require("./routes/reviews.js");
const bookingRoute = require("./routes/bookings.js")



dotenv.config();

const app = express();

app.use(cookieParser());


const port = process.env.PORT || 8000;
const corsOptions={
    origin:true,
    credentials:true
}

mongoose.set("strictQuery",false)
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }) 
        console.log('MongoDb database connected');
    }catch(err){
        console.log("MongoDB database connection failed");
    }
}

app.use(express.json());  
app.use(cors(corsOptions));       
app.use('/api/v1/tours',tourRoutes);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review',reviewRoute);
app.use('/api/v1/booking', bookingRoute);




app.listen(port, () => {
    connect();
    console.log(`Server listening on port ${port}`);
});
