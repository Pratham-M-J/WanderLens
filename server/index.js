const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const session = require('express-session');
const MongoStore = require('connect-mongo');

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

// Allow CORS with credentials for sessions
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// Set up a MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/WanderLens', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Configure express-session to use connect-mongo
app.use(session({
    secret: process.env.SECRET_KEY || 'defaultsecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: 'lax',
        secure: false, // Set to true if using HTTPS
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/WanderLens',
        collectionName: 'sessions',
    }),
}));

// Define the User schema and model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Signup Route
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).json({ error: "An error occurred during signup." });
    }
});

// Login Route
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "No records found" });
        }
        
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (isValidPassword) {
            req.session.user = { id: user._id, name: user.name, email: user.email };
            return res.json({ message: "Login successful", user: req.session.user });
        } else {
            return res.status(401).json({ message: "Invalid password" });
        }
    } catch (error) {
        console.error("Error during login:", error.message);
        res.status(500).json({ error: "An error occurred during login." });
    }
});

// User session check route
app.get('/user', (req, res) => {
    if (req.session.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).json({ message: "Not Authenticated" });
    }
});

// Logout Route
app.post('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).json({ error: "Failed to logout" });
            } else {
                return res.status(200).json({ message: "Logout successful" });
            }
        });
    } else {
        return res.status(400).json({ message: "No session found" });
    }
});

// Set the port and start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
