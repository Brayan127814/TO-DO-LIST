import { registerUserAndPassword  , getUsers} from "../models/authUsers.mjs";
import bcrypt from 'bcrypt'


//registration
export async function register(req, res) {
    try {
        const { name, email, password } = req.body
        const keySecret = await bcrypt.hash(password, 10)
        const result = await registerUserAndPassword(name, email, keySecret)
        res.status(201).json({ message: "User registered successfully", user: result })

    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor ' });
        console.error(error);   
    }
}

//OBtener users

export async function getAllUsers(req, res) {
    try {
        const users = await   getUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
        console.error(error);
    }
}