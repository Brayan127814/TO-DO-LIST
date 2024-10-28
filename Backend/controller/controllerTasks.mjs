import { createTask, getTasks, updateTask,deleteTask } from '../models/tasksModels.mjs'

//Create tasks
export async function crearTask(req, res) {

    try {
        const { title, description } = req.body
        const user_id = req.user.id
        console.log(req.user.id)

        if (!title || !description) {
            res.status(400).json({ message: 'Faltan datos requeridos' })
            return
        }
        const result = await createTask(title, description, user_id)
        res.status(201).json({ result, title, description })
    } catch (error) {
        res.status(500).json({ message: 'Error interno de servidor' });
        console.error(error);
    }

}

//Get all tasks
export async function getTasksByID(req, res) {

    try {
        const user_id = req.user.id
        console.log(req.user.id)
        const result = await getTasks(user_id)
        res.status(200).json({ result })
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
        console.error(error);
    }

}





//Update task by ID
export async function updateTaskByID(req, res) {
    try {
        const id = req.params.id
        const user_id = req.user.id
     
        if (!title || !description || typeof completed !== 'boolean') {
            res.status(400).json({ message: 'Faltan datos requeridos' })
            return
        }

        await updateTask(id,user_id,title, description, completed)

        res.status(200).json({ message: 'Tarea actualizada' })
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
        console.error(error);
    }

}

// delete tasks
export async function deleteTaskById(req, res) {

    try {
        const id_task = req.params.id;
        const user_id = req.user.id
        await deleteTask(id_task, user_id)
        res.status(204).json({ message: 'Tarea eliminada correctamente' })
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
        console.error(error);
    }

}