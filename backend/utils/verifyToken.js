const jwt = require("jsonwebtoken");

// Middleware to verify the token
module.exports = {
    verifyToken: (req, res, next) => {
        const token = req.cookies.accessToken;

        if (!token) {
            return res.status(401).json({ success: false, message: "You're not authorized" });
        }

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(401).json({ success: false, message: "Token is invalid" });
            }
            req.user = user;
            next();
        });
    },

    verifyUser: (req, res, next) => {
        module.exports.verifyToken(req, res, () => {
            // You can modify the logic depending on your route's requirement
            // For example, check if req.user.id matches some other condition
            if (req.user|| req.user.role === 'admin') {
                next();
            } else {
                return res.status(403).json({ success: false, message: "You're Not Authenticated" });
            }
        });
    },
    

    verifyAdmin: (req, res, next) => {
        module.exports.verifyToken(req, res, () => {
            if (req.user.role === 'admin') {
                next();
            } else {
                return res.status(403).json({ success: false, message: "You're Not Authorized" });
            }
        });
    }
};
