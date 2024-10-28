import pool from "../config/db.mjs";
import jwt from "jsonwebtoken";



//Register user and password

export async function registerUserAndPassword(name, email, password) {

    const [result] = await pool.execute('INSERT INTO users (name,email , password) VALUES(?,?,?)', [name, email, password]);

    return result.insertId;

}


export async function getEmail(email) {

    const [result] = await pool.execute('SELECT * FROM users WHERE email =?', [email]);

    return result[0]

}

export async function getUsers() {

    const [result] = await pool.execute('SELECT * FROM users');
    return result;
}