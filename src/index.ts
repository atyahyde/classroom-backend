import express from "express";

const app = express();
const PORT = 8000;

// JSON middleware
app.use(express.json());

// Start server
app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
