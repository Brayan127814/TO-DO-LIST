import { getEmail } from "../models/authUsers.mjs";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
//Inicio se sesion

export async function loginSesion(req, res) {

    try {

        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).json({ menssaje: 'Faltas datos requeridos' })
        }

        //obtner el usuario 
        const user = await getEmail(email)
        //Validar usuario 
        if (!user) {
            return res.status(403).json({ message: 'Error valid password o email' })
        }
        //Comparar las contraseñas 
        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            return res.status(403).json({ message: 'Error valid password o email' })
        }

        //Generar token
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.SECRET_TOKEN, { expiresIn: '1h' })

        res.json({ succes: true, token })


    } catch (error) {
        res.status(500).json({ menssaje: 'error de inicio de sesion' })
        console.error(error);
    }

}