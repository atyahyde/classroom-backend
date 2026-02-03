import express from "express";
import cors from "cors";
import subjectRouter from "./routes/subjects";

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  }),
);

// JSON middleware
app.use(express.json());

app.use("/api/subjects", subjectRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
