import express from "express";
import connection from "./models/index.js";
import bookroute from "./routes/bookroute.js";
import { configDotenv } from "dotenv";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("backend is working ");
});
app.use("/book", bookroute);

app.listen(process.env.PORT || 3000, async () => {
  console.log("server has started ");
  try {
    await connection.authenticate();
    connection.sync();
    console.log("sucessfully connected to database at ");
  } catch (err) {
    console.log("Error  database");
  }
});
