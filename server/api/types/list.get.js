import db from '~/models/index.js'

export default defineEventHandler(async (event) => {
    const types = await db.Type.findAll({
        attributes: ['id','title'],
        where: { userId: 1 }
    })

    return types;
})