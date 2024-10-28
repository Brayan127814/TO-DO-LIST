
import dotenv from 'dotenv';
dotenv.config()
import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Brayan#16',
    database: 'task_management'

})

export default pool