const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const tourRoutes = require('./routes/tours');
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const reviewRoute = require("./routes/reviews.js");
const bookingRoute = require("./routes/bookings.js");
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, './.env') });

const app = express();

app.use(cookieParser());

const port = process.env.PORT || 8000;

const corsOptions = {
    origin: 'https://tourister-o1md.onrender.com', // Your frontend URL
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
};

console.log('MongoDB URL:', process.env.JWT_SECRET_KEY);

mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB database connected');
    } catch (err) {
        console.log(err);
        console.log("MongoDB database connection failed");
    }
}

app.use(express.json());
app.use(cors(corsOptions)); // Use CORS with the defined options

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    connect();
    console.log(`Server listening on port ${port}`);
});
