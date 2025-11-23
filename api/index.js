import express from 'express';
import cors from 'cors';
import connectDB from '../config/db.js';

import authRoutes from "../routes/auth.routes.js";
import booksRoutes from "../routes/book.routes.js";
import orderRoutes from "../routes/order.routes.js";
import aiRoutes from "../routes/ai.routes.js";

const app = express();

// ✅ CORS FIX
app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://bookstore-frontend.vercel.app" // update after frontend deploy
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
connectDB();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Bookstore API is running with CORS Enabled");
});

// ✅ Correct API Mount Paths
app.use('/api/auth', authRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/ai', aiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
