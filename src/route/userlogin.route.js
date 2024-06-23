import { Router } from "express";
import { loginController, singnupController } from "../controller/user.controller.js";
const Route=Router();
Route.post("/",singnupController)
Route.post("/login",loginController)
export default Route
