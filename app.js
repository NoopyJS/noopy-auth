const express = require("express");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
const { users } = require("./db");

const app = express();


app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

