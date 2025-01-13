import db from '~/models/index.js'

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const { typeId } = query;

    const tasksByType = await db.Task.findAll({
        where: { userId: 1, typeId }
    })

    return tasksByType;
})