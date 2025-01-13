import db from '~/models/index.js'

// GET /api/types
// Busca os tipos e suas respectivas tarefas
export default defineEventHandler(async (event) => {
    const tasksByType = await db.Type.findAll({
        attributes: ['id','title', 'color'],
        include: [
            {
                model: db.Task,
                as: 'tasks',
                attributes: ['id', 'title', 'status'],
                where: { userId: 1 }
            }
        ]
    })

    return tasksByType;
})