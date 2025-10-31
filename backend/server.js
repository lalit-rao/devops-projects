// Import required modules
const express = require("express");
const cors = require("cors");

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test routes
app.get("/", (req, res) => res.send("Backend server is running 🚀"));

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from the backend server!" });
});

app.post("/api/data", (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hi ${name}, data received successfully!` });
});

// app.listen(PORT, () => {
//     console.log(`✅ Server running on http://localhost:${PORT}`);
// });

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
