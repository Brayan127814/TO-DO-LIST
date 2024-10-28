import { crearTask, getTasksByID, updateTaskByID ,deleteTaskById} from "../controller/controllerTasks.mjs";
import { Router } from 'express'
import { authenticateToken } from '../midelware/authenticateToken.mjs'


const itemRoute = Router()

itemRoute.post('/create', authenticateToken, crearTask)
itemRoute.get('/task', authenticateToken,getTasksByID)
itemRoute.put('/task/:id',authenticateToken,updateTaskByID)
itemRoute.delete('/task/:id',authenticateToken,deleteTaskById)

export default itemRoute