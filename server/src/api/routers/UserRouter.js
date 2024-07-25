import express from "express";
import { login, signup } from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/", login);
UserRouter.post("/", signup);

export default UserRouter;
