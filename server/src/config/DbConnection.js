import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/Sample");

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to database ...");
});

db.on("error", () => {
    console.log("Error connecting database ...");
});

export default db;
