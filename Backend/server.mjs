import express from 'express'
import route from './routes/authRoute.mjs'
import itemRoute from './routes/tasksRoute.mjs'
import cors from 'cors'


const app = express()
const PORT = process.env.PORT || 3000

app.use(cors()) // habilitando CORS para que nuestra API pueda ser consumida desde otros dominios


app.use(express.json())

app.use('/users', route)
app.use('/tasks',itemRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})