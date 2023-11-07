import "./lib/db";
import express from "express";
import routers from "./routers";
require('dotenv').config({ path: '.env.local' });

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "Please visit /countries to view all the countries" });
});

app.use("/api", routers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
