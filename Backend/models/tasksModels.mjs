import db from '../config/db.mjs'

//crear las tareas

export async function createTask(title, description, user_id) {

    const result = db.execute('insert into tasks (title,description,user_id) values(?,?,?)', [title, description, user_id])

    return result.insertId;

}

//Obtener las tareas

export async function getTasks(user_id) {

    const [rows] = await db.execute('select * from tasks where user_id = ?', [user_id])

    if (rows.length == 0) {
        return [] || `Tarea no existente o ya fue eliminada`
    }

    return rows;

}

//Actualizar tareas

export async function updateTask(id, user_id, title, description, completed) {

    const result = db.execute('update tasks set title = ?, description = ?, completed = ?  WHERE id = ? AND user_id = ?', [title, description, completed, id, user_id])


    return result.affectedRows;

}

//Borrar tareas

export async function deleteTask(id ,user_id) {

    const result = db.execute('delete from tasks where id = ? and user_id = ?', [id, user_id])
    if (result.affectedRows === 0) {
        throw new Error('Task not found')
    }

    return result.affectedRows;

}