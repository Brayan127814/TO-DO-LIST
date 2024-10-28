import { Router } from "express";
import { getAllUsers, register } from "../controller/authControllers.mjs";
import { loginSesion } from "../midelware/login.mjs";

const route = Router()

route.post("/register", register)
route.post("/login",loginSesion)
route.get("/",getAllUsers)

export default route;