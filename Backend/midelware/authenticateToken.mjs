import jwt from 'jsonwebtoken'


// Middleware to verify JWT token
export async function authenticateToken(req, res, next) {

    try {
        const headers = req.headers['authorization']
        // extraer el token

        const token = headers && headers.split(' ')[1]

        if (!token) {
            return res.status(401).json({ message: 'No token provided' })
        }

        // verificar el token

        jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Token invalido' })
            }
            req.user = user
            next()
        })

    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' })
        console.error(error)
    }

}