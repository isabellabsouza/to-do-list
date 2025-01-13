import db from '~/models/index.js';

// PUT /api/tasks/status/:id
// Atualiza o status de uma tarefa pelo ID
export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    const { status } = await readBody(event);

    if (!id || !status) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID da tarefa ou status não fornecido',
        });
    }

    try {
        const task = await db.Task.findByPk(id);
        if (!task) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Tarefa não encontrada',
            });
        }

        task.status = status;
        await task.save();

        return { status: task.status };
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Erro ao atualizar o status da tarefa',
        });
    }
});
